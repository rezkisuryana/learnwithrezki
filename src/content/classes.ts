import { contactMessages } from "@/content/contact-messages";
import type { ClassPath } from "@/types/content";

export const classPaths: ClassPath[] = [
  {
    slug: "scratch",
    title: "Scratch & Game Development",
    level: "Pemula",
    description:
      "Belajar logika coding melalui blok visual, karakter, interaksi, dan game sederhana.",
    topics: ["Logika dasar", "Sprite & event", "Game sederhana"],
    ctaLabel: "Tanya Kelas Scratch",
    message: contactMessages.scratch,
    featured: true,
  },
  {
    slug: "web-development",
    title: "Web Development",
    level: "Dasar",
    description:
      "Mengenal HTML, CSS, dan JavaScript untuk mulai membuat website sendiri.",
    topics: ["HTML", "CSS", "JavaScript"],
    ctaLabel: "Tanya Kelas Website",
    message: contactMessages.web,
  },
  {
    slug: "coding-lanjutan",
    title: "Coding Lanjutan",
    level: "Sesuai kemampuan",
    description:
      "Mengembangkan proyek berdasarkan dasar coding, minat, dan kesiapan siswa.",
    topics: ["Proyek", "Pendalaman", "Evaluasi"],
    ctaLabel: "Diskusikan Materi",
    message: contactMessages.advanced,
  },
];
