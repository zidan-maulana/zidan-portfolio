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
      className="w-full max-w-[1200px] mx-auto px-3 md:px-6 pt-4 pb-6"
    >
      <div className="rounded-[24px] border border-border bg-surface p-5 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-8 md:gap-y-4 items-start">
          {/* 1. Badge Ketersediaan */}
          {profile.showAvailability && profile.availability && (
            <div className="order-1 flex justify-end md:justify-start md:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-[12px] font-medium text-accent">
                <span
                  className="h-2 w-2 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {profile.availability}
              </span>
            </div>
          )}

          {/* 2. Avatar, Nama, dan Jabatan */}
          <div className="order-2 my-4 md:my-0 flex items-center gap-4 md:col-span-4 md:col-start-9 md:row-span-4 md:flex-col md:justify-center md:text-center">
            <div className="relative h-[72px] w-[72px] md:h-[120px] md:w-[120px] shrink-0 overflow-hidden rounded-full border border-border">
              <Image
                src={profile.avatar.asset.url}
                alt={profile.avatar.alt}
                fill
                sizes="(max-width: 768px) 72px, 120px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="text-[18px] md:text-[20px] font-medium text-text leading-tight">
                {profile.name}
              </div>
              <div className="text-[14px] text-muted mt-0.5 md:mt-1 font-normal">
                {profile.role}
              </div>
            </div>
          </div>

          {/* 3. Pernyataan H1 */}
          <div className="order-3 md:col-span-8">
            <h1 className="text-[24px] md:text-[40px] font-normal tracking-[-0.01em] leading-[1.2] text-text">
              {profile.headline}
            </h1>
          </div>

          {/* 4. Paragraf Ringkas Muted */}
          <div className="order-4 mt-3 md:mt-0 md:col-span-8">
            <p className="text-[14px] md:text-[16px] font-normal leading-[1.5] text-muted max-w-[65ch]">
              {profile.shortBio}
            </p>
          </div>

          {/* 5 & 6. Tombol Aksi */}
          <div className="order-5 mt-5 md:mt-3 md:col-span-8 flex flex-col sm:flex-row items-center gap-3 w-full">
            <a
              href={`mailto:${profile.email}`}
              className="flex h-[48px] w-full sm:w-auto items-center justify-center rounded-[14px] bg-btn-primary-bg px-6 text-[15px] font-medium text-btn-primary-text transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
            >
              Get in Touch
            </a>
            {profile.cv?.asset?.url && (
              <a
                href={profile.cv.asset.url}
                download
                className="flex h-[48px] w-full sm:w-auto items-center justify-center rounded-[14px] border border-btn-secondary-border bg-btn-secondary-bg px-6 text-[15px] font-medium text-btn-secondary-text transition-colors hover:bg-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
              >
                Download CV
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
