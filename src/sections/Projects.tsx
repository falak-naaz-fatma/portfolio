"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionLabel } from "@/components/SectionLabel";
import { projects } from "@/lib/data";
import { revealItem } from "@/lib/motion";

export function Projects() {
    const featuredProjects = projects.filter((p) => p.featured);
    const gridProjects = projects.filter((p) => !p.featured);

    return (
        <AnimatedSection id="projects" labelledBy="projects-title" className="section-padding !pb-0">
            <motion.div variants={revealItem} className="mb-10">
                <SectionLabel>Projects</SectionLabel>
                <h2 id="projects-title" className="mt-3 font-heading text-[2.5rem] font-bold text-text">
                    Things I've shipped
                </h2>
            </motion.div>

            <motion.div variants={revealItem} className="grid gap-6 lg:grid-cols-2">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </motion.div>

            <motion.div variants={revealItem} className="mt-6 grid gap-6 lg:grid-cols-2">
                {gridProjects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </motion.div>
        </AnimatedSection>
    );
}
