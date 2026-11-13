"use client";

import { useState } from "react";
import Link from "next/link";
import { LiveClock } from "@/components/live-clock";
import { ThemeToggle } from "@/components/theme-toggle";

interface HeaderProps {
  timezone?: string;
  location?: string;
}

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Header({
  timezone = "Asia/Jakarta",
  location = "Jakarta",
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-3 z-50 w-full max-w-[1200px] mx-auto px-3 md:px-6">
      <div className="flex items-center justify-between rounded-full border border-border bg-page/85 px-4 py-2 backdrop-blur-md">
        {/* Sisi Kiri: Jam Live dan Kota */}
        <div className="flex items-center">
          <LiveClock timezone={timezone} location={location} />
        </div>

        {/* Sisi Kanan Desktop: Navigasi Inline dan Toggle Tema */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Navigasi Utama"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-md px-2 py-1"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Sisi Kanan Mobile: Toggle Tema dan Tombol Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileMenuOpen ? (
              // Ikon X (Tutup)
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
                width="20"
                height="20"
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

      {/* Menu Mobile: Kartu Dropdown */}
      {mobileMenuOpen && (
        <div className="mt-2 rounded-[20px] border border-border bg-surface p-4 shadow-sm md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Navigasi Mobile">
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
        </div>
      )}
    </header>
  );
}
