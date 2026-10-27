import { Camera, Info } from "lucide-react";

import { ContactLink } from "@/components/ui/contact-link";
import { Container } from "@/components/ui/container";
import { DocumentationCard } from "@/components/ui/documentation-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { contactMessages } from "@/content/contact-messages";
import { documentation } from "@/content/documentation";

export function TeachingDocumentation() {
  return (
    <section
      id="dokumentasi"
      className="section section--rule documentation"
      aria-labelledby="dokumentasi-title"
    >
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Dokumentasi"
          title="Catatan Proses Belajar"
          description="Dokumentasi materi, praktik, dan proyek yang menunjukkan bagaimana coding dipelajari secara bertahap."
          titleId="dokumentasi-title"
        />

        <div className="documentation-note">
          <span className="documentation-note__icon" aria-hidden="true">
            <Camera size={18} strokeWidth={1.9} />
          </span>
          <div>
            <p>Dokumentasi sesi kelas belum dipublikasikan.</p>
            <span>
              Catatan di bawah adalah ringkasan materi, bukan catatan sesi atau
              capaian siswa. Foto dan dokumentasi kelas hanya akan ditambahkan
              dengan izin yang sesuai.
            </span>
          </div>
        </div>

        <div className="doc-grid">
          {documentation.map((entry, index) => (
            <DocumentationCard key={entry.slug} entry={entry} index={index} />
          ))}
        </div>

        <div className="section-foot">
          <p className="section-foot__note">
            <Info size={15} strokeWidth={2} aria-hidden="true" />
            <span>
              Ingin tahu arah materi untuk anak? Diskusikan dulu pengalaman dan
              minatnya sebelum menentukan jadwal.
            </span>
          </p>
          <ContactLink
            message={contactMessages.documentation}
            label="Tanya tentang materi"
            subject="Tanya Materi Pembelajaran Coding"
          />
        </div>
      </Container>
    </section>
  );
}
