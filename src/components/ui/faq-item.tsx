"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import type { FaqItem as FaqItemType } from "@/types/content";

type FaqItemProps = {
  item: FaqItemType;
  index: number;
  defaultOpen?: boolean;
};

export function FaqItem({ item, index, defaultOpen = false }: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const buttonId = `faq-trigger-${item.id}`;
  const panelId = `faq-panel-${item.id}`;

  return (
    <div className="faq-item" data-open={open}>
      <h3>
        <button
          type="button"
          id={buttonId}
          className="faq-item__trigger"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="faq-item__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="faq-item__question">{item.question}</span>
          <span className="faq-item__icon" aria-hidden="true">
            <Plus size={17} strokeWidth={2} />
          </span>
        </button>
      </h3>

      {open ? (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="faq-item__panel"
        >
          <p>{item.answer}</p>
        </div>
      ) : null}
    </div>
  );
}
