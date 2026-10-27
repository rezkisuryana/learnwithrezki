# Belajar Coding Bareng Rezki

Landing page kelas coding online untuk anak SD/SMP. Dibangun dengan Next.js App Router, TypeScript, dan Tailwind CSS.

Produksi: [learnwithrezki.vercel.app](https://learnwithrezki.vercel.app)

Situs ini adalah satu halaman statis tanpa backend, formulir pendaftaran, atau analitik. Semua konsultasi diarahkan ke WhatsApp. Jika nomor WhatsApp belum dikonfigurasi, CTA memakai email publik yang sudah tercantum di portofolio pengajar dan menampilkan keterangan kanal secara transparan.

## Menjalankan secara lokal

Prasyarat: Node.js 20.9+ dan pnpm.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Environment

| Variabel | Wajib | Keterangan |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Untuk produksi | Nomor tujuan konsultasi. Format internasional, misalnya `6281234567890`. Nomor `08...` dinormalisasi otomatis. Jika kosong atau tidak valid, CTA memakai email fallback. |
| `NEXT_PUBLIC_SITE_URL` | Produksi | URL publik tanpa trailing slash. Dipakai untuk canonical, URL Open Graph, `robots.txt`, dan `sitemap.xml`. Di Vercel, jika kosong, URL produksi diinferensi dari `VERCEL_PROJECT_PRODUCTION_URL`. Di lokal, situs memakai `http://localhost:3000` dan canonical tidak ditampilkan. |

Jangan pernah menaruh kredensial atau secret di variabel `NEXT_PUBLIC_*`.

## Alur kontak

- Semua URL WhatsApp dibuat di [`src/lib/whatsapp.ts`](src/lib/whatsapp.ts).
- Nomor dinormalisasi menjadi digit internasional, lalu pesan di-encode dengan `encodeURIComponent`.
- Jika nomor belum ada atau tidak valid, tautan WhatsApp tidak dirender.
- Fallback memakai `mailto:` ke email publik pengajar. Komponen kanal menampilkan keterangan bahwa WhatsApp belum tersedia.
- Nomor tujuan tidak di-hardcode di komponen. Setelah `NEXT_PUBLIC_WHATSAPP_NUMBER` diubah, build dan deploy ulang agar seluruh CTA memakai nomor terbaru.

## Struktur konten

| Bagian | Sumber |
| --- | --- |
| Identitas situs, navigasi, harga, durasi, sosial | `src/content/site.ts` |
| Pesan WhatsApp per konteks | `src/content/contact-messages.ts` |
| Proyek/materi | `src/content/projects.ts` |
| Jalur belajar | `src/content/classes.ts` |
| Pendekatan belajar | `src/content/approach.ts` |
| Dokumentasi materi | `src/content/documentation.ts` |
| FAQ | `src/content/faq.ts` |

Konten proyek dan dokumentasi sengaja dilabeli sebagai materi/konsep, bukan karya atau capaian siswa. Jangan menambahkan testimoni, rating, sertifikasi, foto siswa, atau tautan demo tanpa data dan izin yang benar.

## Script

```bash
pnpm dev        # development server
pnpm lint       # ESLint
pnpm typecheck  # TypeScript tanpa emit
pnpm check      # lint + typecheck
pnpm build      # production build
pnpm start      # jalankan hasil build
```

## QA yang disarankan

1. Jalankan `pnpm check` dan `pnpm build`.
2. Periksa halaman pada 320, 390, 768, 1024, dan 1440 px.
3. Uji menu mobile dengan keyboard, Escape, dan tautan anchor.
4. Uji FAQ dengan Enter/Space, termasuk `aria-expanded` dan panel jawaban.
5. Uji CTA WhatsApp aktif, lalu uji fallback email dengan mengosongkan nomor.
6. Periksa `robots.txt`, `sitemap.xml`, metadata, dan gambar Open Graph.
7. Jalankan Lighthouse untuk aksesibilitas, SEO, best practices, dan performa.

## Deploy

Situs produksi berjalan di Vercel:

- URL: [https://learnwithrezki.vercel.app](https://learnwithrezki.vercel.app)
- Project: `learnwithrezki`
- Scope: `rezkisuryanaoramicoms-projects`
- Domain lama `belajar-coding-bareng-rezki.vercel.app` dialihkan permanen ke domain baru.

Deploy ulang dari direktori proyek:

```bash
pnpm dlx vercel@latest deploy --prod
```

Environment yang sudah dikonfigurasi di Vercel:

| Variabel | Environment | Nilai |
| --- | --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Production, Preview, Development | Nomor WhatsApp resmi |
| `NEXT_PUBLIC_SITE_URL` | Production | `https://learnwithrezki.vercel.app` |

Catatan:

1. Setelah mengubah environment `NEXT_PUBLIC_*`, deploy ulang karena nilainya diinlin saat build.
2. Jika memakai domain kustom, tambahkan domain di Vercel, ubah `NEXT_PUBLIC_SITE_URL`, lalu deploy ulang.
3. Verifikasi canonical, `robots.txt`, `sitemap.xml`, dan CTA WhatsApp setelah perubahan domain.
4. Ganti metadata atau konten jika harga, durasi, atau layanan berubah.
5. `.env.local` tidak diunggah ke Vercel; nilainya diatur lewat Environment Variables project.

## Aset

Foto pengajar berada di `public/images/instructor/rezki-suryana.jpg` dan berasal dari portofolio publik Rezki Suryana. Ilustrasi proyek dibuat dengan CSS/SVG dan diberi label sebagai ilustrasi materi, bukan tangkapan layar karya siswa.
