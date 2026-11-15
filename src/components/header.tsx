"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import { motion, AnimatePresence } from "motion/react";
import { LiveClock } from "@/components/live-clock";
import { ThemeToggle } from "@/components/theme-toggle";

interface HeaderProps {
  timezone?: string;
  location?: string;
  socials?: Array<{ label: string; url: string }>;
}

const navItems = [
  { label: "Home", href: "#home" },
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
  const router = useRouter();
  const lenis = useLenis();
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  // Aksesibilitas: Menutup menu ketika tombol Escape ditekan
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Menutup menu jika klik di luar area header
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Handler navigasi anchor dengan Lenis smooth scroll
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        if (lenis) {
          lenis.scrollTo(target as HTMLElement, { offset: -80 });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/${href}`);
      }
      closeMenu();
    }
  };

  // Helper untuk rendering ikon sosial
  const renderSocialIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("github")) {
      return (
        <svg
          className="h-3.5 w-3.5 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    }
    if (l.includes("linkedin")) {
      return (
        <svg
          className="h-3.5 w-3.5 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    }
    if (l.includes("instagram")) {
      return (
        <svg
          className="h-3.5 w-3.5"
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
    if (l.includes("x") || l.includes("twitter")) {
      return (
        <svg
          className="h-3.5 w-3.5 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    }
    return (
      <svg
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  };

  return (
    <header ref={headerRef} className="relative w-full">
      {/* Background backdrop click handler for mobile overlay */}
      {mobileMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 z-[-1] pointer-events-auto sm:hidden"
          aria-hidden="true"
        />
      )}

      <nav
        className="w-full rounded-[24px] bg-nav-bg/85 dark:bg-nav-bg/90 backdrop-blur-md transition-colors duration-300 overflow-hidden"
        aria-label="Navigasi Utama"
      >
        {/* Top bar row */}
        <div className="flex h-[56px] sm:h-[60px] w-full items-center justify-between px-5 sm:px-6">
          {/* Left items: theme toggle and digital clock */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 whitespace-nowrap">
            <ThemeToggle />
            <LiveClock timezone={timezone} location={location} />
          </div>

          {/* Center navigation */}
          <div
            className="hidden md:flex items-center gap-[10px] shrink-0"
            role="menubar"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                role="menuitem"
                className="group relative inline-block rounded-md px-1 py-0.5 text-[13.5px] font-medium text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text cursor-pointer"
              >
                <span className="relative block overflow-hidden leading-tight">
                  <span className="block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full motion-reduce:transition-none">
                    {item.label}
                  </span>
                  <span
                    className="absolute inset-0 block translate-y-full text-muted transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 motion-reduce:transition-none"
                    aria-hidden="true"
                  >
                    {item.label}
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Right items: social links */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[34px] w-[34px] cursor-pointer items-center justify-center rounded-[12px] border border-btn-secondary-border bg-surface text-text shadow-btn-icon transition-all duration-200 ease hover:bg-btn-secondary-hover hover:shadow-btn-icon-hover active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text shrink-0"
                aria-label={`Buka profil ${social.label}`}
                title={social.label}
              >
                {renderSocialIcon(social.label)}
              </a>
            ))}
          </div>

          {/* Mobile hamburger / close button with smooth line-to-X animation */}
          <div className="flex sm:hidden items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex p-1.5 cursor-pointer items-center justify-center text-text hover:text-muted transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
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
                {/* Top line morphs to \ of X */}
                <motion.path
                  initial={false}
                  animate={{
                    d: mobileMenuOpen ? "M 6 6 L 18 18" : "M 4 6 L 20 6",
                  }}
                  transition={{
                    duration: 0.52,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                {/* Middle line fades and collapses */}
                <motion.path
                  initial={false}
                  animate={{
                    d: mobileMenuOpen ? "M 12 12 L 12 12" : "M 4 12 L 20 12",
                    opacity: mobileMenuOpen ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                {/* Bottom line morphs to / of X */}
                <motion.path
                  initial={false}
                  animate={{
                    d: mobileMenuOpen ? "M 6 18 L 18 6" : "M 4 18 L 20 18",
                  }}
                  transition={{
                    duration: 0.52,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown shape */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-dropdown"
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: "auto",
                opacity: 1,
                transition: {
                  height: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.42, delay: 0.06, ease: [0.22, 1, 0.36, 1] },
                },
              }}
              exit={{
                height: 0,
                opacity: 0,
                transition: {
                  height: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                  opacity: { duration: 0.28, ease: "easeOut" },
                },
              }}
              className="overflow-hidden sm:hidden"
            >
              <div className="flex flex-col items-center px-5 pt-6 pb-7">
                {/* Centered navigation items */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center gap-4 text-center"
                >
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="font-display text-[18px] font-medium text-text hover:text-muted transition-colors py-1 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-md"
                    >
                      {item.label}
                    </a>
                  ))}
                </motion.div>

                {/* Centered social links at bottom */}
                {socials.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.45, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-8 flex items-center justify-center gap-2.5"
                  >
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[12px] border border-btn-secondary-border bg-surface text-text shadow-btn-icon transition-all duration-200 ease hover:bg-btn-secondary-hover hover:shadow-btn-icon-hover active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
                        aria-label={`Buka profil ${social.label}`}
                        title={social.label}
                      >
                        {renderSocialIcon(social.label)}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
