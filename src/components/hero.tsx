import Image from "next/image";
import type { Profile } from "@/lib/dummy-data";
import { RollingTitle } from "@/components/rolling-title";
import { HeroGrid } from "@/components/hero-grid";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="home"
      aria-label="Profil dan Pengantar"
      className="relative z-10 overflow-hidden rounded-[21px] bg-surface p-6 sm:p-8 md:p-[44px]"
    >
      {/* Dekorasi Grid Minimalis Samar di Pojok Kanan Bawah */}
      <div
        className="pointer-events-none absolute -bottom-[35px] right-2 z-0 select-none overflow-hidden sm:right-3"
        aria-hidden="true"
      >
        <HeroGrid className="h-[315px] w-[260px] opacity-60 sm:h-[420px] sm:w-[347px] sm:opacity-100" />
      </div>

      {/* Konten Utama Hero (Rata Kiri, Mengikuti Garis Vertikal yang Sama) */}
      <div className="relative z-10 flex flex-col items-start text-left">
        {/* Identitas Profil: Avatar Bulat 90x90px dan Nama/Jabatan */}
        <div className="flex items-center gap-4 sm:gap-4.5">
          <div className="relative h-[90px] w-[90px] shrink-0 overflow-hidden rounded-full border border-border/80 shadow-xs">
            <Image
              src={profile.avatar.asset.url}
              alt={profile.avatar.alt}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-display text-[20px] font-medium leading-tight tracking-[-0.01em] text-text">
              {profile.name}
            </div>
            <div className="mt-[2px]">
              <RollingTitle
                titles={
                  profile.roles && profile.roles.length > 0
                    ? profile.roles
                    : [
                      "Full Stack Developer",
                      "AI Engineer",
                      "UI/UX Designer",
                    ]
                }
              />
            </div>
          </div>
        </div>

        {/* Headline H1: Inter Display 28px dengan pemenggalan 2 baris seimbang */}
        <div className="mt-6 sm:mt-7">
          <h1 className="max-w-[580px] font-display text-[28px] font-normal tracking-[-0.015em] leading-[36px] sm:leading-[37px] text-text">
            {profile.headline.includes("digital experiences") ? (
              <>
                I build modern, high-performance digital
                <br className="hidden sm:inline" /> experiences that drive real impact.
              </>
            ) : (
              profile.headline
            )}
          </h1>
        </div>

        {/* Deskripsi Singkat Bio: Font size 16px dengan jarak lebih rapat dari head */}
        <div className="mt-2.5 sm:mt-3">
          <p className="max-w-[620px] text-[16px] font-normal leading-[25px] sm:leading-[26px] text-muted">
            {profile.shortBio.includes("solutions") ? (
              <>
                Informatics student and freelance developer crafting digital solutions
                <br className="hidden sm:inline" /> that engage users and deliver real value.
              </>
            ) : (
              profile.shortBio
            )}
          </p>
        </div>

        {/* Tombol Aksi Sesuai PRD: Get in Touch dan Download CV */}
        <div className="mt-6 sm:mt-7 flex flex-row items-center gap-3">
          <a
            href={profile.email ? `mailto:${profile.email}` : "mailto:zidan@example.com"}
            className="inline-flex h-[40px] items-center justify-center rounded-[13px] border border-btn-primary-border bg-btn-primary-bg px-5 font-display text-[13.5px] font-medium text-btn-primary-text shadow-btn-primary transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
          >
            Get in Touch
          </a>
          <a
            href={profile.cv.asset.url}
            download
            className="inline-flex h-[40px] cursor-pointer items-center justify-center rounded-[13px] border border-btn-secondary-border bg-btn-secondary-bg px-5 font-display text-[13.5px] font-medium text-btn-secondary-text shadow-btn-secondary transition-all duration-200 ease hover:bg-btn-secondary-hover hover:shadow-btn-secondary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
