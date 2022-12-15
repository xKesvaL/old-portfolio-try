import Prism from 'prismjs';
import 'prism-svelte';
import readingTime from 'reading-time';

const get = (type: 'projects' | 'posts') => {
  let imports;
  if (type == 'projects') {
    imports = import.meta.glob('./projects/*.md', { eager: true });
  } else if (type == 'posts') {
    imports = import.meta.glob('./posts/*.md', { eager: true });
  }

  const projects: Post[] = [];
  for (let path in imports) {
    const project: any = imports[path];
    projects.push({
      ...project.metadata,
      ...project.default.render()
    });
  }

  const allTagsAndProjects: TagsAndProjects[] = projects
    .filter((x) => !x.hidden)
    .map((project) =>
      project.tags.map((tag) => {
        return { tag: tag, project: project };
      })
    )
    .flat();

  const groupByTags = (array: { tag: string; project: Post }[]) => {
    return array.reduce((acc: any, val) => {
      const property = val['tag'];
      acc[property] = acc[property] || [];
      acc[property].push(val['project']);
      return acc;
    }, {});
  };

  const getRelatedProjects = (project: Post): Post[] => {
    let allRelatedProjects: Post[] = [];
    // Get posts with same tags
    for (const tag of project.tags) {
      allRelatedProjects = allRelatedProjects.concat(categories[tag]);
    }

    let relatedProjects: any[] = [];
    // Sort by number of similar tags
    for (const relProject of allRelatedProjects) {
      if (relProject.slug === project.slug) {
        continue;
      }
      const rel = relatedProjects.find((x) => x.post.slug === relProject.slug);
      if (rel) {
        rel.count++;
      } else {
        relatedProjects.push({
          post: { ...relProject, readingTime: readingTime(relProject.html).text },
          count: 1,
          date: relProject.date
        });
      }
    }

    // If there are no related posts, just grab all
    if (relatedProjects.length === 0) {
      relatedProjects = projects
        .filter((x) => x.slug !== project.slug)
        .map((x) => ({
          post: { ...x, readingTime: readingTime(x.html).text },
          count: 0,
          date: x.date
        }));
    }

    return relatedProjects;
  };

  const categories = groupByTags(allTagsAndProjects);

  const filteredProjects = projects
    .filter((p) => !p.hidden)
    .sort((a, b) =>
      new Date(a.date).getTime() > new Date(b.date).getTime()
        ? -1
        : new Date(a.date).getTime() < new Date(b.date).getTime()
        ? 1
        : 0
    )
    .map((project) => {
      const readingTimeDuration = readingTime(project.html || '').text;

      const relatedProjects = getRelatedProjects(project);

      return {
        ...project,
        readingTime: readingTimeDuration,
        relatedProjects: relatedProjects
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .sort((a, b) => b.count - a.count)
          .slice(0, 3)
          .map((x) => x.project)
      };
    });

  return filteredProjects;
};

export default get;
