import Image from "next/image";

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
            aria-label="Tangkapan layar game Scratch: Rocket vs Alien di angkasa"
          >
            <Image
              src="/images/scratch-project.png"
              alt="Ilustrasi proyek game Scratch Rocket vs Alien"
              fill
              priority
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              className="game-stage__image"
            />
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
