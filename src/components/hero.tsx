import Image from "next/image";
import type { Profile } from "@/lib/dummy-data";
import { RollingTitle } from "@/components/rolling-title";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="home"
      aria-label="Profil dan Pengantar"
      className="relative overflow-hidden rounded-[20px] bg-surface p-6 sm:p-8 md:p-[44px]"
    >
      {/* Dekorasi Grid Samar di Sisi Kanan Bawah */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 z-0 h-[180px] w-[200px] select-none overflow-hidden [mask-image:radial-gradient(ellipse_at_bottom_right,black_40%,transparent_80%)]"
        aria-hidden="true"
      >
        <div className="grid h-full w-full grid-cols-4 grid-rows-4">
          <div className="border-b border-l border-border/30 bg-page/10" />
          <div className="border-b border-l border-border/30" />
          <div className="border-b border-l border-border/30 bg-page/20" />
          <div className="border-b border-l border-border/30" />
          <div className="border-b border-l border-border/30" />
          <div className="border-b border-l border-border/30 bg-page/15" />
          <div className="border-b border-l border-border/30" />
          <div className="border-b border-l border-border/30" />
          <div className="border-b border-l border-border/30 bg-page/25" />
          <div className="border-b border-l border-border/30" />
          <div className="border-b border-l border-border/30 bg-page/10" />
          <div className="border-b border-l border-border/30" />
          <div className="border-l border-border/30" />
          <div className="border-l border-border/30 bg-page/10" />
          <div className="border-l border-border/30" />
          <div className="border-l border-border/30 bg-page/20" />
        </div>
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
                    : [profile.role, "Full Stack Developer", "AI Engineer"]
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
            {profile.shortBio.includes("solutions that scale") ? (
              <>
                Informatics student and freelance web developer crafting digital solutions that
                <br className="hidden sm:inline" /> scale smoothly, engage users, and deliver real value.
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
            className="inline-flex h-[40px] items-center justify-center rounded-[11px] border border-btn-primary-border bg-btn-primary-bg px-5 font-display text-[13.5px] font-medium text-btn-primary-text shadow-btn-primary transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
          >
            Get in Touch
          </a>
          <a
            href={profile.cv.asset.url}
            download
            className="inline-flex h-[40px] items-center justify-center rounded-[11px] border-[1.5px] border-btn-secondary-border bg-btn-secondary-bg px-5 font-display text-[13.5px] font-medium text-btn-secondary-text shadow-btn-secondary transition-all hover:bg-page active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
