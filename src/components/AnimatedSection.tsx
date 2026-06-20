"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

import { useInView } from "@/hooks/useInView";
import { revealContainer } from "@/lib/motion";
import { cx } from "@/lib/utils";

type AnimatedSectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export function AnimatedSection({ id, children, className, labelledBy }: AnimatedSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const { isInView, prefersReducedMotion } = useInView(ref);

  return (
    <motion.section
      ref={ref}
      id={id}
      aria-labelledby={labelledBy}
      className={cx("w-full mx-auto max-w-[1100px]", className)}
      initial={prefersReducedMotion ? false : "hidden"}
      animate={isInView ? "visible" : "hidden"}
      variants={revealContainer}
    >
      {children}
    </motion.section>
  );
}