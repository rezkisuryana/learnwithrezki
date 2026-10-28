import Image from "next/image";

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
        <Image
          src="/images/scratch-project.png"
          alt="Game Scratch Rocket vs Alien"
          fill
          sizes="(min-width: 1024px) 640px, (min-width: 768px) 50vw, 100vw"
          className="project-art__image"
        />
      </div>
    );
  }

  if (variant === "sprite") {
    return (
      <div className={cn("project-art project-art--sprite", className)}>
        <Image
          src="/images/scratch-sprite.png"
          alt="Game Scratch Mengendalikan Sprite"
          fill
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
          className="project-art__image"
        />
      </div>
    );
  }

  if (variant === "portfolio") {
    return (
      <div className={cn("project-art project-art--portfolio", className)}>
        <Image
          src="/images/portfolio.jpeg"
          alt="Portofolio"
          fill
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
          className="project-art__image"
        />
      </div>
    );
  }

  if (variant === "website") {
    return (
      <div className={cn("project-art project-art--website", className)}>
        <Image
          src="/images/website-dasar.png"
          alt="Website Dasar"
          fill
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
          className="project-art__image"
        />
      </div>
    );
  }
}
