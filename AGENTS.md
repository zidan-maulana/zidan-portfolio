<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Aturan Pengembangan Proyek Zidan Portfolio

## Aturan Keras
1. Lingkup Fitur: Hanya bangun fitur yang ada di PRD. Dilarang menambah Pricing, Services, Testimoni, FAQ, form kontak, blog, atau booking call.
2. Referensi: Tiru gaya visual referensi (Portfolik untuk tampilan, Unti untuk susunan section). Jangan menyalin teks, gambar, atau logo template.
3. Nilai VERIFY: Nilai bertanda VERIFY di docs/design-spec.md adalah perkiraan sementara. Catat setiap nilai VERIFY yang dipakai pada laporan akhir. Jangan mengarang nilai baru.
4. Sumber Data: Semua teks portofolio bersumber dari Sanity di masa depan. Selama masa pengembangan awal gunakan data dummy terpusat di `src/lib/dummy-data.ts` dengan struktur persis skema Sanity.
5. Token Desain: Warna hanya boleh diakses melalui token di `globals.css`. Dilarang menulis kode warna hex langsung di dalam komponen.
6. Komponen: Server Component secara default. Client Component hanya dipakai untuk jam live, toggle tema, dan animasi.
7. Aksesibilitas: Hormati prefers-reduced-motion, fokus keyboard wajib terlihat jelas di semua elemen interaktif, kontras warna minimal AA di kedua tema.
8. Larangan Em Dash: Dilarang menggunakan karakter em dash pada teks maupun komentar kode.
9. Keputusan Desain: Tanyakan jika ada hal yang ambigu atau butuh keputusan desain. Jangan menebak.
10. Git dan Commit: Jangan push ke remote. Commit lokal saja, satu commit per langkah logis, menggunakan format Conventional Commits (feat:, chore:, docs:).

## Perintah Verifikasi Wajib Lulus
- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
