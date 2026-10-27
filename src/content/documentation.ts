import type { DocumentationEntry } from "@/types/content";

/**
 * These are curated curriculum notes, not claims about finished classes or
 * student outcomes. When real classroom documentation becomes available:
 *
 * 1. Add only material that both the instructor and guardian have approved.
 * 2. Never include a student's full name, face, contact details, or grades
 *    without the required consent.
 * 3. Set status to "classroom", add a date, and optionally include a local
 *    image with descriptive alt text.
 */
export const documentation: DocumentationEntry[] = [
  {
    slug: "scratch-input-gerakan",
    title: "Dari tombol ke gerakan",
    category: "Materi Pembelajaran",
    topic: "Scratch · Input & event",
    status: "material",
    statusLabel: "Catatan materi",
    objective:
      "Memahami bagaimana input keyboard dapat menggerakkan sprite.",
    summary:
      "Latihan menghubungkan tombol dengan perubahan posisi sprite, menguji responsnya, lalu memperbaiki gerakan yang belum sesuai.",
    reflection:
      "Langkah lanjutan: menambahkan batas area dan aturan permainan sederhana.",
  },
  {
    slug: "web-halaman-pertama",
    title: "Menyusun halaman pertama",
    category: "Materi Pembelajaran",
    topic: "Web · HTML & CSS",
    status: "material",
    statusLabel: "Catatan materi",
    objective: "Mengenal struktur halaman dan dasar styling dengan CSS.",
    summary:
      "Menyusun heading, paragraf, dan tombol, lalu mengatur warna, jarak, serta tata letak sederhana.",
    reflection:
      "Langkah lanjutan: mengenal interaksi dasar dengan JavaScript.",
  },
  {
    slug: "logika-aturan-permainan",
    title: "Merancang aturan permainan",
    category: "Proyek Coding",
    topic: "Logika · Sequence & condition",
    status: "material",
    statusLabel: "Catatan materi",
    objective:
      "Melatih cara memecah aturan permainan menjadi langkah coding yang runtut.",
    summary:
      "Membahas urutan aksi, kondisi skor, dan kapan permainan berakhir sebelum mulai membangun proyek.",
    reflection:
      "Langkah lanjutan: menguji aturan permainan dan memperbaiki error.",
  },
];
