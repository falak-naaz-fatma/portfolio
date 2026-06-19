"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SkillPill } from "@/components/SkillPill";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

function getBadgeStyles(badgeLabel?: string) {
  switch (badgeLabel) {
    case "Personal Project":
      return { bg: "bg-[#4ADE80]/15", text: "text-[#4ADE80]" };
    case "Academic Project":
    case "Client Project":
      return { bg: "bg-[#F5A623]/15", text: "text-[#F5A623]" };
    case "Company Project":
    default:
      return { bg: "bg-accent-dim", text: "text-accent" };
  }
}

function getGlowColor(badgeLabel?: string) {
  switch (badgeLabel) {
    case "Personal Project":
      return "0 0 60px rgba(74,222,128,0.08)";
    case "Academic Project":
    case "Client Project":
      return "0 0 60px rgba(245,166,35,0.08)";
    case "Company Project":
    default:
      return "0 0 60px rgba(79,124,255,0.08)";
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverAnim = prefersReducedMotion ? {} : { y: -4 };

  const linkText = project.badgeLabel === "Personal Project" ? "Live Demo ↗" : "Live Site ↗";
  const actions = project.href ? (
    <div className="mt-auto flex gap-4 pt-6">
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-[0.78rem] text-[#4F7CFF] hover:underline"
        aria-label={`Open ${project.title} live site in a new tab`}
      >
        {linkText}
      </a>
    </div>
  ) : null;

  const badgeStyles = getBadgeStyles(project.badgeLabel);
  const glow = getGlowColor(project.badgeLabel);

  return (
    <motion.article
      whileHover={hoverAnim}
      className="flex flex-col overflow-hidden rounded-sm border border-border bg-bg-card transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      style={{ boxShadow: glow }}
    >
      <div className="flex flex-1 flex-col p-6">
        <span className={`mb-4 inline-flex w-fit items-center rounded-sm px-2 py-0.5 font-mono text-[0.65rem] font-semibold ${badgeStyles.bg} ${badgeStyles.text}`}>
          {project.badgeLabel}
        </span>
        <h3 className="font-heading text-[1.4rem] font-bold text-text">{project.title}</h3>
        <p className="mt-3 text-[0.88rem] leading-relaxed text-text-muted">{project.description}</p>
        <ul className="mt-4 grid gap-2">
          {project.achievements.map((achievement) => (
            <li key={achievement} className="flex items-start gap-2 text-[0.86rem] leading-relaxed text-text-muted">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {achievement}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((skill) => (
            <SkillPill key={skill}>{skill}</SkillPill>
          ))}
        </div>
        {actions}
      </div>
    </motion.article>
  );
}