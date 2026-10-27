import { siteConfig } from "@/content/site";

const WHITESPACE_OR_PUNCTUATION = /[^\d]/g;
const VALID_WHATSAPP_NUMBER = /^62\d{8,13}$/;
const VALID_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactChannel = "whatsapp" | "email";

export type ContactTarget = {
  href: string;
  channel: ContactChannel;
  /** WhatsApp opens in a new tab. Email links are handed to the mail client. */
  external: boolean;
};

/**
 * Accepts numbers such as "+62 812-3456-7890" or "0812 3456 7890" and
 * returns international digits only (e.g. "6281234567890").
 *
 * Returns null for missing, malformed, or non-Indonesian numbers so the UI
 * never renders a wa.me/0 or wa.me/undefined link.
 */
export function normalizeWhatsAppNumber(rawNumber: string): string | null {
  const digits = rawNumber.replace(WHITESPACE_OR_PUNCTUATION, "");

  if (!digits) {
    return null;
  }

  const normalized = digits.startsWith("0") ? `62${digits.slice(1)}` : digits;

  return VALID_WHATSAPP_NUMBER.test(normalized) ? normalized : null;
}

export function isWhatsAppConfigured(): boolean {
  return normalizeWhatsAppNumber(siteConfig.whatsappNumber) !== null;
}

/**
 * Builds a safe WhatsApp deep link. Returns null when no valid contact number
 * is configured; callers must present an honest fallback instead of a link.
 */
export function buildWhatsAppUrl(message: string): string | null {
  const number = normalizeWhatsAppNumber(siteConfig.whatsappNumber);
  const trimmedMessage = message.trim();

  if (!number || !trimmedMessage) {
    return null;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(trimmedMessage)}`;
}

/**
 * Used only as a clearly labelled fallback until the owner configures a
 * WhatsApp number. This email address is already published on the owner's
 * developer portfolio.
 */
export function buildMailtoUrl(
  message: string,
  subject: string = siteConfig.defaultEmailSubject,
): string | null {
  const email = siteConfig.fallbackEmail.trim();
  const trimmedMessage = message.trim();

  if (!VALID_EMAIL.test(email) || !trimmedMessage) {
    return null;
  }

  return `mailto:${email}?subject=${encodeURIComponent(
    subject.trim(),
  )}&body=${encodeURIComponent(trimmedMessage)}`;
}

export function getContactTarget(
  message: string,
  subject: string = siteConfig.defaultEmailSubject,
): ContactTarget | null {
  const whatsappUrl = buildWhatsAppUrl(message);

  if (whatsappUrl) {
    return {
      href: whatsappUrl,
      channel: "whatsapp",
      external: true,
    };
  }

  const mailtoUrl = buildMailtoUrl(message, subject);

  if (mailtoUrl) {
    return {
      href: mailtoUrl,
      channel: "email",
      external: false,
    };
  }

  return null;
}
