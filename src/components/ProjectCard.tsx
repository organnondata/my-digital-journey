import { type ReactNode } from "react";

interface ProjectCardProps {
  number?: string;
  label?: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function ProjectCard({ number, label, title, children, className = "" }: ProjectCardProps) {
  return (
    <article
      className={`relative rounded-2xl border border-border bg-surface-elevated/60 backdrop-blur-sm p-8 md:p-12 overflow-hidden ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-vivid/60 to-transparent" />
      <div className="flex items-center justify-between mb-6">
        {label && (
          <span className="text-xs uppercase tracking-[0.25em] text-accent-vivid">
            {label}
          </span>
        )}
        {number && (
          <span className="font-display text-sm text-muted-foreground tabular-nums">
            {number}
          </span>
        )}
      </div>
      <h3 className="text-2xl md:text-4xl font-semibold leading-tight mb-6">
        {title}
      </h3>
      <div className="space-y-6 text-foreground/85">{children}</div>
    </article>
  );
}
