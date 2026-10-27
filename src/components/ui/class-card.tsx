import { Code2, Gamepad2, Sparkles } from "lucide-react";

import { ContactLink } from "@/components/ui/contact-link";
import type { ClassPath } from "@/types/content";
import { cn } from "@/lib/utils";

type ClassCardProps = {
  path: ClassPath;
  index: number;
};

const iconBySlug = {
  scratch: Gamepad2,
  "web-development": Code2,
  "coding-lanjutan": Sparkles,
} as const;

export function ClassCard({ path, index }: ClassCardProps) {
  const Icon = iconBySlug[path.slug as keyof typeof iconBySlug] ?? Sparkles;
  const titleId = `class-${path.slug}-title`;

  return (
    <article
      className={cn("class-card", path.featured && "class-card--featured")}
      aria-labelledby={titleId}
    >
      <div className="class-card__top">
        <span className="class-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="class-card__icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.9} />
        </span>
      </div>

      <div className="class-card__level">{path.level}</div>
      <h3 id={titleId}>{path.title}</h3>
      <p className="class-card__description">{path.description}</p>

      <ul className="class-card__topics" aria-label="Fokus materi">
        {path.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>

      <div className="class-card__footer">
        <ContactLink
          message={path.message}
          label={path.ctaLabel}
          tone={path.featured ? "dark" : "light"}
        />
      </div>
    </article>
  );
}
