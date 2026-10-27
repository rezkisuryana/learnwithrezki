import { ArrowDown, Check } from "lucide-react";

import { ContactAction } from "@/components/ui/contact-action";
import { ContactChannelNote } from "@/components/ui/contact-channel-note";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { contactMessages } from "@/content/contact-messages";

const conversationStarters = [
  "Usia atau kelas anak",
  "Pengalaman coding",
  "Minat atau proyek impian",
];

export function FinalCta() {
  return (
    <section
      id="daftar"
      className="final-cta-section"
      aria-labelledby="daftar-title"
    >
      <Container>
        <div className="final-cta">
          <div className="final-cta__pattern" aria-hidden="true" />

          <div className="final-cta__content">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" aria-hidden="true" />
              Mulai dari satu proyek kecil
            </p>
            <h2 id="daftar-title">
              Punya anak yang tertarik belajar coding?
            </h2>
            <p className="final-cta__description">
              Ceritakan usia, pengalaman coding, dan minat anak. Kita
              diskusikan kelas yang sesuai sebelum menentukan jadwal.
            </p>

            <div className="final-cta__actions">
              <ContactAction
                message={contactMessages.final}
                label="Konsultasi via WhatsApp"
                fallbackLabel="Konsultasi via Email"
                variant="primary"
                size="lg"
              />
              <a
                href="#dokumentasi"
                className={buttonStyles({
                  variant: "outline-light",
                  size: "lg",
                })}
              >
                Lihat Dokumentasi
                <ArrowDown size={17} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>

            <ContactChannelNote tone="dark" />
            <p className="final-cta__note">
              Konsultasi tidak mengharuskan langsung mendaftar.
            </p>
          </div>

          <aside className="final-cta__aside" aria-label="Persiapan konsultasi">
            <div className="final-cta__aside-head">
              <span className="final-cta__aside-number" aria-hidden="true">
                01
              </span>
              <p>Agar obrolan lebih mudah</p>
            </div>
            <ul>
              {conversationStarters.map((starter) => (
                <li key={starter}>
                  <span aria-hidden="true">
                    <Check size={14} strokeWidth={2.6} />
                  </span>
                  {starter}
                </li>
              ))}
            </ul>
            <p className="final-cta__aside-note">
              Cukup ceritakan singkat. Tidak perlu menyiapkan data pribadi
              anak.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
