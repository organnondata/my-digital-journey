import { Check } from "lucide-react";

interface FeatureListProps {
  items: string[];
  columns?: 1 | 2;
}

export function FeatureList({ items, columns = 2 }: FeatureListProps) {
  return (
    <ul
      className={`grid gap-x-8 gap-y-3 ${
        columns === 2 ? "sm:grid-cols-2" : ""
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-foreground/90">
          <Check className="size-4 mt-1 shrink-0 text-accent-vivid" strokeWidth={2.5} />
          <span className="text-sm md:text-base leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  );
}
