# Spesifikasi Desain dan Pembangunan Website Portofolio

Acuan untuk Agent Coding. Bangun website portofolio pribadi yang meniru **tampilan dan gaya** Portfolik, dengan **susunan section** mengikuti Unti. Seluruh konten diambil dari Sanity.

- Referensi gaya: https://portfolik.framer.website/#hero
- Referensi susunan section: https://unti.framer.website/
- Pemilik: Zidan, mahasiswa S1 Teknik Informatika dan freelance web developer (ganti seluruh teks template dengan konten asli)

## 0. Aturan dasar

- Tiru hanya gaya visual. Jangan salin teks, gambar, logo, atau nama brand dari template.
- Nilai bertanda `VERIFY` adalah perkiraan dari screenshot. Buka situs referensi di DevTools (tab Computed), lalu ganti dengan nilai pasti sebelum finalisasi.
- Jangan dibuat: Pricing, Services, Testimonials, FAQ, booking Cal.com, backend form kontak, badge Framer ("Use for Free", "Made in Framer").
- Standar kualitas minimum: responsif mulai 360px, fokus keyboard terlihat jelas, `prefers-reduced-motion` dihormati, kontras teks minimal AA di kedua tema.

## 1. Stack teknologi

- Next.js (App Router) + TypeScript
- Tailwind CSS (token sebagai CSS variable, lihat bagian 3)
- Motion (`motion/react`) untuk animasi
- Lenis untuk smooth scroll (elemen root situs referensi memakai class `lenis`)
- next-themes untuk toggle tema terang dan gelap
- Sanity (headless CMS), Studio di-embed di `/studio` pada project yang sama
- `next-sanity` untuk fetch data, `@sanity/image-url` untuk gambar, `@portabletext/react` untuk rich text
- Deploy di Vercel, refresh konten lewat webhook Sanity yang memanggil `revalidateTag`
- Package manager: pnpm

## 2. Struktur halaman

Satu halaman di `/` dengan anchor antar section, ditambah `/projects/[slug]` untuk detail proyek.

Urutan dari atas ke bawah:

1. Header (floating)
2. Hero
3. Overview
4. Projects
5. Experience
6. Education
7. Certification
8. Tools
9. Footer / Contact

## 3. Design token

Definisikan di `globals.css` sebagai variable, lalu petakan di konfigurasi Tailwind. Kedua tema wajib ada.

### Warna (terang) `VERIFY`

- `--page`: abu-abu muda, sekitar `#F4F4F4` (latar luar di belakang kartu)
- `--surface`: `#FFFFFF` (kartu)
- `--text`: hampir hitam, sekitar `#0A0A0A`
- `--muted`: sekitar `#666666`
- `--border`: sekitar `#E5E5E5`
- `--accent`: hijau sekitar `#178D00` (hanya untuk titik status dan teks badge)
- `--accent-soft`: hijau sangat muda (latar badge)
- `--btn-primary-bg`: `#0A0A0A`, `--btn-primary-text`: `#FFFFFF`
- `--btn-secondary-bg`: `#FFFFFF`, `--btn-secondary-border`: `--border`

### Warna (gelap)

- Dibalik secara logis: page `#0A0A0A`, surface sekitar `#141414`, text sekitar `#F5F5F5`, muted sekitar `#999999`, border sekitar `#262626`
- Tombol utama menjadi putih di atas hitam, tombol sekunder menjadi surface gelap dengan border
- Warna aksen hijau tidak berubah

### Tipografi `VERIFY`

- Font: Inter lewat `next/font` (sans-serif grotesque yang bersih). Konfirmasi font aslinya di DevTools, ganti jika berbeda.
- H1 (hero): 24px di mobile, naik sampai sekitar 40px di desktop, weight 400, letter-spacing -0.01em, line-height 1.2
- Judul section: 18px, weight 500, line-height 1.3
- Body: 14px sampai 16px, weight 400, line-height 1.5, warna muted untuk paragraf sekunder
- Label kecil (badge, meta): 12px, weight 500
- Panjang baris paragraf di bawah 75 karakter

### Bentuk dan spacing `VERIFY`

- Padding halaman: 12px di mobile, sampai 24px di desktop
- Lebar maksimum container: sekitar 1200px, rata tengah
- Kartu: surface putih, border-radius sekitar 24px, padding dalam 20px di mobile dan 32px di desktop
- Jarak antar kartu: 12px sampai 16px
- Tombol: pill penuh atau radius sekitar 14px (cek di referensi), tinggi sekitar 48px, lebar penuh di mobile
- Avatar: lingkaran, 72px sampai 80px
- Badge: pill, teks 12px, titik hijau 8px
- Tanpa shadow tebal. Pemisahan visual berasal dari kontras latar abu-abu dan kartu putih.

## 4. Komponen

### 4.1 Header (floating)

- Container abu-abu membulat di bagian atas, berisi jam dan kota lokal di kiri (format `08:15:21 PM Jakarta`), berjalan live setiap detik
- Jam memakai `Intl.DateTimeFormat` dengan `timeZone: "Asia/Jakarta"`, dirender di client saja untuk menghindari hydration mismatch
- Sisi kanan: hamburger di mobile, link inline (Home, About, Projects, Experience, Contact) di desktop
- Menu mobile: kartu dropdown sederhana selebar layar, menutup saat link diklik
- Sertakan tombol toggle tema (ikon matahari/bulan)
- Sticky di atas dengan margin kecil, latar mengikuti `--page` dengan blur ringan saat scroll

### 4.2 Kartu Hero

- Kartu putih, urutan konten di mobile:
  1. Badge ketersediaan, rata kanan: titik hijau + "Open for new projects" (teks dari Sanity `availability`)
  2. Baris: avatar bulat di kiri, nama dan jabatan di kanan
  3. Pernyataan H1 (dari Sanity `headline`)
  4. Paragraf muted (dari Sanity `shortBio`)
  5. Tombol utama (hitam, lebar penuh): Get in Touch (`mailto:`)
  6. Tombol sekunder (putih, outline, lebar penuh): Download CV (link ke file asset Sanity)
- Desktop: dua kolom di dalam kartu, teks di kiri dan avatar/potret di kanan, tombol berjajar

### 4.3 Marquee teknologi (opsional, di dalam atau di bawah hero)

- Label "Tech I use", lalu satu baris logo yang bergulir horizontal tanpa henti, tepi memudar transparan dengan mask gradient
- Berhenti saat hover, jadi baris statis jika reduced motion
- Sumber: dokumen Sanity `tool` beserta logo

### 4.4 Overview

- Kartu dengan label section dan paragraf overview dari Sanity (Portable Text)
- Efek reveal saat scroll: kata-kata berubah dari buram dan pudar menjadi tajam saat section masuk layar (teks "About my self." di referensi memakai efek ini). Pakai hanya di sini.

### 4.5 Projects

- Judul section, lalu daftar kartu proyek
- Tiap item: gambar cover (membulat, rasio 4:3 atau 16:10), judul, kategori, tahun (opsional)
- Hover: gambar membesar ke 1.03 selama 300ms, tanpa efek lain
- Seluruh kartu menjadi link ke `/projects/[slug]`
- Halaman detail: cover, judul, meta (peran, tahun, stack, link live dan repo), isi Portable Text, galeri, link kembali

### 4.6 Experience dan Education

- Daftar vertikal di dalam kartu, satu baris per entri
- Baris: logo organisasi (opsional, 40px membulat), nama organisasi, peran atau gelar sebagai baris tebal, deskripsi dengan teks muted, periode dan lokasi rata kanan di desktop dan bertumpuk di mobile
- Urutkan berdasarkan `startDate` menurun
- Experience harus bisa menampung pekerjaan freelance, magang, dan organisasi

### 4.7 Certification

- Daftar baris: judul, penerbit, tanggal, link eksternal (opsional)
- Sembunyikan seluruh section jika daftarnya kosong

### 4.8 Tools

- Daftar atau grid chip: nama dan deskripsi singkat (misalnya "Next.js, Frontend framework"), link opsional
- Chip pill membulat, hanya border

### 4.9 Footer / Contact

- Baris kontak: email, WhatsApp atau telepon (opsional), LinkedIn, GitHub, Instagram
- Baris copyright dengan tahun berjalan
- Tanpa form. Email membuka `mailto:`.

## 5. Aturan animasi

- Saat halaman dimuat: kartu hero muncul dengan fade dan naik 12px selama 500ms, elemen anak berjeda 60ms. Hanya sekali.
- Section di bawahnya: fade-up sederhana (opacity 0 ke 1, y 16px ke 0, 400ms) dengan `whileInView` dan `once: true`
- Hover: hanya scale pada gambar proyek, transisi warna latar tombol 150ms
- Pergantian tema: transisi warna 200ms
- Smooth scroll lewat Lenis, anchor link menggulir dengan offset setinggi header
- Semua animasi mati atau instan saat `prefers-reduced-motion: reduce`

## 6. Schema Sanity

Semua di `/sanity/schemaTypes`. Gunakan `defineType` dan `defineField`.

- `profile` (singleton): `name`, `role`, `avatar` (image dengan alt), `headline`, `shortBio`, `overview` (Portable Text), `location`, `timezone` (default `Asia/Jakarta`), `availability` (string), `showAvailability` (boolean), `cv` (file), `email`, `socials` (array berisi `{label, url}`)
- `project`: `title`, `slug`, `category`, `year`, `cover` (image dengan alt), `summary`, `body` (Portable Text), `gallery` (array gambar), `stack` (array string), `liveUrl`, `repoUrl`, `featured` (boolean), `order` (number)
- `experience`: `organization`, `logo`, `role`, `description`, `startDate`, `endDate` (kosong berarti masih berjalan), `location`
- `education`: `institution`, `degree`, `description`, `startDate`, `endDate`, `location`
- `certification`: `title`, `issuer`, `date`, `url`
- `tool`: `name`, `descriptor`, `logo`, `url`, `order`

Aturan:

- `profile` adalah singleton (sembunyikan create dan delete di struktur Studio)
- Field wajib: `name`, `role`, `headline` pada profile, serta `title`, `slug`, `cover` pada project
- Field gambar wajib punya teks `alt`

## 7. Pengambilan data

- Query GROQ ada di `/lib/sanity/queries.ts`, bertipe dari hasil generate (`sanity typegen`)
- Fetch di server component, beri tag tiap query (`profile`, `projects`, `experience`, `education`, `certifications`, `tools`)
- Route webhook `/api/revalidate` memverifikasi secret signature Sanity lalu memanggil `revalidateTag` sesuai tipe dokumen yang berubah
- `generateStaticParams` untuk slug proyek
- Tangani kondisi kosong: sembunyikan section jika tidak ada item

## 8. Struktur folder

```
/app
  /(site)/page.tsx
  /(site)/projects/[slug]/page.tsx
  /studio/[[...tool]]/page.tsx
  /api/revalidate/route.ts
  layout.tsx
  globals.css
/components
  header.tsx, hero.tsx, tool-marquee.tsx, overview.tsx,
  project-card.tsx, timeline-list.tsx, certification-list.tsx,
  tools.tsx, footer.tsx, theme-toggle.tsx, live-clock.tsx,
  blur-reveal.tsx, fade-in.tsx
/lib/sanity
  client.ts, queries.ts, image.ts
/sanity
  schemaTypes/*, structure.ts, sanity.config.ts
/public
```

Environment variable:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_API_READ_TOKEN`
- `SANITY_REVALIDATE_SECRET`

## 9. Perilaku responsif

- Breakpoint: mobile di bawah 768px (satu kolom, tombol bertumpuk), tablet 768px sampai 1199px, desktop 1200px ke atas
- Desain mobile first, karena referensi ditangkap pada lebar 393px
- Gambar memakai `next/image` dengan `sizes`, cover menjaga rasio tetap agar tidak terjadi layout shift
- Area sentuh minimal 44px

## 10. SEO dan meta

- `metadata` dari profile: judul `{name} | {role}`, deskripsi dari `shortBio`
- Gambar Open Graph: avatar profile atau OG image hasil generate
- `sitemap.ts` dan `robots.ts`
- Landmark semantik: `header`, `main`, `section` dengan heading, `footer`

## 11. Kriteria selesai

- Tema terang dan gelap berfungsi dan tersimpan, tanpa kedipan saat load
- Jam berjalan live dan menampilkan timezone yang dikonfigurasi
- Seluruh konten bisa diedit dari `/studio` dan tampil di situs setelah publish tanpa deploy ulang
- Section kosong tidak dirender
- Lighthouse mobile: Performance 90+, Accessibility 95+, SEO 95+
- Tidak ada layout shift pada gambar, tidak ada peringatan hydration di console
- Navigasi keyboard menjangkau link header, toggle tema, tombol, dan kartu proyek dengan fokus terlihat
- Reduced motion mematikan animasi dan smooth scroll
- Tidak ada sisa teks, gambar, atau nama brand dari template

## 12. Urutan pengerjaan yang disarankan

1. Scaffold Next.js, Tailwind, token, font, toggle tema
2. Layout statis dengan data dummy: header, hero, overview
3. Section lainnya dengan data dummy
4. Animasi dan Lenis
5. Sanity Studio, schema, isi konten awal
6. Ganti data dummy dengan query GROQ
7. Halaman detail proyek
8. Webhook revalidate, SEO, pengecekan aksesibilitas, deploy