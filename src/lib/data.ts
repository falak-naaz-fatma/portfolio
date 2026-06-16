import type { ContactLink, Experience, NavItem, Project, SkillGroup } from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "Work", href: "#experience", id: "experience" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const hero = {
  name: "Falak Naaz Fatma",
  role: "Front-end focused Full Stack Developer",
  bio: "Front-end focused Full Stack Developer with 1.5 years building production apps with React, Next.js, and TypeScript.",
  typewriterWords: ["build web apps", "craft UI systems", "love clean code", "ship fast"],
};

export const experience: Experience = {
  company: "Infomover Technologies",
  role: "Full Stack Developer",
  dates: "Sept 2024 – Feb 2026",
  location: "Remote",
  bullets: [
    "Built full-stack Next.js app with SEO-optimized, high-performance components",
    "Implemented OAuth 2.0 for secure integration with external platforms",
    "Resolved Safari-specific rendering bug achieving cross-browser consistency",
    "Led onboarding for new team members on backend architecture and workflow",
  ],
};

export const projects: Project[] = [
  {
    title: "Productiviti",
    href: "https://productiviti.io",
    description:
      "A featured product platform shaped around secure integrations, shared interface systems, and a polished migration to a modern component stack.",
    fullDescription:
      "A featured product platform focused on secure OAuth integrations, shared auth state management, and a complete migration to a modern UI component ecosystem.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "OAuth 2.0"],
    achievements: [
      "OAuth 2.0 integrations with full token lifecycle and cross-platform sync",
      "Global Context Providers managing auth state and real-time platform status",
      "Reusable component library standardizing design patterns",
      "Full UI migration from PrimeReact to shadcn/ui + Tailwind",
    ],
    featured: true,
  },
  {
    title: "HireTalentt",
    href: "https://hiretalentt.com",
    description: "SSR for SEO, OAuth 2.0 auth, REST APIs with MongoDB CRUD.",
    stack: ["React", "Next.js", "Tailwind", "MongoDB", "OAuth 2.0"],
    achievements: ["SSR for SEO", "OAuth 2.0 auth", "REST APIs with MongoDB CRUD"],
  },
  {
    title: "Job Portal Web App",
    description: "Role-based flows (admin/recruiter/user), filters, search, pagination.",
    stack: ["React", "Tailwind"],
    achievements: [
      "Role-based flows for admin, recruiter, and user",
      "Job filters, search, and pagination",
      "Secure authentication",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Next.js API Routes", "Python", "Django", "MongoDB", "REST APIs", "OAuth 2.0"],
  },
  {
    title: "Tools",
    skills: ["JavaScript", "C++", "Git", "GitHub", "Postman"],
  },
];

export const contactInfo = {
  email: "falaknaazfatma26@gmail.com",
  phone: "+91 9754345274",
  linkedin: "linkedin.com/in/falak-naaz-fatma",
  github: "github.com/falak-naaz-fatma",
};

export const contactLinks: ContactLink[] = [
  {
    label: "email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    label: "linkedin",
    value: contactInfo.linkedin,
    href: "https://linkedin.com/in/falak-naaz-fatma",
    external: true,
  },
  {
    label: "github",
    value: contactInfo.github,
    href: "https://github.com/falak-naaz-fatma",
    external: true,
  },
];
