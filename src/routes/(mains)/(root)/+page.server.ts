import get from '$lib/posts';

const projects = get('projects');
const posts = get('posts');

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }: any) {
  const projectResults = Object.keys(projects)
    .slice(0, 3) // Get the last 3 projects
    .map((index) => {
      const { slug, title, date, excerpt, tags, readingTime } = projects[index as any];
      return {
        slug,
        title,
        date,
        excerpt,
        tags,
        readingTime
      };
    });

  const postResults = Object.keys(posts)
    .slice(0, 4) // Get the last 4 posts
    .map((index) => {
      const { slug, title, date, excerpt, tags, readingTime } = posts[index as any];
      return {
        slug,
        title,
        date,
        excerpt,
        tags,
        readingTime
      };
    });

  return {
    projects: projectResults || [],
    posts: postResults || []
  };
}
