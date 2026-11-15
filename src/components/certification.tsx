"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, X } from "@phosphor-icons/react";
import type { Certification as CertificationType } from "@/lib/dummy-data";

interface CertificationProps {
  certifications: CertificationType[];
}

interface CertificationCardProps {
  cert: CertificationType;
  onOpenModal: (cert: CertificationType) => void;
}

function CertificationCard({ cert, onOpenModal }: CertificationCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hasImage = Boolean(cert.image?.asset?.url);

  const handleClick = () => {
    if (hasImage) {
      onOpenModal(cert);
    }
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`group rounded-[18px] bg-surface px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-200 ${
        hasImage ? "cursor-pointer hover:bg-surface/80" : ""
      }`}
      role={hasImage ? "button" : undefined}
      tabIndex={hasImage ? 0 : undefined}
      onKeyDown={(e) => {
        if (hasImage && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onOpenModal(cert);
        }
      }}
      aria-label={hasImage ? `Lihat preview sertifikat ${cert.title}` : undefined}
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
        {hasImage ? (
          <motion.button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(cert);
            }}
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
            aria-label={`Buka preview foto sertifikat ${cert.title}`}
          >
            <ArrowRight size={20} weight="regular" className="shrink-0" aria-hidden="true" />
          </motion.button>
        ) : cert.url ? (
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
            aria-label={`Buka tautan sertifikat ${cert.title}`}
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
  const [selectedCert, setSelectedCert] = useState<CertificationType | null>(null);

  // Aksesibilitas: menutup modal dengan tombol Escape dan mengunci scroll body saat modal terbuka
  useEffect(() => {
    if (!selectedCert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedCert]);

  if (!certifications || certifications.length === 0) {
    return null;
  }

  return (
    <>
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
            <CertificationCard
              key={cert.id}
              cert={cert}
              onOpenModal={(c) => setSelectedCert(c)}
            />
          ))}
        </div>
      </section>

      {/* Modal Preview Sertifikat */}
      <AnimatePresence>
        {selectedCert && selectedCert.image?.asset?.url && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-modal-title"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden rounded-[24px] bg-surface border border-border shadow-2xl"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6 border-b border-border bg-surface shrink-0">
                <div className="flex flex-col min-w-0">
                  <h3
                    id="cert-modal-title"
                    className="font-display text-[18px] sm:text-[20px] font-medium text-text leading-snug truncate"
                  >
                    {selectedCert.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-[13px] text-muted">
                    <span>{selectedCert.issuer}</span>
                    <span className="text-muted-light select-none" aria-hidden="true">
                      ·
                    </span>
                    <span>{selectedCert.date}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="h-9 w-9 rounded-[12px] bg-nav-bg text-text hover:bg-border transition-colors flex items-center justify-center shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
                  aria-label="Tutup preview sertifikat"
                >
                  <X size={18} weight="bold" />
                </button>
              </div>

              {/* Modal image preview container */}
              <div className="relative w-full max-h-[64vh] overflow-y-auto p-4 sm:p-6 bg-nav-bg/60 flex items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-[16px] border border-border/80 bg-surface shadow-sm flex items-center justify-center">
                  <Image
                    src={selectedCert.image.asset.url}
                    alt={selectedCert.image.alt || selectedCert.title}
                    width={1400}
                    height={950}
                    unoptimized
                    priority
                    className="w-full h-auto max-h-[58vh] object-contain rounded-[16px]"
                  />
                </div>
              </div>

              {/* Modal footer with verification link if available */}
              {selectedCert.url && (
                <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-4 border-t border-border bg-surface shrink-0">
                  <span className="text-[13px] text-muted hidden sm:inline">
                    Kredensial resmi terverifikasi
                  </span>
                  <a
                    href={selectedCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-[38px] sm:h-[40px] items-center gap-2 rounded-[12px] bg-text text-page px-5 font-display text-[13px] sm:text-[13.5px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text ml-auto"
                  >
                    <span>Buka Tautan Kredensial</span>
                    <ArrowUpRight size={16} weight="bold" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
