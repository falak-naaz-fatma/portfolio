"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/SectionLabel";
import { revealItem } from "@/lib/motion";

type Skill = {
  name: string;
  slug?: string;
  icon?: "component" | "lock";
};

const rowOne: Skill[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind CSS", slug: "tailwindcss" },
  { name: "shadcn/ui", icon: "component" },
  { name: "HTML5", slug: "html5" },
  { name: "CSS3", slug: "css3" },
];

const rowTwo: Skill[] = [
  { name: "MongoDB", slug: "mongodb" },
  { name: "Python", slug: "python" },
  { name: "Django", slug: "django" },
  { name: "OAuth 2.0", icon: "lock" },
  { name: "Git", slug: "git" },
  { name: "GitHub", slug: "github" },
  { name: "Postman", slug: "postman" },
  { name: "JavaScript", slug: "javascript" },
];

function CustomIcon({ icon }: { icon: "component" | "lock" }) {
  if (icon === "lock") {
    return (
      <svg className="size-7 text-text" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 10V8a5 5 0 0 1 10 0v2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 14v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className="size-7 text-text" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="flex shrink-0 items-center gap-[0.6rem] rounded-sm border border-border bg-bg-card px-[1.2rem] py-[0.6rem] transition-colors duration-200 hover:border-[#4F7CFF]">
      {skill.slug ? (
        <span
          className="size-7 bg-text"
          style={{
            maskImage: `url(https://cdn.simpleicons.org/${skill.slug}/ffffff)`,
            maskPosition: "center",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskImage: `url(https://cdn.simpleicons.org/${skill.slug}/ffffff)`,
            WebkitMaskPosition: "center",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
          }}
          aria-hidden="true"
        />
      ) : (
        <CustomIcon icon={skill.icon ?? "component"} />
      )}
      <span className="font-mono text-[0.85rem] text-text">{skill.name}</span>
      <span className="h-4 w-px bg-[#333]" aria-hidden="true" />
    </div>
  );
}

function MarqueeRow({ skills, direction }: { skills: Skill[]; direction: "left" | "right" }) {
  const repeated = [...skills, ...skills];

  return (
    <div className="marquee-wrapper overflow-hidden">
      <div className={`flex w-max gap-4 ${direction === "left" ? "marquee-left" : "marquee-right"}`}>
        {repeated.map((skill, index) => (
          <SkillItem key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <AnimatedSection id="skills" labelledBy="skills-title" className="section-padding pb-0!">
      <motion.div variants={revealItem}>
        <SectionLabel>SKILLS</SectionLabel>
        <h2 id="skills-title" className="mt-3 font-heading text-[2.5rem] font-bold text-text">
          What I work with
        </h2>
        <p className="mb-12 mt-4 text-[0.95rem] leading-relaxed text-text-muted">
          Technologies and tools I use to build production-grade applications.
        </p>
      </motion.div>

      <motion.div variants={revealItem} className="skill-marquee-mask grid gap-4">
        <MarqueeRow skills={rowOne} direction="left" />
        <MarqueeRow skills={rowTwo} direction="right" />
      </motion.div>
    </AnimatedSection>
  );
}
