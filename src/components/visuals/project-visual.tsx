import { MousePointer2 } from "lucide-react";

import { AlienArt, RocketArt } from "@/components/visuals/space-art";
import type { ProjectVisual as ProjectVisualType } from "@/types/content";
import { cn } from "@/lib/utils";

type ProjectVisualProps = {
  variant: ProjectVisualType;
  className?: string;
};

export function ProjectVisual({ variant, className }: ProjectVisualProps) {
  if (variant === "rocket") {
    return (
      <div className={cn("project-art project-art--rocket", className)}>
        <span className="project-art__label">Preview materi</span>
        <div className="project-art__stars" aria-hidden="true">
          <i style={{ left: "14%", top: "24%" }} />
          <i style={{ left: "28%", top: "66%" }} />
          <i style={{ left: "44%", top: "34%" }} />
          <i style={{ left: "60%", top: "18%" }} />
          <i style={{ left: "78%", top: "58%" }} />
          <i style={{ left: "88%", top: "30%" }} />
        </div>
        <span className="project-art__score" aria-hidden="true">
          SKOR 000
        </span>
        <RocketArt className="project-art__rocket" />
        <AlienArt className="project-art__alien project-art__alien--one" />
        <AlienArt className="project-art__alien project-art__alien--two" />
        <span className="project-art__beam" aria-hidden="true" />
        <div className="project-art__caption" aria-hidden="true">
          <span>Rocket vs Alien</span>
          <span>Level 01</span>
        </div>
      </div>
    );
  }

  if (variant === "sprite") {
    return (
      <div className={cn("project-art project-art--sprite", className)}>
        <span className="project-art__label">Materi Scratch</span>
        <div className="sprite-art__grid" aria-hidden="true" />
        <div className="sprite-art__sprite" aria-hidden="true">
          <span />
          <span />
          <i />
        </div>
        <div className="sprite-art__keys" aria-hidden="true">
          <span className="key key--up">↑</span>
          <span className="key">←</span>
          <span className="key">↓</span>
          <span className="key">→</span>
        </div>
        <MousePointer2
          className="sprite-art__cursor"
          size={22}
          strokeWidth={2}
          aria-hidden="true"
        />
        <span className="sprite-art__flow">event → aksi</span>
      </div>
    );
  }

  return (
    <div className={cn("project-art project-art--website", className)}>
      <span className="project-art__label">Materi web</span>
      <div className="mini-browser">
        <div className="mini-browser__bar" aria-hidden="true">
          <span className="window-dots window-dots--dark">
            <i />
            <i />
            <i />
          </span>
          <span>halaman-pertama.html</span>
        </div>
        <div className="mini-browser__body">
          <div className="mini-code" aria-hidden="true">
            <span>
              <em>&lt;h1&gt;</em>Halo!<em>&lt;/h1&gt;</em>
            </span>
            <span>
              <em>&lt;p&gt;</em>Saya sedang belajar web.<em>&lt;/p&gt;</em>
            </span>
            <span>
              <em>&lt;button&gt;</em>Klik aku<em>&lt;/button&gt;</em>
            </span>
          </div>
          <div className="mini-page" aria-hidden="true">
            <span className="mini-page__eyebrow" />
            <span className="mini-page__title" />
            <span className="mini-page__line" />
            <span className="mini-page__line mini-page__line--short" />
            <span className="mini-page__button">Klik aku</span>
          </div>
        </div>
      </div>
      <span className="website-art__tags" aria-hidden="true">
        <span>HTML</span>
        <span>CSS</span>
        <span>JS</span>
      </span>
    </div>
  );
}
