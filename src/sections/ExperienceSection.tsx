"use client";

import { motion, useReducedMotion } from "framer-motion";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/SectionLabel";
import { experience } from "@/lib/data";
import { revealItem } from "@/lib/motion";

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatedSection id="experience" labelledBy="experience-title" className="section-padding">
      <motion.div variants={revealItem} className="mb-10">
        <SectionLabel>Experience</SectionLabel>
        <h2 id="experience-title" className="mt-3 font-heading text-[2.5rem] font-bold text-text">
          Where I've worked
        </h2>
      </motion.div>

      <motion.article
        variants={revealItem}
        whileHover={prefersReducedMotion ? undefined : { y: -2 }}
        className="rounded-sm border border-border bg-bg-card p-8 transition-all hover:border-l-[3px] hover:border-l-accent md:p-10"
      >
        <div className="grid gap-6 md:grid-cols-[30%_70%]">
          <div>
            <h3 className="font-heading text-[1.1rem] font-bold text-text">
              {experience.company}
            </h3>
            <p className="mt-1 text-[0.85rem] text-accent">{experience.role}</p>
            <p className="mt-3 font-mono text-[0.8rem] text-text-muted">{experience.dates}</p>
            <p className="font-mono text-[0.8rem] text-text-muted">{experience.location}</p>
          </div>
          <div>
            <ul className="grid gap-3">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[0.92rem] leading-relaxed text-text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.article>
    </AnimatedSection>
  );
}