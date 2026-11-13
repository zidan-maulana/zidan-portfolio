"use client";

import { useState } from "react";
import Link from "next/link";
import { LiveClock } from "@/components/live-clock";
import { ThemeToggle } from "@/components/theme-toggle";

interface HeaderProps {
  timezone?: string;
  location?: string;
  socials?: Array<{ label: string; url: string }>;
}

const navItems = [
  { label: "Home", href: "#hero", active: true },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header({
  timezone = "Asia/Jakarta",
  location = "Jakarta",
  socials = [],
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  // Helper untuk mendapatkan ikon sosial
  const renderSocialIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("github")) {
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    }
    if (l.includes("linkedin")) {
      return (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    }
    if (l.includes("instagram")) {
      return (
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
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    }
    // Default globe
    return (
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
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    );
  };

  return (
    <header className="sticky top-4 z-50 w-full max-w-[1040px] mx-auto px-4">
      <div className="flex items-center justify-between rounded-[20px] border border-border bg-surface/90 px-5 py-3 backdrop-blur-md">
        {/* Sisi Kiri: Jam Live dan Kota */}
        <div className="flex items-center">
          <LiveClock timezone={timezone} location={location} />
        </div>

        {/* Bagian Tengah Desktop: Navigasi */}
        <nav
          className="hidden md:flex items-center gap-7"
          aria-label="Navigasi Utama"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[14px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-md px-1 py-0.5 ${
                item.active
                  ? "font-medium text-text"
                  : "font-normal text-muted hover:text-text"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Sisi Kanan Desktop: Ikon Sosial dan Toggle Tema */}
        <div className="hidden md:flex items-center gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-surface text-text transition-colors hover:bg-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
              aria-label={social.label}
              title={social.label}
            >
              {renderSocialIcon(social.label)}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Sisi Kanan Mobile: Toggle Tema dan Tombol Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-surface text-text transition-colors hover:bg-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileMenuOpen ? (
              // Ikon X (Tutup)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              // Ikon Hamburger
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile: Dropdown Card */}
      {mobileMenuOpen && (
        <div className="mt-2 rounded-[20px] border border-border bg-surface p-4 shadow-sm md:hidden">
          <nav className="flex flex-col gap-1.5" aria-label="Navigasi Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex h-11 items-center rounded-xl px-4 text-[15px] font-medium text-text transition-colors hover:bg-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {socials.length > 0 && (
            <div className="mt-3 pt-3 border-t border-border flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] border border-border bg-surface text-text transition-colors hover:bg-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
                  aria-label={social.label}
                  title={social.label}
                >
                  {renderSocialIcon(social.label)}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
