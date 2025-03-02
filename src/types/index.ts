// Project types

export interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string | null;
}

// Experience types
export interface ExperienceType {
  year: string;
  title: string;
  company: string;
  description: string;
}

// Skill types
export interface SkillType {
  name: string;
  level: number;
}