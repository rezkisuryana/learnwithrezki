import { Info } from "lucide-react";

import { ContactLink } from "@/components/ui/contact-link";
import { Container } from "@/components/ui/container";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactMessages } from "@/content/contact-messages";
import { projects } from "@/content/projects";

export function FeaturedProjects() {
  return (
    <section
      id="proyek"
      className="section section--rule"
      aria-labelledby="proyek-title"
    >
      <Container>
        <SectionHeading
          index="01"
          eyebrow="Proyek belajar"
          title="Belajar Coding Lewat Proyek Nyata"
          description="Dari menggerakkan karakter sampai membuat website, siswa belajar memahami konsep coding melalui praktik dan eksplorasi."
          titleId="proyek-title"
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>

        <div className="section-foot">
          <p className="section-foot__note">
            <Info size={15} strokeWidth={2} aria-hidden="true" />
            <span>
              Visual di atas adalah ilustrasi materi, bukan tangkapan layar karya
              siswa. Demo proyek akan dipublikasikan setelah tersedia dan
              mendapat izin.
            </span>
          </p>
          <ContactLink
            message={contactMessages.project}
            label="Tanya materi proyek"
            subject="Tanya Materi Proyek Coding"
          />
        </div>
      </Container>
    </section>
  );
}
