import { cx } from "@/lib/utils";

type SectionLabelProps = {
  children: string;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cx(
        "font-mono text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}