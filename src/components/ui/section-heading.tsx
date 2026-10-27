import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  titleId?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  titleId,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("section-heading", className)}>
      <div className="section-heading__meta">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__rule" aria-hidden="true" />
        <span className="section-heading__eyebrow">{eyebrow}</span>
      </div>
      <div className="section-heading__content">
        <h2 id={titleId} className="section-title">
          {title}
        </h2>
        {description ? (
          <p className="section-heading__description">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
