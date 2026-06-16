type SkillPillProps = {
  children: string;
};

export function SkillPill({ children }: SkillPillProps) {
  return (
    <span className="inline-flex min-h-7 items-center rounded-sm bg-bg-surface px-3 py-1 font-mono text-[0.8rem] font-medium text-text">
      {children}
    </span>
  );
}