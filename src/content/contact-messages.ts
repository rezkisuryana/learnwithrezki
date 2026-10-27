import { siteConfig } from "@/content/site";
import { formatRupiah } from "@/lib/format";

export const contactMessages = {
  general:
    "Halo Kak Rezki, saya tertarik dengan kelas coding untuk anak. Boleh minta informasi kelas dan jadwal yang tersedia?",
  schedule:
    "Halo Kak Rezki, saya ingin menanyakan jadwal kelas coding untuk anak. Boleh minta informasi jadwal yang tersedia?",
  scratch:
    "Halo Kak Rezki, saya ingin bertanya tentang kelas Scratch dan game development untuk anak.",
  web:
    "Halo Kak Rezki, saya tertarik dengan kelas web development untuk anak. Boleh diskusi materi dan jadwalnya?",
  advanced:
    "Halo Kak Rezki, saya ingin mendiskusikan kelas coding lanjutan sesuai pengalaman anak.",
  trial: `Halo Kak Rezki, saya tertarik dengan kelas perkenalan coding ${siteConfig.trialDurationMinutes} menit seharga ${formatRupiah(
    siteConfig.defaultClassPrice,
  )}. Boleh minta informasi jadwal dan cara pendaftarannya?`,
  final:
    "Halo Kak Rezki, saya ingin berkonsultasi tentang kelas coding untuk anak. Boleh minta informasi kelas dan jadwalnya?",
  documentation:
    "Halo Kak Rezki, saya ingin bertanya tentang materi dan dokumentasi pembelajaran coding untuk anak.",
  project:
    "Halo Kak Rezki, saya ingin bertanya tentang materi proyek coding yang dipelajari di kelas.",
} as const;
