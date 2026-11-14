"use client";

import { HoverLiftAnchor } from "@/components/hover-lift";
import type { Certification as CertificationType } from "@/lib/dummy-data";

interface CertificationProps {
  certifications: CertificationType[];
}

export function Certification({ certifications }: CertificationProps) {
  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <section
      id="certification"
      aria-label="Sertifikasi"
      className="relative w-full overflow-hidden rounded-[24px] sm:rounded-[25px] bg-nav-bg px-4 sm:px-6 md:px-7 pt-5 sm:pt-6 md:pt-7 pb-5 sm:pb-6 md:pb-7"
    >
      {/* Header Section Sesuai Konsistensi Website (Gambar 1) */}
      <div className="flex flex-col">
        <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-text">
          Certification
        </h2>
        <p className="mt-1 text-[14px] font-normal text-muted">
          Professional credentials, industry certifications, and technical proficiencies.
        </p>
      </div>

      {/* Daftar Kartu Sertifikasi Sesuai Komposisi Referensi (Tanpa Stroke, Baris Panah) */}
      <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="rounded-[18px] bg-surface px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-200"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col min-w-0">
                {/* Judul Sertifikasi */}
                <h3 className="font-display text-[17px] sm:text-[18px] font-medium text-text leading-snug">
                  {cert.title}
                </h3>

                {/* Tanggal & Penerbit Sertifikasi */}
                <div className="mt-2 sm:mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] sm:text-[13px] text-muted">
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
                    <span>{cert.date}</span>
                  </div>

                  {cert.issuer && (
                    <>
                      <span className="text-muted-light select-none" aria-hidden="true">
                        ·
                      </span>
                      <span>{cert.issuer}</span>
                    </>
                  )}
                </div>
              </div>

              {/* Tombol Aksi / Tautan Sertifikat dengan Ikon Panah Sesuai Referensi (Hover Lift Framer Motion) */}
              {cert.url ? (
                <HoverLiftAnchor
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  lift={-3}
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-[12px] bg-nav-bg flex items-center justify-center shrink-0 text-muted transition-colors duration-200 hover:bg-btn-secondary-hover hover:text-text hover:shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text cursor-pointer"
                  aria-label={`Buka sertifikat ${cert.title}`}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </HoverLiftAnchor>
              ) : (
                <div
                  className="h-10 w-10 sm:h-11 sm:w-11 rounded-[12px] bg-nav-bg flex items-center justify-center shrink-0 text-muted/50"
                  aria-hidden="true"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
