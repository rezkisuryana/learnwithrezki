import { ArrowUpRight } from "lucide-react";

import { BrandMark } from "@/components/ui/brand-mark";
import { ContactChannelNote } from "@/components/ui/contact-channel-note";
import { ContactLink } from "@/components/ui/contact-link";
import { Container } from "@/components/ui/container";
import { contactMessages } from "@/content/contact-messages";
import { footerNavigation, siteConfig } from "@/content/site";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a href="#top" className="site-footer__brand-link">
              <BrandMark inverse />
              <span>{siteConfig.name}</span>
              <span className="sr-only">— kembali ke atas</span>
            </a>
            <p>
              Kelas coding online untuk anak SD/SMP. Belajar lewat praktik,
              proyek kecil, dan pendampingan langsung.
            </p>
            <span className="site-footer__location">
              Belajar online · Google Meet
            </span>
          </div>

          <div className="site-footer__column">
            <h2>Jelajahi</h2>
            <ul>
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column">
            <h2>Tautan</h2>
            <ul>
              <li>
                <a
                  href={siteConfig.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portofolio developer
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </li>
              {siteConfig.socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="site-footer__column site-footer__contact">
            <h2>Mulai percakapan</h2>
            <p>
              Ceritakan usia, pengalaman, dan minat anak. Kita cari titik mulai
              yang paling sesuai.
            </p>
            <ContactLink
              message={contactMessages.general}
              label="Tanya tentang kelas"
              fallbackLabel="Tanya via email"
              tone="dark"
            />
            <ContactChannelNote tone="dark" />
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {currentYear} {siteConfig.name}. Semua hak dilindungi.</p>
          <p>
            Diampu oleh {siteConfig.instructorFullName}. Situs ini tidak
            mengumpulkan data anak melalui formulir.
          </p>
        </div>
      </Container>
    </footer>
  );
}
