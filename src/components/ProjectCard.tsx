"use client";

import { motion, useReducedMotion } from "framer-motion";

import { SkillPill } from "@/components/SkillPill";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const hoverAnim = prefersReducedMotion ? {} : { y: -4 };

  if (project.featured) {
    return (
      <motion.article
        whileHover={hoverAnim}
        className="col-span-full rounded-sm border border-border bg-bg-card p-8 shadow-[0_0_60px_rgba(79,124,255,0.08)] transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      >
        <span className="mb-6 inline-flex items-center rounded-sm bg-accent-dim px-2 py-0.5 font-mono text-[0.65rem] font-semibold text-accent">
          Featured Project
        </span>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-heading text-[1.6rem] font-bold text-text">{project.title}</h3>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-mono text-[0.8rem] text-accent transition-opacity hover:opacity-80"
                aria-label={`${project.title} project website`}
              >
                {project.href.replace("https://", "")} ↗
              </a>
            )}
            <p className="mt-4 text-[0.92rem] leading-relaxed text-text-muted">{project.description}</p>
          </div>
          <div>
            <ul className="grid gap-3">
              {project.achievements.map((a) => (
                <li key={a} className="flex items-start gap-2 text-[0.92rem] leading-relaxed text-text-muted">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <SkillPill key={s}>{s}</SkillPill>
          ))}
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      whileHover={hoverAnim}
      className="flex flex-col rounded-sm border border-border bg-bg-card p-6 transition-shadow hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
    >
      <h3 className="font-heading text-[1.1rem] font-bold text-text">{project.title}</h3>
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block font-mono text-[0.78rem] text-accent transition-opacity hover:opacity-80"
          aria-label={`${project.title} project website`}
        >
          {project.href.replace("https://", "")} ↗
        </a>
      )}
      <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-text-muted">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <SkillPill key={s}>{s}</SkillPill>
        ))}
      </div>
    </motion.article>
  );
}