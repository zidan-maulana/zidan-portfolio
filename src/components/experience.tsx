import Image from "next/image";
import type { Experience as ExperienceType } from "@/lib/dummy-data";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section
      id="experience"
      aria-label="Pengalaman Kerja"
      className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[25px] bg-nav-bg px-4 sm:px-6 md:px-7 pt-5 sm:pt-6 md:pt-7 pb-5 sm:pb-6 md:pb-7"
    >
      {/* Header Section Sesuai Konsistensi Website (Gambar 1) */}
      <div className="flex flex-col">
        <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-text">
          Experience
        </h2>
        <p className="mt-1 text-[14px] font-normal text-muted">
          A timeline of my professional roles, engineering contributions, and career growth.
        </p>
      </div>

      {/* Daftar Kartu Pengalaman Sesuai Komposisi Referensi Terbaru (Tanpa Stroke, Teks Rata Kiri) */}
      <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="rounded-[18px] bg-surface p-5 sm:p-6 transition-colors duration-200"
          >
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Kolom Kiri: Logo Organisasi (Tanpa Stroke) */}
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-[12px] sm:rounded-[14px]">
                <Image
                  src={exp.logo.asset.url}
                  alt={exp.logo.alt}
                  fill
                  unoptimized
                  sizes="48px"
                  className="object-cover"
                />
              </div>

              {/* Kolom Kanan: Semua Teks Rata Kiri Konsisten Sesuai Referensi */}
              <div className="flex flex-col flex-1 min-w-0">
                {/* Nama Perusahaan / Organisasi */}
                <span className="text-[13px] sm:text-[13.5px] font-normal text-muted leading-tight">
                  {exp.organization}
                </span>

                {/* Jabatan / Role */}
                <h3 className="font-display text-[17px] sm:text-[18px] font-medium text-text leading-snug mt-1">
                  {exp.role}
                </h3>

                {/* Deskripsi Tanggung Jawab dan Kontribusi */}
                <p className="mt-3.5 sm:mt-4 text-[13.5px] sm:text-[14px] font-normal text-muted leading-relaxed">
                  {exp.description}
                </p>

                {/* Baris Metadata: Periode dan Lokasi */}
                <div className="mt-4 sm:mt-4.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] sm:text-[13px] text-muted">
                  <div className="inline-flex items-center gap-1.5">
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-muted"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span>
                      {exp.startDate} - {exp.endDate || "Now"}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5">
                    <svg
                      className="h-3.5 w-3.5 shrink-0 text-muted"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
