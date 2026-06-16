"use client";

import { useMemo, useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cx } from "@/lib/utils";
import type { NavItem } from "@/types/portfolio";

type NavProps = {
  items: NavItem[];
};

export function Nav({ items }: NavProps) {
  const sectionIds = useMemo(() => items.map((item) => item.id), [items]);
  const { activeId, isScrolled } = useScrollSpy({ sectionIds });
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={cx(
        "fixed left-0 top-0 z-50 w-full h-16 transition-all duration-300",
        isScrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-full max-w-[1100px] items-center justify-between px-6" aria-label="Primary navigation">
        <a
          href="#main"
          className="font-heading text-[1.1rem] font-bold tracking-[0.08em] text-text"
          aria-label="Falak Naaz Fatma home"
        >
          FALAK
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cx(
                "font-inter text-[0.85rem] text-text-muted transition-colors duration-200 hover:text-text",
                activeId === item.id && "text-text",
              )}
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex size-9 items-center justify-center text-text"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              {mobileOpen ? (
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M2 4H18M2 10H18M2 16H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-bg px-6 pb-6 pt-2 md:hidden">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cx(
                "block py-3 font-inter text-[0.95rem] text-text-muted transition-colors hover:text-text",
                activeId === item.id && "text-text",
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}