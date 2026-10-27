import { Blocks, Code2, GraduationCap, Route } from "lucide-react";

import { Container } from "@/components/ui/container";
import { trustIndicators } from "@/content/site";
import type { TrustIcon } from "@/types/content";

const iconMap = {
  code: Code2,
  teacher: GraduationCap,
  practice: Blocks,
  path: Route,
} as const satisfies Record<TrustIcon, typeof Code2>;

export function TrustIndicators() {
  return (
    <section className="trust-band" aria-label="Latar belakang pengajar">
      <Container>
        <div className="trust-grid">
          {trustIndicators.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <div className="trust-item" key={item.label}>
                <span className="trust-item__icon" aria-hidden="true">
                  <Icon size={19} strokeWidth={1.9} />
                </span>
                <div>
                  <p className="trust-item__label">{item.label}</p>
                  <p className="trust-item__detail">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
