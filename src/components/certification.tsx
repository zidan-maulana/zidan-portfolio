"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import type { Certification as CertificationType } from "@/lib/dummy-data";

interface CertificationProps {
  certifications: CertificationType[];
}

function CertificationCard({ cert }: { cert: CertificationType }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group rounded-[18px] bg-surface px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-200"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col min-w-0 flex-1">
          {/* Certification title */}
          <h3 className="font-display text-[17px] sm:text-[18px] font-medium text-text leading-snug">
            {cert.title}
          </h3>

          {/* Date and issuer */}
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

        {/* Action button */}
        {cert.url ? (
          <motion.a
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={false}
            animate={{
              width: isHovered ? 56 : 42,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`h-10 sm:h-11 rounded-[13px] flex items-center justify-center shrink-0 cursor-pointer overflow-hidden transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text motion-reduce:transform-none ${
              isHovered
                ? "bg-border/90 dark:bg-white/10 text-text"
                : "bg-btn-action-bg text-muted"
            }`}
            aria-label={`Buka sertifikat ${cert.title}`}
          >
            <ArrowRight size={20} weight="regular" className="shrink-0" aria-hidden="true" />
          </motion.a>
        ) : (
          <div
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-[13px] bg-btn-action-bg flex items-center justify-center shrink-0 text-muted/50"
            aria-hidden="true"
          >
            <ArrowRight size={20} weight="regular" className="shrink-0" />
          </div>
        )}
      </div>
    </div>
  );
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
      {/* Section header */}
      <div className="flex flex-col">
        <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-text">
          Certification
        </h2>
        <p className="mt-1 text-[14px] font-normal text-muted">
          Professional credentials, industry certifications, and technical proficiencies.
        </p>
      </div>

      {/* Certification cards */}
      <div className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
}
