import { MessageCircleQuestion } from "lucide-react";

import { ContactLink } from "@/components/ui/contact-link";
import { Container } from "@/components/ui/container";
import { FaqItem } from "@/components/ui/faq-item";
import { contactMessages } from "@/content/contact-messages";
import { faqs } from "@/content/faq";

export function Faq() {
  return (
    <section
      id="faq"
      className="section section--rule faq-section"
      aria-labelledby="faq-title"
    >
      <Container>
        <div className="faq-layout">
          <div className="faq-intro">
            <div className="section-heading__meta faq-intro__meta">
              <span className="section-heading__index">07</span>
              <span className="section-heading__rule" aria-hidden="true" />
              <span className="section-heading__eyebrow">FAQ</span>
            </div>

            <h2 id="faq-title" className="section-title">
              Pertanyaan yang sering ditanyakan orang tua.
            </h2>
            <p className="faq-intro__description">
              Jawaban singkat untuk hal-hal yang biasanya ditanyakan sebelum
              memulai kelas.
            </p>

            <div className="faq-contact">
              <span className="faq-contact__icon" aria-hidden="true">
                <MessageCircleQuestion size={20} strokeWidth={1.9} />
              </span>
              <p>Belum menemukan jawaban yang dicari?</p>
              <ContactLink
                message={contactMessages.general}
                label="Tanya langsung ke Rezki"
                fallbackLabel="Tanya via email"
              />
            </div>
          </div>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.id}
                item={item}
                index={index}
                defaultOpen={index === 0}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
