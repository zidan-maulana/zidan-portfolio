import Image from "next/image";
import type { Profile } from "@/lib/dummy-data";
import { RollingTitle } from "@/components/rolling-title";
import { HeroGrid } from "@/components/hero-grid";
import { HoverLiftLink } from "@/components/hover-lift";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section
      id="home"
      aria-label="Profil dan Pengantar"
      className="relative z-10 overflow-hidden rounded-[24px] bg-surface p-6 sm:p-8 md:p-[44px] scroll-mt-28"
    >
      {/* Background decorative grid */}
      <div
        className="pointer-events-none absolute -bottom-[35px] right-2 z-0 select-none overflow-hidden sm:right-3"
        aria-hidden="true"
      >
        <HeroGrid className="h-[315px] w-[260px] opacity-60 sm:h-[420px] sm:w-[347px] sm:opacity-100" />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex flex-col items-start text-left">
        {/* Profile info: avatar and rolling title */}
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

        {/* Headline */}
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

        {/* Short bio */}
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

        {/* Action buttons */}
        <div className="mt-6 sm:mt-7 flex flex-row items-center gap-3">
          <HoverLiftLink
            href={profile.email ? `mailto:${profile.email}` : "mailto:zidan@example.com"}
            className="inline-flex h-[40px] items-center justify-center rounded-[13px] border border-btn-primary-border bg-btn-primary-bg px-5 font-display text-[13.5px] font-medium text-btn-primary-text shadow-btn-primary transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
          >
            Get in Touch
          </HoverLiftLink>
          <HoverLiftLink
            href={profile.cv.asset.url}
            download
            className="inline-flex h-[40px] cursor-pointer items-center justify-center rounded-[13px] border border-btn-secondary-border bg-btn-secondary-bg px-5 font-display text-[13.5px] font-medium text-btn-secondary-text shadow-btn-secondary transition-colors duration-200 ease hover:bg-btn-secondary-hover hover:shadow-btn-secondary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
          >
            Download CV
          </HoverLiftLink>
        </div>
      </div>
    </section>
  );
}
