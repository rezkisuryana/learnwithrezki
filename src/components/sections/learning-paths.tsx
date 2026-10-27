import { Info } from "lucide-react";

import { ClassCard } from "@/components/ui/class-card";
import { ContactLink } from "@/components/ui/contact-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { classPaths } from "@/content/classes";
import { contactMessages } from "@/content/contact-messages";

export function LearningPaths() {
  return (
    <section
      id="jalur-belajar"
      className="section section--rule"
      aria-labelledby="jalur-title"
    >
      <Container>
        <SectionHeading
          index="03"
          eyebrow="Jalur belajar"
          title="Pilih Jalur Belajar yang Sesuai"
          description="Setiap anak punya minat dan titik awal yang berbeda. Mulailah dari materi yang sesuai dengan pengalaman dan tujuan belajarnya."
          titleId="jalur-title"
        />

        <div className="class-grid">
          {classPaths.map((path, index) => (
            <ClassCard key={path.slug} path={path} index={index} />
          ))}
        </div>

        <div className="section-foot">
          <p className="section-foot__note">
            <Info size={15} strokeWidth={2} aria-hidden="true" />
            <span>
              Durasi, kurikulum, dan biaya kelas lanjutan belum ditetapkan.
              Semua akan didiskusikan sesuai kebutuhan anak.
            </span>
          </p>
          <ContactLink
            message={contactMessages.trial}
            label="Lihat kelas perkenalan"
            subject="Tanya Kelas Perkenalan Coding"
            className="section-foot__action"
          />
        </div>
      </Container>
    </section>
  );
}
