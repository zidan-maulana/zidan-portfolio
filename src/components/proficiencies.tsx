import Image from "next/image";
import { ProgressiveBlur } from "@/components/progressive-blur";
import type { SkillCard, TechToolItem } from "@/lib/dummy-data";

interface ProficienciesProps {
  skills: SkillCard[];
  tools: TechToolItem[];
}

export function Proficiencies({
  skills,
  tools,
}: ProficienciesProps) {
  if (!skills || skills.length === 0) {
    return null;
  }

  return (
    <section
      id="proficiencies"
      aria-label="Keahlian dan Penguasaan Alat"
      className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[25px] bg-nav-bg px-4 sm:px-6 md:px-7 pt-5 sm:pt-6 md:pt-7 pb-5 sm:pb-6 md:pb-7"
    >
      {/* Header Utama Section Sesuai Konsistensi Website */}
      <div className="flex flex-col">
        <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-text">
          Proficiencies
        </h2>
        <p className="mt-1 text-[14px] font-normal text-muted">
          Core engineering capabilities, technical competencies, and developer tooling.
        </p>
      </div>

      {/* Grid 2x2 Kartu Skills */}
      <div className="mt-5 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-[3px]">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="relative flex flex-col justify-between rounded-[18px] sm:rounded-[20px] bg-surface p-5 sm:p-6 md:p-7 min-h-[160px] sm:min-h-[175px] md:min-h-[185px] transition-colors duration-200 overflow-hidden"
          >
            {/* Angka Numerik dengan Sedikit Jarak Bawah */}
            <span className="font-display text-[30px] font-light text-muted-light/35 dark:text-muted/25 leading-none select-none mb-5 sm:mb-6">
              {skill.number}
            </span>

            {/* Headline Maksimal 1 Baris dan Subline Ringkas Maksimal 2 Baris */}
            <div className="mt-auto">
              <h3 className="font-display text-[16px] sm:text-[17.5px] font-medium text-text leading-snug line-clamp-1">
                {skill.title}
              </h3>
              <p className="mt-1.5 text-[13px] sm:text-[13.5px] leading-relaxed text-muted line-clamp-2">
                {skill.description}
              </p>
            </div>

            {/* Efek Progressive Backdrop Blur di Bagian Bawah Kartu Sesuai Referensi Gambar 2 */}
            <ProgressiveBlur
              direction="bottom"
              className="absolute inset-x-0 bottom-0 h-10 sm:h-12 rounded-b-[18px] sm:rounded-b-[20px]"
            />
          </div>
        ))}
      </div>

      {/* 1 Baris Logo Marquee: Monokrom secara default, Berwarna saat di-hover */}
      {tools && tools.length > 0 && (
        <div className="mt-2.5 sm:mt-3 overflow-hidden relative py-1">
          {/* Gradient Fade Mask Kiri dan Kanan pada Latar Sasis */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-nav-bg to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-nav-bg to-transparent z-10" />

          {/* Marquee Track 1 Baris */}
          <div className="flex w-max marquee-track hover:[animation-play-state:paused]">
            {/* Set 1 */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 pr-2 sm:pr-2.5">
              {tools.map((item) => (
                <div
                  key={`track1-${item.id}`}
                  title={item.name}
                  className="group w-12 h-12 sm:w-14 sm:h-14 rounded-[12px] sm:rounded-[14px] bg-surface flex items-center justify-center border border-border/40 shadow-xs hover:border-border transition-all select-none cursor-default shrink-0"
                >
                  <Image
                    src={`/tools/${item.icon}.svg`}
                    alt={item.name}
                    width={28}
                    height={28}
                    className={`w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${
                      item.icon === "express" || item.icon === "nextjs" ? "dark:invert" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Set 2 (Duplikasi untuk Seamless Loop) */}
            <div
              className="flex items-center gap-2 sm:gap-2.5 shrink-0 pr-2 sm:pr-2.5"
              aria-hidden="true"
            >
              {tools.map((item) => (
                <div
                  key={`track2-${item.id}`}
                  title={item.name}
                  className="group w-12 h-12 sm:w-14 sm:h-14 rounded-[12px] sm:rounded-[14px] bg-surface flex items-center justify-center border border-border/40 shadow-xs hover:border-border transition-all select-none cursor-default shrink-0"
                >
                  <Image
                    src={`/tools/${item.icon}.svg`}
                    alt={item.name}
                    width={28}
                    height={28}
                    className={`w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ${
                      item.icon === "express" || item.icon === "nextjs" ? "dark:invert" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
