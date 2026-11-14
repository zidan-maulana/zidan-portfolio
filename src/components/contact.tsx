"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";
import type { Profile } from "@/lib/dummy-data";

interface ContactProps {
  profile: Profile;
}

interface ContactItem {
  id: string;
  label: string;
  value: string;
  href: string;
  isExternal?: boolean;
}

function ContactRow({ item }: { item: ContactItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={item.href}
      target={item.isExternal ? "_blank" : undefined}
      rel={item.isExternal ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex items-center justify-between gap-3 sm:gap-4 rounded-[16px] sm:rounded-[18px] border border-border/70 dark:border-border/40 bg-surface px-4 py-3 sm:px-5 sm:py-3.5 transition-all duration-200 hover:border-text/30 hover:bg-nav-bg/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
      aria-label={`${item.label}: ${item.value}`}
    >
      {/* Label di Sisi Kiri */}
      <span className="text-[14px] sm:text-[15px] font-normal text-muted group-hover:text-text transition-colors shrink-0">
        {item.label}
      </span>

      {/* Nilai / Handle dan Tombol Panah di Sisi Kanan */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <span className="text-[13.5px] sm:text-[15px] font-medium text-text truncate">
          {item.value}
        </span>

        {/* Tombol Aksi: Memanjang Halus ke Kiri saat Baris di-hover */}
        <motion.div
          initial={false}
          animate={{
            width: isHovered ? 56 : 42,
          }}
          transition={{
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`h-10 sm:h-11 rounded-[13px] flex items-center justify-center shrink-0 overflow-hidden transition-colors duration-200 ${
            isHovered
              ? "bg-border/90 dark:bg-white/10 text-text"
              : "bg-nav-bg text-muted"
          }`}
          aria-hidden="true"
        >
          <ArrowRight size={20} weight="regular" className="shrink-0" />
        </motion.div>
      </div>
    </a>
  );
}

export function Contact({ profile }: ContactProps) {
  const contactItems: ContactItem[] = [
    {
      id: "email",
      label: "E-mail",
      value: profile.email || "zidan@example.com",
      href: `mailto:${profile.email || "zidan@example.com"}`,
      isExternal: false,
    },
    ...(profile.phone
      ? [
          {
            id: "phone",
            label: "Phone",
            value: profile.phone,
            href: `tel:${profile.phone.replace(/\s+/g, "")}`,
            isExternal: false,
          },
        ]
      : []),
    ...profile.socials.map((social) => {
      // Menentukan handle ringkas dari data profil atau URL
      let handle = social.handle;
      if (!handle) {
        if (social.label.toLowerCase() === "linkedin") {
          handle = "/in/zidanmaulana";
        } else if (social.label.toLowerCase() === "github") {
          handle = "zidanmaulana";
        } else if (social.label.toLowerCase() === "instagram") {
          handle = "@zidanmaulana";
        } else {
          handle = social.url.replace(/^https?:\/\/(www\.)?/, "");
        }
      }

      return {
        id: social.label.toLowerCase(),
        label: social.label,
        value: handle,
        href: social.url,
        isExternal: true,
      };
    }),
  ];

  return (
    <section
      id="contact"
      aria-label="Kontak dan Informasi Terhubung"
      className="relative w-full overflow-hidden rounded-[22px] sm:rounded-[23px] bg-surface p-5 sm:p-6 md:p-8 scroll-mt-24"
    >
      {/* Header Section Kontak Sesuai Style Kita */}
      <div className="flex flex-col mb-5 sm:mb-6">
        <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-text">
          Contact
        </h2>
        <p className="mt-1 text-[14px] font-normal text-muted">
          Get in touch for collaborations, project inquiries, or opportunities.
        </p>
      </div>

      {/* Daftar Baris Kontak Mengikuti Referensi Gambar 2 */}
      <div className="flex flex-col gap-2.5 sm:gap-3">
        {contactItems.map((item) => (
          <ContactRow key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
