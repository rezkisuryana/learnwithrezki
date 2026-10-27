import {
  ArrowDown,
  Check,
  Clock3,
  GraduationCap,
  Video,
} from "lucide-react";

import { ContactAction } from "@/components/ui/contact-action";
import { contactMessages } from "@/content/contact-messages";
import { siteConfig } from "@/content/site";
import { formatRupiah } from "@/lib/format";

const inclusions = [
  "Pengenalan konsep coding.",
  "Praktik langsung menggunakan Scratch.",
  "Pendampingan selama sesi.",
  "Rekomendasi langkah belajar berikutnya.",
];

export function PricingCard() {
  return (
    <div className="pricing-card">
      <div className="pricing-card__summary">
        <div className="pricing-card__summary-top">
          <span className="pricing-card__label">Kelas Perkenalan Coding</span>
          <span className="pricing-card__sessions">1 sesi</span>
        </div>

        <p className="pricing-card__price">
          {formatRupiah(siteConfig.defaultClassPrice)}
          <span>/ sesi</span>
        </p>

        <ul className="pricing-card__facts">
          <li>
            <Clock3 size={17} strokeWidth={2} aria-hidden="true" />
            {siteConfig.trialDurationMinutes} menit
          </li>
          <li>
            <Video size={17} strokeWidth={2} aria-hidden="true" />
            Online via Google Meet
          </li>
          <li>
            <GraduationCap size={17} strokeWidth={2} aria-hidden="true" />
            Anak SD/SMP pemula
          </li>
        </ul>

        <div className="pricing-card__cta">
          <ContactAction
            message={contactMessages.trial}
            label="Tanya Jadwal dan Daftar"
            size="lg"
            variant="primary"
            className="w-full"
          />
          <p className="pricing-card__cta-note">
            Ketersediaan jadwal dikonfirmasi sebelum sesi.
          </p>
        </div>
      </div>

      <div className="pricing-card__details">
        <p className="pricing-card__details-label">Yang didapat dalam sesi</p>
        <h3>Coba belajar coding lewat satu sesi yang terarah.</h3>
        <p className="pricing-card__details-copy">
          Sesi ini adalah titik awal. Setelah mengenal minat dan kemampuan
          anak, kita bisa menentukan jalur belajar berikutnya tanpa harus
          langsung memilih paket.
        </p>

        <ul className="pricing-card__inclusions">
          {inclusions.map((item) => (
            <li key={item}>
              <span aria-hidden="true">
                <Check size={14} strokeWidth={2.6} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="pricing-card__note">
          <p>
            Cocok untuk anak SD/SMP yang belum pernah coding atau ingin mencoba
            belajar dari dasar.
          </p>
          <a href="#jalur-belajar" className="text-link">
            Lihat jalur belajar
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
