# PRD: Website Portofolio Pribadi

| | |
|---|---|
| Pemilik | Zidan (Muhammad Isya Zidan Maulana) |
| Status | Draft 1 |
| Tanggal | 13 November 2026 |
| Dokumen terkait | `docs/design-spec.md` (tampilan dan komponen) |

## 1. Ringkasan

Website portofolio pribadi satu halaman untuk mahasiswa S1 Teknik Informatika yang juga freelance web developer. Tampilan meniru gaya Portfolik, susunan section mengikuti Unti, dan seluruh konten dikelola lewat Sanity.

## 2. Latar belakang dan masalah

- Belum ada satu tempat yang merangkum proyek, pengalaman, dan kontak secara profesional
- Calon klien dan perekrut perlu menilai kemampuan dalam hitungan menit
- Konten (proyek, pengalaman) akan sering bertambah, jadi pembaruannya tidak boleh bergantung pada edit kode

## 3. Tujuan

1. Menampilkan proyek dan kemampuan dengan cepat dan rapi
2. Memudahkan orang menghubungi pemilik (email, sosial media, unduh CV)
3. Memungkinkan pembaruan konten dari browser tanpa deploy ulang
4. Menjadi contoh kerja nyata kemampuan frontend dan integrasi CMS

## 4. Bukan tujuan (non-goals)

- Pricing, Services, Testimoni, dan FAQ
- Booking call (Cal.com) dan form kontak dengan backend
- Blog
- Multi bahasa
- Dashboard admin buatan sendiri (konten dikelola di Sanity Studio)
- Analitik lanjutan di versi pertama

## 5. Target pengguna

- **Calon klien freelance**: ingin melihat contoh hasil kerja dan cara menghubungi
- **Perekrut dan pembimbing magang**: ingin melihat pendidikan, pengalaman, dan tools
- **Pemilik (editor konten)**: ingin menambah proyek dan pengalaman tanpa menyentuh kode

## 6. Lingkup fitur

### 6.1 Wajib (MVP)

| ID | Fitur | Penjelasan singkat |
|---|---|---|
| F1 | Header floating | Jam dan kota live, menu, toggle tema |
| F2 | Hero | Foto, nama, jabatan, headline, badge ketersediaan, tombol Get in Touch dan Download CV |
| F3 | Overview | Teks perkenalan dengan efek reveal saat scroll |
| F4 | Projects | Daftar kartu proyek, tiap proyek punya halaman detail |
| F5 | Experience | Daftar pengalaman (freelance, magang, organisasi) |
| F6 | Education | Daftar pendidikan |
| F7 | Certification | Daftar sertifikasi, disembunyikan jika kosong |
| F8 | Tools | Daftar tools dan teknologi |
| F9 | Footer / Contact | Email dan link sosial media |
| F10 | Tema terang dan gelap | Mengikuti sistem, bisa diganti manual, tersimpan |
| F11 | Sanity Studio | Editor konten di `/studio` |
| F12 | Revalidate otomatis | Konten tampil setelah publish tanpa deploy ulang |
| F13 | SEO dasar | Metadata, Open Graph, sitemap, robots |

### 6.2 Opsional (setelah MVP)

- Marquee logo teknologi di hero
- Filter proyek berdasarkan kategori
- Open Graph image dinamis
- Analitik ringan (misalnya Vercel Analytics)

## 7. Kebutuhan fungsional

- Semua teks, gambar, dan link pada section berasal dari Sanity
- Section yang tidak punya data tidak dirender
- Badge ketersediaan bisa dimatikan dari Sanity
- Jam memakai timezone dari profil (default `Asia/Jakarta`)
- Tombol CV mengunduh file PDF dari Sanity
- Tombol Get in Touch membuka `mailto:` ke email di profil
- Halaman proyek diakses lewat `/projects/[slug]`, slug yang tidak ada menampilkan 404
- Perubahan konten di Sanity muncul di situs setelah webhook memicu revalidate

## 8. Kebutuhan non-fungsional

- **Performa**: Lighthouse mobile Performance 90+
- **Aksesibilitas**: skor 95+, navigasi keyboard penuh, fokus terlihat, kontras AA di kedua tema, `prefers-reduced-motion` dihormati
- **SEO**: skor 95+, heading semantik, metadata per halaman
- **Responsif**: mulai 360px sampai desktop lebar, desain mobile first
- **Keamanan**: token dan secret hanya di environment variable, webhook memverifikasi signature
- **Biaya**: berjalan di tier gratis Vercel dan Sanity

## 9. Konten yang perlu disiapkan pemilik

- Foto profil (rasio persegi, minimal 800px) dan teks alternatifnya
- Headline hero dan bio singkat
- Teks overview (2 paragraf)
- Minimal 3 proyek: cover, judul, kategori, ringkasan, isi, stack, link
- Daftar pengalaman dan pendidikan
- File CV (PDF)
- Email dan link sosial media
- Daftar tools

## 10. Arsitektur singkat

- Next.js (App Router) + TypeScript + Tailwind CSS
- Sanity sebagai sumber konten, Studio di-embed pada project yang sama
- Fetch data di server component, cache memakai tag per tipe dokumen
- Webhook Sanity memanggil `/api/revalidate`, yang memanggil `revalidateTag`
- Deploy di Vercel

Detail komponen, token, dan schema ada di `docs/design-spec.md`.

## 11. Metrik keberhasilan

- Seluruh kriteria di bagian "Kriteria selesai" pada `docs/design-spec.md` terpenuhi
- Satu proyek baru bisa ditambahkan dan tampil di situs dalam waktu kurang dari 5 menit tanpa menyentuh kode
- Tidak ada error di console dan tidak ada layout shift pada gambar

## 12. Risiko dan asumsi

| Risiko / asumsi | Dampak | Penanganan |
|---|---|---|
| Nilai desain (warna, font, ukuran) masih perkiraan dari screenshot | Tampilan tidak identik dengan referensi | Cek nilai pasti di DevTools sebelum implementasi komponen |
| Mode gelap tidak ada di referensi Portfolik | Perlu keputusan desain sendiri | Gunakan token gelap di spesifikasi, tinjau hasil secara visual |
| Konten awal belum siap | Section tampak kosong | Isi data dummy di Sanity lebih dulu, ganti bertahap |
| Template referensi memiliki hak cipta | Risiko menyalin aset | Tiru gaya saja, jangan pakai teks, gambar, atau logo template |
| Versi library baru (Next 16, Sanity 6) | Perubahan API | Kunci versi di `package.json`, perbarui terjadwal |

## 13. Rencana rilis

| Fase | Isi | Hasil |
|---|---|---|
| 1 | Scaffold, token, font, tema, layout dengan data dummy | Kerangka halaman jalan |
| 2 | Semua section dengan data dummy, animasi, Lenis | Tampilan lengkap |
| 3 | Sanity Studio, schema, isi konten awal | Konten bisa diedit |
| 4 | Query GROQ, halaman detail proyek | Data nyata tampil |
| 5 | Webhook, SEO, aksesibilitas, performa, deploy | Rilis |

## 14. Pertanyaan terbuka

- Domain apa yang akan dipakai?
- Apakah tema default mengikuti sistem atau selalu terang?
- Apakah foto profil memakai latar polos atau dibiarkan apa adanya?
- Berapa proyek yang siap dipublikasikan pada rilis pertama?