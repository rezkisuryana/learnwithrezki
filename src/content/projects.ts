import type { Project } from "@/types/content";

/**
 * These entries describe learning materials, not documented student work.
 * Keep the status labels accurate until real screenshots and demos are
 * available and approved for publication.
 */
export const projects: Project[] = [
  {
    slug: "rocket-vs-alien",
    title: "Rocket vs Alien",
    category: "Scratch · Game Development",
    description:
      "Mengenal pergerakan karakter, interaksi, dan logika permainan melalui proyek game sederhana.",
    learningPoints: [
      "Mengatur pergerakan sprite",
      "Menghubungkan event dan input keyboard",
      "Menyusun logika interaksi karakter",
    ],
    status: "concept",
    statusLabel: "Konsep materi",
    visual: "rocket",
  },
  {
    slug: "mengendalikan-sprite",
    title: "Mengendalikan Sprite",
    category: "Scratch · Input Interaction",
    description:
      "Mempelajari cara menghubungkan input keyboard dan mouse dengan aksi karakter.",
    learningPoints: [
      "Input keyboard dan mouse",
      "Event dan respons karakter",
      "Menguji serta memperbaiki gerakan",
    ],
    status: "concept",
    statusLabel: "Materi dasar",
    visual: "sprite",
  },
  {
    slug: "website-untuk-pemula",
    title: "Website untuk Pemula",
    category: "Web Development",
    description:
      "Mengenal struktur HTML, styling CSS, dan dasar interaksi JavaScript.",
    learningPoints: [
      "Struktur halaman dengan HTML",
      "Styling dasar dengan CSS",
      "Interaksi sederhana dengan JavaScript",
    ],
    status: "concept",
    statusLabel: "Materi dasar",
    visual: "website",
  },
  {
    slug: "website-portfolio",
    title: "Website Portfolio",
    category: "Web Development · Proyek Kreatif",
    description:
      "Membangun halaman web profil pribadi untuk memamerkan karya dan proyek coding yang sudah dibuat.",
    learningPoints: [
      "Merancang tata letak halaman profil",
      "Menampilkan galeri karya dan kontak",
      "Mempublikasikan website secara online",
    ],
    status: "concept",
    statusLabel: "Materi lanjutan",
    visual: "portfolio",
  },
];
