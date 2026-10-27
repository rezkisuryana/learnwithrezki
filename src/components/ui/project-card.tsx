import { ArrowUpRight, Check } from "lucide-react";

import { ProjectVisual } from "@/components/visuals/project-visual";
import type { Project } from "@/types/content";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index: number;
  compact?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  index,
  compact = false,
  className,
}: ProjectCardProps) {
  const titleId = `project-${project.slug}-title`;

  return (
    <article
      className={cn(
        "project-card",
        compact && "project-card--compact",
        project.featured && "project-card--featured",
        className,
      )}
      aria-labelledby={titleId}
    >
      <div className="project-card__visual">
        <ProjectVisual variant={project.visual} />
        <span className={cn("tag", `tag--${project.status}`)}>
          <span className="tag__dot" aria-hidden="true" />
          {project.statusLabel}
        </span>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
        </div>

        <h3 id={titleId}>{project.title}</h3>
        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__points">
          {project.learningPoints.map((point) => (
            <li key={point}>
              <span className="project-card__check" aria-hidden="true">
                <Check size={12} strokeWidth={2.4} />
              </span>
              {point}
            </li>
          ))}
        </ul>

        {project.demoUrl || project.documentationUrl ? (
          <div className="project-card__links">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Lihat demo
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : null}
            {project.documentationUrl ? (
              <a
                href={project.documentationUrl}
                className="text-link"
              >
                Lihat dokumentasi
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
