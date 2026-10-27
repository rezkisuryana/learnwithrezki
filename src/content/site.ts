import type { NavItem, TrustIndicator } from "@/types/content";

function normalizeSiteUrl(value: string | undefined) {
  const trimmed = value?.trim();

  return trimmed ? trimmed.replace(/\/+$/, "") : undefined;
}

const configuredSiteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL,
);
const vercelSiteUrl = normalizeSiteUrl(
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL,
);
const inferredSiteUrl = vercelSiteUrl
  ? `https://${vercelSiteUrl.replace(/^https?:\/\//, "")}`
  : undefined;
const resolvedSiteUrl =
  configuredSiteUrl || inferredSiteUrl || "http://localhost:3000";
const configuredWhatsAppNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? "";

export const siteConfig = {
  name: "Belajar Coding Bareng Rezki",
  shortName: "Belajar Coding",
  instructorName: "Rezki",
  instructorFullName: "Rezki Suryana",
  instructorRole: "Guru IT coding & web developer",
  portfolioUrl: "https://rezkisuryana.vercel.app",
  /**
   * International format, digits only. Example: 6281234567890.
   * The contact CTAs fall back to the confirmed email below while this is empty.
   */
  whatsappNumber: configuredWhatsAppNumber,
  /**
   * Public email already listed on the instructor's developer portfolio.
   * It is used only while a WhatsApp number is not configured.
   */
  fallbackEmail: "rezkisuryana14@gmail.com",
  siteUrl: resolvedSiteUrl,
  isSiteUrlConfigured: Boolean(configuredSiteUrl || inferredSiteUrl),
  defaultClassPrice: 49000,
  trialDurationMinutes: 60,
  defaultEmailSubject: "Konsultasi Kelas Coding untuk Anak",
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/rezkisuryana/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rezky-suryana/",
    },
  ],
} as const;

export const navigation: NavItem[] = [
  { label: "Tentang", href: "#tentang" },
  { label: "Proyek", href: "#proyek" },
  { label: "Kelas", href: "#kelas" },
  { label: "Dokumentasi", href: "#dokumentasi" },
  { label: "FAQ", href: "#faq" },
];

export const footerNavigation: NavItem[] = [
  ...navigation,
  { label: "Daftar", href: "#daftar" },
];

export const trustIndicators: TrustIndicator[] = [
  {
    label: "8+ tahun",
    detail: "pengalaman web development",
    icon: "code",
  },
  {
    label: "Guru IT coding",
    detail: "mengajar di sekolah & ekstrakurikuler",
    icon: "teacher",
  },
  {
    label: "Berbasis praktik",
    detail: "belajar lewat proyek, bukan hafalan",
    icon: "practice",
  },
  {
    label: "Scratch → Web",
    detail: "materi bertahap sesuai kemampuan",
    icon: "path",
  },
];

export const supportingDetails = [
  "Mulai dari pemula",
  "Belajar online",
  "Materi bertahap",
] as const;
