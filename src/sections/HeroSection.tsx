"use client";

import { useEffect, useRef, useState } from "react";

const typewriterWords = ["build web apps", "craft UI systems", "love clean code", "ship fast"];
const TYPE_SPEED = 80;
const DELETE_SPEED = 40;
const PAUSE_MS = 1500;

const fullCode = `const Falak = () => {
  const skills = [
    "React.js", "Next.js", "TypeScript"
  ];

  const experience = {
    years: 1.5,
    role: "Full Stack Developer",
    focus: "Frontend"
  };

  return (
    <Developer
      name="Falak Naaz Fatma"
      skills={skills}
      available={true}
    />
  );
};`;

const codeLines = fullCode.split("\n");

const syntaxTheme: Record<string, string> = {
  keyword: "text-[#c792ea]",
  string: "text-[#c3e88d]",
  function: "text-[#82aaff]",
  comment: "text-[#546e7a]",
  variable: "text-[#f07178]",
  plain: "text-[#eeffff]",
  number: "text-[#f78c6c]",
  boolean: "text-[#ff5370]",
  bracket: "text-[#eeffff]",
};

function highlightLine(line: string) {
  const regex = /(\/\/.*|"(?:[^"\\]|\\.)*"|true|false|\d+\.?\d*|\b(const|let|return|=>)\b|\b\w+\b|[{}()[\],;]|=>)/g;
  const parts: { text: string; cls: string }[] = [];
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = regex.exec(line)) !== null) {
    if (m.index > last) {
      parts.push({ text: line.slice(last, m.index), cls: syntaxTheme.plain });
    }
    const val = m[0];
    let cls = syntaxTheme.plain;
    if (val === "const" || val === "let" || val === "return") cls = syntaxTheme.keyword;
    else if (val === "true" || val === "false") cls = syntaxTheme.boolean;
    else if (/^\d+\.?\d*$/.test(val)) cls = syntaxTheme.number;
    else if (/^"/.test(val)) cls = syntaxTheme.string;
    else if (val === "=>") cls = syntaxTheme.keyword;
    else if (["{", "}", "(", ")", "[", "]", ",", ";"].includes(val)) cls = syntaxTheme.bracket;
    else if (["skills", "experience", "years", "role", "focus", "name", "available", "Falak", "Developer", "Frontend"].includes(val))
      cls = syntaxTheme.variable;
    else if (val.startsWith("//")) cls = syntaxTheme.comment;
    parts.push({ text: val, cls });
    last = m.index + val.length;
  }
  if (last < line.length) parts.push({ text: line.slice(last), cls: syntaxTheme.plain });
  return parts;
}

function TypewriterText() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex % typewriterWords.length];

    if (isPaused) {
      const timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, PAUSE_MS);
      return () => clearTimeout(timer);
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
        return;
      }
      const timer = setTimeout(() => setDisplayText(displayText.slice(0, -1)), DELETE_SPEED);
      return () => clearTimeout(timer);
    }

    if (displayText === currentWord) {
      setIsPaused(true);
      return;
    }

    const timer = setTimeout(() => setDisplayText(currentWord.slice(0, displayText.length + 1)), TYPE_SPEED);
    return () => clearTimeout(timer);
  }, [displayText, wordIndex, isDeleting, isPaused]);

  return (
    <span>
      {displayText}
      <span className="inline-block size-[3px] animate-blink bg-[var(--text)]" />
    </span>
  );
}

function CodeEditor() {
  const [finished, setFinished] = useState(false);
  const [highlightedHTML, setHighlightedHTML] = useState("");
  const codeRef = useRef<HTMLPreElement | null>(null);
  const indexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!codeRef.current) return;
    codeRef.current.textContent = "";
    indexRef.current = 0;
    setFinished(false);

    intervalRef.current = setInterval(() => {
      if (!codeRef.current) return;
      if (indexRef.current >= fullCode.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setFinished(true);
        return;
      }
      codeRef.current.textContent += fullCode[indexRef.current];
      indexRef.current++;
    }, 30);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!finished) return;
    function esc(s: string) {
      return s.replace(/[&<>]/g, (c: string) =>
        c === "&" ? "\x26amp;" : c === "<" ? "\x26lt;" : "\x26gt;"
      );
    }
    let html = "";
    for (let i = 0; i < codeLines.length; i++) {
      const line = codeLines[i];
      const parts = highlightLine(line);
      let lineHtml = "";
      for (const part of parts) {
        lineHtml += '<span class="' + part.cls + '">' + esc(part.text) + "</span>";
      }
      html += '<div class="leading-relaxed">' + lineHtml + "</div>";
    }
    setHighlightedHTML(html);
  }, [finished]);

  return (
    <div className="w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-card)] shadow-[0_0_60px_rgba(79,124,255,0.08)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="font-mono text-[0.8rem] text-[var(--text-muted)]">portfolio.tsx</span>
        <div className="w-14" />
      </div>
      <div className="flex p-5 font-mono text-[0.8rem] leading-relaxed">
        <div className="mr-4 select-none text-right text-[var(--border)]">
          {codeLines.map((_, i) => (
            <div key={i} className="leading-relaxed">{i + 1}</div>
          ))}
        </div>
        <div className="relative min-h-[240px] w-full">
          <pre
            ref={codeRef}
            className={`absolute inset-0 m-0 whitespace-pre-wrap font-mono text-[0.8rem] leading-relaxed text-[var(--text)] ${finished ? "invisible" : "visible"}`}
            style={{ tabSize: 2 }}
          />
          {finished && highlightedHTML && (
            <div
              className="relative"
              dangerouslySetInnerHTML={{ __html: highlightedHTML }}
            />
          )}
          {finished && (
            <span className="inline-block size-[2px] animate-blink bg-[var(--text)]" />
          )}
        </div>
      </div>
    </div>
  );
}

function SocialStrip() {
  return (
    <div className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-[14px] lg:flex">
      <a
        href="https://linkedin.com/in/falak-naaz-fatma"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="transition-opacity duration-200 hover:opacity-60"
        style={{ color: "var(--text)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
      <a
        href="https://github.com/falak-naaz-fatma"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="transition-opacity duration-200 hover:opacity-60"
        style={{ color: "var(--text)" }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
      <div className="h-10 w-px" style={{ background: "var(--text)", opacity: 0.2 }} />
      <span
        className="text-[0.7rem] font-semibold tracking-[0.15em]"
        style={{
          color: "var(--text)",
          transform: "rotate(-90deg)",
          fontFamily: "var(--font-jetbrains-mono), monospace",
        }}
      >
        Connect
      </span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="hero" className="flex min-h-screen w-full flex-col md:flex-row" aria-labelledby="hero-title">
      <div className="flex w-full flex-col justify-center bg-[var(--bg)] pl-16 pr-8 pb-16 pt-28 md:w-1/2 md:pl-32 md:pr-12 md:pb-0 md:pt-0">
        <p
          id="hero-title"
          className="mb-4 font-[var(--font-dm-sans)] text-[2.2rem] font-bold text-[var(--text)] md:text-[2.8rem]"
        >
          Hi, I'm Falak Naaz Fatma
        </p>
        <p className="mb-4 font-[var(--font-dm-sans)] text-[2.2rem] font-bold text-[var(--text)] md:text-[2.8rem]">
          I <TypewriterText />
        </p>
        <p className="mt-6 max-w-[420px] text-[1rem] leading-relaxed text-[var(--text-muted)]">
          Front-end focused Full Stack Developer with 1.5 years building production apps with React, Next.js, and TypeScript.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            download="Falak_Naaz_Fatma_Resume.pdf"
            className="inline-flex min-h-[44px] items-center justify-center rounded-sm px-6 text-[0.9rem] font-bold transition-colors hover:opacity-90"
            style={{ backgroundColor: "#ffffff", color: "#0a0a0a" }}
          >
            Download Resume ↓
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--border)] bg-transparent px-6 text-[0.9rem] font-bold text-[var(--text)] transition-colors hover:opacity-80"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-[var(--bg-surface)] p-6 md:w-1/2 md:p-12">
        <CodeEditor />
      </div>
      <SocialStrip />
    </section>
  );
}

export { HeroSection as Hero };