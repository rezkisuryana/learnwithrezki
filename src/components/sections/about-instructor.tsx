import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { siteConfig } from "@/content/site";

export function AboutInstructor() {
  return (
    <section
      id="tentang"
      className="section section--rule about"
      aria-labelledby="tentang-title"
    >
      <Container>
        <div className="about-grid">
          <div className="about-visual">
            <div className="about-visual__backdrop" aria-hidden="true" />
            <div className="about-visual__dots" aria-hidden="true" />
            <figure className="portrait-card">
              <div className="portrait-card__image">
                <Image
                  src="/images/instructor/rezki-suryana.jpg"
                  alt="Foto Rezki Suryana, guru IT coding dan web developer."
                  fill
                  sizes="(min-width: 1024px) 430px, (min-width: 640px) 60vw, 90vw"
                  quality={88}
                  className="portrait-card__photo"
                />
              </div>
              <figcaption>
                <span>Rezki Suryana</span>
                <span>Guru IT coding &amp; web developer</span>
              </figcaption>
            </figure>
            <div className="about-visual__badge" aria-hidden="true">
              <strong>8+</strong>
              <span>
                tahun
                <br />
                web development
              </span>
            </div>
          </div>

          <div className="about-content">
            <div className="section-heading__meta about-content__meta">
              <span className="section-heading__index">02</span>
              <span className="section-heading__rule" aria-hidden="true" />
              <span className="section-heading__eyebrow">Tentang pengajar</span>
            </div>

            <h2 id="tentang-title" className="section-title">
              Belajar teknologi bersama praktisi yang juga mengajar.
            </h2>

            <div className="about-copy">
              <p className="about-copy__greeting">Halo, saya Rezki.</p>
              <p>
                Saya adalah guru IT coding sekaligus web developer dengan
                pengalaman lebih dari <strong>8 tahun</strong> di bidang
                pengembangan web.
              </p>
              <p>
                Dalam mengajar, saya berusaha membantu siswa memahami coding
                melalui praktik, eksperimen, dan proyek yang sesuai dengan
                kemampuan mereka.
              </p>
              <p>
                Saya ingin siswa tidak hanya menggunakan teknologi, tetapi
                mulai memahami cara kerjanya dan belajar membangun sesuatu
                dengan ide mereka sendiri.
              </p>
            </div>

            <div className="about-actions">
              <a
                href={siteConfig.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ variant: "secondary", size: "md" })}
              >
                Lihat Portofolio Developer
                <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
              </a>
              <p>Portofolio profesional di bidang web development.</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
