import { Info } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PricingCard } from "@/components/ui/pricing-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function TrialPricing() {
  return (
    <section
      id="kelas"
      className="section section--rule pricing"
      aria-labelledby="kelas-title"
    >
      <Container>
        <SectionHeading
          index="06"
          eyebrow="Kelas perkenalan"
          title="Mulai dari Satu Sesi Perkenalan"
          description="Coba belajar coding bersama sebelum menentukan langkah belajar berikutnya."
          titleId="kelas-title"
        />

        <PricingCard />

        <p className="pricing-fineprint">
          <Info size={15} strokeWidth={2} aria-hidden="true" />
          <span>
            Harga perkenalan berlaku untuk satu sesi. Materi, durasi, dan biaya
            kelas lanjutan dibicarakan terlebih dahulu sesuai kebutuhan anak.
          </span>
        </p>
      </Container>
    </section>
  );
}
