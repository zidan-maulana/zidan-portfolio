import type { Profile } from "@/lib/dummy-data";
import { BlurReveal } from "@/components/blur-reveal";

interface OverviewProps {
  profile: Profile;
}

export function Overview({ profile }: OverviewProps) {
  const bioText =
    profile.aboutText ||
    "Hey, I'm Zidan Maulana, an Informatics student and freelance developer crafting scalable web applications, modern frontend architecture, and intuitive digital experiences that deliver real impact.";

  return (
    <section
      id="about"
      aria-label="Tentang Saya"
      className="relative rounded-[20px] bg-surface p-6 sm:p-8 md:p-[44px]"
    >
      {/* Label Section Sesuai Referensi Portfolik */}
      <div className="font-display text-[13.5px] sm:text-[14px] font-medium text-muted">
        About my self.
      </div>

      {/* Paragraf Utama dengan Efek Reveal Kata Saat Scroll */}
      <div className="mt-4 sm:mt-5">
        <BlurReveal
          text={bioText}
          className="font-display text-[18px] sm:text-[21px] md:text-[22px] font-normal tracking-[-0.015em] leading-[30px] sm:leading-[34px] md:leading-[36px] text-text"
        />
      </div>

      {/* Baris Informasi Kontak: Email, Telepon, dan Unduh CV */}
      <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-y-2.5 gap-x-3.5 text-[13.5px] sm:text-[14px] text-muted">
        <a
          href={profile.email ? `mailto:${profile.email}` : "mailto:zidan@example.com"}
          className="inline-flex items-center gap-1.5 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-sm"
          aria-label={`Kirim email ke ${profile.email || "zidan@example.com"}`}
        >
          <svg
            className="h-4 w-4 shrink-0 text-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span>{profile.email || "zidan@example.com"}</span>
        </a>

        <span className="text-muted-light select-none" aria-hidden="true">
          ·
        </span>

        <a
          href={
            profile.phone
              ? `tel:${profile.phone.replace(/\s+/g, "")}`
              : "tel:+6281234567890"
          }
          className="inline-flex items-center gap-1.5 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-sm"
          aria-label={`Hubungi nomor telepon ${profile.phone || "+62 812 3456 7890"}`}
        >
          <svg
            className="h-4 w-4 shrink-0 text-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
            <path d="M12 18h.01" />
          </svg>
          <span>{profile.phone || "+62 812 3456 7890"}</span>
        </a>

        <span className="text-muted-light select-none" aria-hidden="true">
          ·
        </span>

        <a
          href={profile.cv.asset.url}
          download
          className="inline-flex items-center gap-1.5 transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-sm"
          aria-label="Unduh berkas CV Zidan Maulana"
        >
          <svg
            className="h-4 w-4 shrink-0 text-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
}

