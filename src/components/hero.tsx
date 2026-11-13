import Image from "next/image";
import type { Profile } from "@/lib/dummy-data";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Profil dan Pengantar"
      className="w-full max-w-[1040px] mx-auto px-4 mt-3 mb-6"
    >
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[32px] border border-border bg-surface p-6 sm:p-8 md:p-12">
        {/* Baris Atas: Avatar, Nama, Jabatan di Kiri dan Badge Ketersediaan di Kanan */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-full">
          {/* Avatar dan Identitas */}
          <div className="flex items-center gap-4">
            <div className="relative h-[72px] w-[72px] sm:h-[80px] sm:w-[80px] shrink-0 overflow-hidden rounded-full border border-border/80">
              <Image
                src={profile.avatar.asset.url}
                alt={profile.avatar.alt}
                fill
                sizes="(max-width: 640px) 72px, 80px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="text-[18px] sm:text-[20px] font-semibold text-text tracking-[-0.01em] leading-tight">
                {profile.name}
              </div>
              <div className="text-[14px] text-muted font-normal mt-0.5">
                {profile.role}
              </div>
            </div>
          </div>

          {/* Badge Ketersediaan */}
          {profile.showAvailability && profile.availability && (
            <div className="self-start sm:self-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-[12px] font-medium text-accent">
                <span
                  className="h-2 w-2 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {profile.availability}
              </span>
            </div>
          )}
        </div>

        {/* Area Konten Utama dan Grid Garis Arsitektural */}
        <div className="relative mt-8 sm:mt-10 md:mt-12">
          {/* Grid Dekoratif Garis Tipis di Sisi Kanan (Khusus Layar Desktop) */}
          <div
            className="hidden md:block absolute right-0 top-0 bottom-0 w-[38%] pointer-events-none select-none"
            aria-hidden="true"
          >
            <div className="h-full w-full grid grid-cols-4">
              <div className="border-l border-border/50 h-full flex flex-col">
                <div className="border-b border-border/50 h-[72px]" />
                <div className="border-b border-border/50 h-[72px]" />
                <div className="border-b border-border/50 h-[72px]" />
                <div className="flex-1" />
              </div>
              <div className="border-l border-border/50 h-full flex flex-col">
                <div className="border-b border-border/50 h-[72px]" />
                <div className="border-b border-border/50 h-[72px]" />
                <div className="border-b border-border/50 h-[72px]" />
                <div className="flex-1" />
              </div>
              <div className="border-l border-border/50 h-full flex flex-col">
                <div className="border-b border-border/50 h-[72px]" />
                <div className="border-b border-border/50 h-[72px]" />
                <div className="border-b border-border/50 h-[72px]" />
                <div className="flex-1" />
              </div>
              <div className="border-l border-border/50 h-full flex flex-col">
                <div className="border-b border-border/50 h-[72px]" />
                <div className="border-b border-border/50 h-[72px]" />
                <div className="border-b border-border/50 h-[72px]" />
                <div className="flex-1" />
              </div>
            </div>
          </div>

          {/* Teks Headline, Bio, dan Tombol */}
          <div className="relative z-10 max-w-[620px]">
            {/* Pernyataan H1 */}
            <h1 className="text-[30px] sm:text-[38px] md:text-[44px] font-normal tracking-[-0.02em] leading-[1.18] text-text">
              {profile.headline}
            </h1>

            {/* Paragraf Bio Singkat */}
            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[16px] font-normal leading-[1.6] text-muted max-w-[560px]">
              {profile.shortBio}
            </p>

            {/* Tombol Aksi */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <a
                href={`mailto:${profile.email}`}
                className="flex h-[46px] w-full sm:w-auto items-center justify-center rounded-[14px] bg-btn-primary-bg px-6 text-[14px] font-medium text-btn-primary-text transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
              >
                Get in Touch
              </a>
              {profile.cv?.asset?.url && (
                <a
                  href={profile.cv.asset.url}
                  download
                  className="flex h-[46px] w-full sm:w-auto items-center justify-center rounded-[14px] border border-btn-secondary-border bg-btn-secondary-bg px-6 text-[14px] font-medium text-btn-secondary-text shadow-xs transition-all hover:bg-page active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
                >
                  Download CV
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
