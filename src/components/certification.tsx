"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import type { Certification as CertificationType } from "@/lib/dummy-data";

interface CertificationProps {
  certifications: CertificationType[];
}

function CertificationCard({ cert }: { cert: CertificationType }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={`/certifications/${cert.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group rounded-[18px] bg-surface px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-200 cursor-pointer block hover:bg-surface/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
      aria-label={`Buka halaman sertifikat ${cert.title}`}
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
        <motion.div
          initial={false}
          animate={{
            width: isHovered ? 56 : 42,
          }}
          transition={{
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`h-10 sm:h-11 rounded-[13px] flex items-center justify-center shrink-0 overflow-hidden transition-colors duration-200 motion-reduce:transform-none ${
            isHovered
              ? "bg-border/90 dark:bg-white/10 text-text"
              : "bg-btn-action-bg text-muted"
          }`}
          aria-hidden="true"
        >
          <ArrowRight size={20} weight="regular" className="shrink-0" />
        </motion.div>
      </div>
    </Link>
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
