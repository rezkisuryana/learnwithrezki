import Image from "next/image";

import { AlienArt, RocketArt } from "@/components/visuals/space-art";

const stars = [
  { left: "12%", top: "24%", size: 3, delay: "0s" },
  { left: "24%", top: "70%", size: 2, delay: "0.4s" },
  { left: "38%", top: "38%", size: 2, delay: "0.9s" },
  { left: "52%", top: "18%", size: 3, delay: "0.2s" },
  { left: "64%", top: "62%", size: 2, delay: "1.2s" },
  { left: "78%", top: "30%", size: 2, delay: "0.6s" },
  { left: "88%", top: "70%", size: 3, delay: "1.4s" },
  { left: "18%", top: "48%", size: 1.5, delay: "0.7s" },
  { left: "70%", top: "80%", size: 1.5, delay: "1.1s" },
  { left: "44%", top: "84%", size: 2, delay: "0.3s" },
];

export function HeroPreview() {
  return (
    <figure className="hero-visual">
      <div className="hero-visual__backdrop" aria-hidden="true" />
      <div className="hero-visual__dots" aria-hidden="true" />

      <div className="hero-visual__window">
        <div className="hero-visual__chrome">
          <span className="window-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="hero-visual__url">preview · rocket-vs-alien</span>
          <span className="hero-visual__chip">Scratch</span>
        </div>

        <div className="hero-visual__body">
          <div
            className="game-stage"
            role="img"
            aria-label="Ilustrasi panggung game Scratch berisi roket dan alien di angkasa."
          >
            <div className="game-stage__hud" aria-hidden="true">
              <span>
                <i className="live-dot" />
                Stage
              </span>
              <span>Skor 000</span>
            </div>

            <div className="game-stage__stars" aria-hidden="true">
              {stars.map((star, index) => (
                <i
                  key={index}
                  style={{
                    left: star.left,
                    top: star.top,
                    width: star.size,
                    height: star.size,
                    animationDelay: star.delay,
                  }}
                />
              ))}
            </div>

            <div className="game-stage__orbit" aria-hidden="true" />
            <RocketArt className="game-stage__rocket" />
            <AlienArt className="game-stage__alien game-stage__alien--one" />
            <AlienArt className="game-stage__alien game-stage__alien--two" />
            <span className="game-stage__laser" aria-hidden="true" />

            <div className="game-stage__meta" aria-hidden="true">
              <p>Rocket vs Alien</p>
              <span>Level 01 · Gerak &amp; interaksi</span>
            </div>
          </div>

          <div className="code-rail" aria-hidden="true">
            <p className="code-rail__label">Logika program</p>
            <div className="code-block code-block--event">
              <span className="code-block__dot" />
              ketika bendera diklik
            </div>
            <div className="code-block code-block--control">selamanya</div>
            <div className="code-block code-block--motion code-block--indent">
              jika spasi ditekan
            </div>
            <div className="code-block code-block--action">gerakkan roket</div>
            <div className="code-rail__hint">
              <span />
              Blok visual · Scratch
            </div>
          </div>
        </div>

        <figcaption className="hero-visual__caption">
          <span className="hero-visual__caption-dot" aria-hidden="true" />
          Ilustrasi materi kelas · bukan tangkapan layar karya siswa
        </figcaption>
      </div>

      <div className="hero-visual__guide">
        <Image
          src="/images/instructor/rezki-suryana.jpg"
          alt=""
          width={92}
          height={92}
          sizes="92px"
          preload
          className="hero-visual__avatar"
        />
        <div>
          <p>Didampingi langsung oleh Rezki</p>
          <span>Guru IT coding · Web developer</span>
        </div>
      </div>

      <div className="hero-visual__badge" aria-hidden="true">
        60 menit <span>·</span> online
      </div>
    </figure>
  );
}
