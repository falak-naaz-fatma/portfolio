"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/SectionLabel";
import { SkillPill } from "@/components/SkillPill";
import { skillGroups } from "@/lib/data";
import { revealItem } from "@/lib/motion";

export function Skills() {
    return (
        <AnimatedSection id="skills" labelledBy="skills-title" className="section-padding">
            <motion.div variants={revealItem} className="mb-10">
                <SectionLabel>Skills</SectionLabel>
                <h2 id="skills-title" className="mt-3 font-heading text-[2.5rem] font-bold text-text">
                    What I work with
                </h2>
            </motion.div>

            <motion.div variants={revealItem} className="grid gap-4 md:grid-cols-3">
                {skillGroups.map((group) => (
                    <article key={group.title} className="rounded-sm border border-border bg-bg-card p-6">
                        <h3 className="font-mono text-[0.72rem] font-bold uppercase tracking-widest text-accent">
                            {group.title}
                        </h3>
                        <div className="mt-4 flex flex-wrap gap-2" aria-label={`${group.title} skills`}>
                            {group.skills.map((skill) => (
                                <SkillPill key={skill}>{skill}</SkillPill>
                            ))}
                        </div>
                    </article>
                ))}
            </motion.div>
        </AnimatedSection>
    );
}