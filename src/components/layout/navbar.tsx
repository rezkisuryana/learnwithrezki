import { ContactAction } from "@/components/ui/contact-action";
import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navigation } from "@/content/site";
import { contactMessages } from "@/content/contact-messages";

export function Navbar() {
  return (
    <header className="site-header">
      <Container className="site-header__inner">
        <a href="#top" className="brand">
          <BrandMark />
          <span className="brand__text">
            <span className="brand__name">Belajar Coding</span>
            <span className="brand__sub">Bareng Rezki</span>
          </span>
          <span className="sr-only">— kembali ke atas</span>
        </a>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ContactAction
            message={contactMessages.schedule}
            label="Tanya Jadwal"
            variant="primary"
            size="sm"
            className="header-cta"
          />
          <MobileNav items={navigation} message={contactMessages.schedule} />
        </div>
      </Container>
    </header>
  );
}
