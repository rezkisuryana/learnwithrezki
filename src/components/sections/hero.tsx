import { ArrowDown, Check } from "lucide-react";

import { ContactAction } from "@/components/ui/contact-action";
import { ContactChannelNote } from "@/components/ui/contact-channel-note";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { HeroPreview } from "@/components/visuals/hero-preview";
import { contactMessages } from "@/content/contact-messages";
import { supportingDetails } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Container className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Kelas coding online untuk anak SD/SMP
          </p>

          <h1 id="hero-title" className="display-title hero__title">
            Bukan cuma main game. Yuk, belajar{" "}
            <span className="marker">bikin game</span> dan website sendiri!
          </h1>

          <p className="hero__lede">
            Belajar coding dari dasar melalui proyek yang menarik, didampingi
            langsung oleh Rezki, guru IT coding sekaligus web developer.
          </p>

          <div className="hero__actions">
            <a
              href="#jalur-belajar"
              className={buttonStyles({ variant: "primary", size: "lg" })}
            >
              Lihat Pilihan Kelas
              <ArrowDown size={17} strokeWidth={2.1} aria-hidden="true" />
            </a>
            <ContactAction
              message={contactMessages.general}
              label="Konsultasi via WhatsApp"
              fallbackLabel="Konsultasi via Email"
              variant="secondary"
              size="lg"
            />
          </div>

          <ContactChannelNote className="hero__channel-note" />

          <ul className="hero__support">
            {supportingDetails.map((detail) => (
              <li key={detail}>
                <span className="hero__support-icon" aria-hidden="true">
                  <Check size={11} strokeWidth={2.8} />
                </span>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual-wrap">
          <HeroPreview />
        </div>
      </Container>
    </section>
  );
}
