import type { ContactLink, Experience, NavItem, Project, SkillGroup } from "@/types/portfolio";

export const navItems: NavItem[] = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Work", href: "#projects", id: "projects" },
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
    "Built and maintained a full-stack Next.js application — implementing SSR, dynamic routing, and SEO optimization through metadata configuration.",
    "Engineered OAuth 2.0 integrations across multiple platforms — handling auth flows, token lifecycle management, and cross-platform data sync.",
    "Led full UI migration from PrimeReact to shadcn/ui + Tailwind CSS — modernizing the design system and reducing bundle size.",
    "Built reusable Context Providers managing app-wide auth state, and led onboarding for new team members on backend architecture and workflows.",
  ],
};

export const projects: Project[] = [
  {
    title: "Productiviti",
    href: "https://productiviti.io",
    description:
      "A productivity platform integrating multiple external services with real-time sync, unified auth, and a fully custom design system.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui", "OAuth 2.0"],
    achievements: [
      "Engineered OAuth 2.0 integrations handling token lifecycle and cross-platform data sync across multiple services",
      "Built global Context Providers managing app-wide auth state and real-time platform connection statuses",
      "Led full UI migration from PrimeReact/PrimeFlex to shadcn/ui + Tailwind CSS, modernizing the design system",
    ],
    featured: true,
    badgeLabel: "Company Project",
  },
  {
    title: "Spendly",
    href: "https://finance-dashboard-blush-rho.vercel.app/",
    description:
      "A personal finance dashboard for tracking income, expenses, and spending patterns — built independently with full authentication, transaction management, and analytics.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth.js", "Recharts", "Framer Motion"],
    achievements: [
      "Built secure authentication with email/password (encrypted) and Google OAuth via NextAuth.js, including a password reset flow",
      "Designed protected dashboard, transactions, and analytics routes with CRUD operations backed by MongoDB",
      "Built data visualizations using Recharts — bar charts, pie charts, balance trends, and category analytics",
    ],
    featured: true,
    badgeLabel: "Personal Project",
  },
  {
    title: "HireTalentt",
    href: "https://hiretalentt.com",
    description:
      "A full-stack hiring platform with server-side rendering, secure authentication, and real-time job management.",
    stack: ["React", "Next.js", "Tailwind", "MongoDB", "OAuth 2.0"],
    achievements: [
      "Implemented SSR with Next.js for SEO optimization and metadata config",
      "Built OAuth 2.0 authentication flow for secure platform integrations",
      "Developed REST APIs and integrated MongoDB for real-time CRUD operations",
    ],
    badgeLabel: "Company Project",
  },
  {
    title: "Job Portal Web App",
    description:
      "A role-based job portal with separate flows for admins, recruiters, and job seekers.",
    stack: ["React", "Tailwind"],
    achievements: [
      "Built admin, recruiter, and user flows with responsive UI",
      "Integrated role-based authentication and secure login/registration",
      "Implemented job filters, search, and pagination for improved UX",
    ],
    badgeLabel: "Client Project",
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