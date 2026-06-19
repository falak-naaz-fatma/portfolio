"use client";

import { motion } from "framer-motion";

import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionLabel } from "@/components/SectionLabel";
import { revealItem } from "@/lib/motion";

const paragraphs = [
  "I'm Falak Naaz Fatma, a front-end focused Full Stack Developer based in Bhopal, India. I spend most of my time building interfaces that feel fast, look sharp, and scale cleanly — using React, Next.js, and TypeScript as my primary toolkit.",
  "Over the past 1.5 years at Infomover Technologies, I've shipped two production web apps — handling everything from OAuth 2.0 integrations and token lifecycle management to full design system migrations and reusable component architecture. I care about the details: consistent spacing, accessible markup, and components that other developers actually enjoy using.",
  "When I'm not writing code, I'm usually exploring new frontend patterns, refining my understanding of performance optimization, or looking for the next problem worth solving.",
];

export function About() {
  return (
    <AnimatedSection id="about" labelledBy="about-title" className="section-padding !pb-0">
      <motion.div variants={revealItem} className="mb-10">
        <SectionLabel>ABOUT</SectionLabel>
        <h2 id="about-title" className="mt-3 font-heading text-[2.5rem] font-bold text-text">
          A little about me
        </h2>
      </motion.div>

      <motion.div variants={revealItem}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="mb-6 text-[1rem] leading-[1.8] text-text-muted last:mb-0">
            {paragraph}
          </p>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}