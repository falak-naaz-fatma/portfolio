"use client";

import { useEffect, useState } from "react";

type UseScrollSpyOptions = {
  sectionIds: string[];
  offset?: number;
};

export function useScrollSpy({ sectionIds, offset = 128 }: UseScrollSpyOptions) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateState = () => {
      setIsScrolled(window.scrollY > 80);

      const activeSection = sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .reverse()
        .find((section) => section.getBoundingClientRect().top <= offset);

      if (activeSection) {
        setActiveId(activeSection.id);
      }
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [offset, sectionIds]);

  return { activeId, isScrolled };
}
