export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}