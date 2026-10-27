import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

const title = "Belajar Coding Online Anak SD/SMP | Rezki";
const description =
  "Les coding online untuk anak SD/SMP. Belajar Scratch, membuat game sederhana, dan mengenal web development bersama Rezki.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title,
  description,
  applicationName: siteConfig.name,
  authors: [
    {
      name: siteConfig.instructorFullName,
      url: siteConfig.portfolioUrl,
    },
  ],
  creator: siteConfig.instructorFullName,
  category: "education",
  keywords: [
    "les coding anak",
    "kelas coding online",
    "belajar Scratch",
    "coding untuk anak SD",
    "coding untuk anak SMP",
    "kursus web development pemula",
    "guru coding anak",
  ],
  alternates: siteConfig.isSiteUrlConfigured
    ? {
        canonical: "/",
      }
    : undefined,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: siteConfig.name,
    title: "Belajar Coding Bareng Rezki",
    description,
    ...(siteConfig.isSiteUrlConfigured
      ? {
          url: "/",
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};
