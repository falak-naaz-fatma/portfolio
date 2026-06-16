"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

type PortfolioTheme = {
  mounted: boolean;
  theme?: string;
  resolvedTheme?: string;
  toggleTheme: () => void;
};

export function useTheme(): PortfolioTheme {
  const { theme, resolvedTheme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return { mounted, theme, resolvedTheme, toggleTheme };
}
