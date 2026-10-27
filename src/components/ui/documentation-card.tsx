import Image from "next/image";

import type { DocumentationEntry } from "@/types/content";

type DocumentationCardProps = {
  entry: DocumentationEntry;
  index: number;
};

export function DocumentationCard({
  entry,
  index,
}: DocumentationCardProps) {
  return (
    <article className="doc-card">
      <div className="doc-card__top">
        <span className="doc-card__index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="doc-card__category">{entry.category}</span>
      </div>

      <p className="doc-card__topic">{entry.topic}</p>
      <h3>{entry.title}</h3>

      {entry.image ? (
        <div className="doc-card__image">
          <Image
            src={entry.image.src}
            alt={entry.image.alt}
            width={entry.image.width}
            height={entry.image.height}
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
      ) : null}

      <dl className="doc-card__facts">
        <div>
          <dt>Tujuan</dt>
          <dd>{entry.objective}</dd>
        </div>
        <div>
          <dt>Aktivitas</dt>
          <dd>{entry.summary}</dd>
        </div>
        {entry.reflection ? (
          <div>
            <dt>Langkah berikutnya</dt>
            <dd>{entry.reflection}</dd>
          </div>
        ) : null}
      </dl>

      <div className="doc-card__footer">
        <span className="tag tag--material">
          <span className="tag__dot" aria-hidden="true" />
          {entry.statusLabel}
        </span>
        {entry.date ? <time>{entry.date}</time> : null}
      </div>
    </article>
  );
}
