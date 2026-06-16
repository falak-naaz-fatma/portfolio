export type NavItem = {
  label: string;
  href: `#${string}`;
  id: string;
};

export type Project = {
  title: string;
  href?: string;
  description: string;
  fullDescription?: string;
  stack: string[];
  achievements: string[];
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};