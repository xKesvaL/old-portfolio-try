interface Sparkle {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  pos: {
    top: string;
    left: string;
  };
}

interface Post {
  slug: string;
  title: string;
  date: Date;
  excerpt: string;
  tags: string[];
  count: number;
  updated: Date;
  hidden: boolean;
  html: string;
  readingTime: string;
  project: any;
}

interface TagsAndProjects {
  tag: string;
  project: Project;
}
