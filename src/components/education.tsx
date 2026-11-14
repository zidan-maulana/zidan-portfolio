import type { Education as EducationType } from "@/lib/dummy-data";

interface EducationProps {
  educations: EducationType[];
}

export function Education({ educations }: EducationProps) {
  if (!educations || educations.length === 0) {
    return null;
  }

  return (
    <section
      id="education"
      aria-label="Pendidikan"
      className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[25px] bg-nav-bg px-4 sm:px-6 md:px-7 py-6 sm:py-8 md:py-[44px]"
    >
      {/* Header Section Sesuai Konsistensi Website (Gambar 1) */}
      <div className="flex flex-col">
        <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-text">
          Education
        </h2>
        <p className="mt-1 text-[14px] font-normal text-muted">
          Academic background, formal degree, and foundational computer science training.
        </p>
      </div>

      {/* Daftar Kartu Pendidikan Sesuai Komposisi Referensi (Tanpa Stroke, Teks Rata Kiri) */}
      <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="rounded-[18px] bg-surface p-5 sm:p-6 transition-colors duration-200"
          >
            <div className="flex flex-col">
              {/* Nama Institusi Pendidikan */}
              <span className="text-[13px] sm:text-[13.5px] font-normal text-muted leading-tight">
                {edu.institution}
              </span>

              {/* Gelar / Program Studi */}
              <h3 className="font-display text-[17px] sm:text-[18px] font-medium text-text leading-snug mt-1">
                {edu.degree}
              </h3>

              {/* Deskripsi Fokus Pembelajaran */}
              <p className="mt-3.5 sm:mt-4 text-[13.5px] sm:text-[14px] font-normal text-muted leading-relaxed">
                {edu.description}
              </p>

              {/* Baris Metadata: Periode dan Lokasi */}
              <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] sm:text-[13px] text-muted">
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
                    {edu.startDate} - {edu.endDate || "Present"}
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
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
