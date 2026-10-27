"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { ContactAction } from "@/components/ui/contact-action";
import type { NavItem } from "@/types/content";

type MobileNavProps = {
  items: NavItem[];
  message: string;
};

export function MobileNav({ items, message }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        ref={buttonRef}
        type="button"
        className="mobile-nav__trigger"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? (
          <X size={20} strokeWidth={2} aria-hidden="true" />
        ) : (
          <Menu size={20} strokeWidth={2} aria-hidden="true" />
        )}
        <span>Menu</span>
      </button>

      {open ? (
        <div id={menuId} className="mobile-nav__panel">
          <nav aria-label="Navigasi seluler">
            <ul className="mobile-nav__list">
              {items.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="mobile-nav__link"
                    onClick={() => setOpen(false)}
                  >
                    <span className="mobile-nav__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-nav__footer">
            <p>Kelas coding online untuk anak SD/SMP.</p>
            <ContactAction
              message={message}
              label="Tanya Jadwal"
              variant="primary"
              size="md"
              className="w-full"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
