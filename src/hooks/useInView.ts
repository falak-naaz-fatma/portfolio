"use client";

import { useInView as useFramerInView, useReducedMotion } from "framer-motion";
import { RefObject } from "react";

export function useInView(ref: RefObject<Element | null>, amount = 0.18) {
  const prefersReducedMotion = useReducedMotion();
  const isInView = useFramerInView(ref, {
    amount,
    once: true,
  });

  return {
    isInView: prefersReducedMotion ? true : isInView,
    prefersReducedMotion: Boolean(prefersReducedMotion),
  };
}
