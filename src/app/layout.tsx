import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/content/site";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";
import "./sections.css";
import "./content-sections.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      inLanguage: "id-ID",
      description:
        "Les coding online untuk anak SD/SMP. Belajar Scratch, membuat game sederhana, dan mengenal web development bersama Rezki.",
    },
    {
      "@type": "Person",
      name: siteConfig.instructorFullName,
      jobTitle: "Guru IT coding & web developer",
      url: siteConfig.portfolioUrl,
      image: new URL(
        "/images/instructor/rezki-suryana.jpg",
        siteConfig.siteUrl,
      ).toString(),
      sameAs: [
        siteConfig.portfolioUrl,
        ...siteConfig.socialLinks.map((link) => link.href),
      ],
      knowsAbout: [
        "Coding untuk anak",
        "Scratch",
        "HTML",
        "CSS",
        "JavaScript",
        "Web development",
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} ${jakarta.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>
        <div id="top" />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
