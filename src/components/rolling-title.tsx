"use client";

import { useState, useEffect } from "react";

interface RollingTitleProps {
  titles?: string[];
  intervalMs?: number;
}

const defaultTitles = [
  "Full Stack Developer",
  "AI Engineer",
  "UI/UX Designer",
];

export function RollingTitle({
  titles = defaultTitles,
  intervalMs = 2800,
}: RollingTitleProps) {
  const [index, setIndex] = useState(0);
  const [hasTransition, setHasTransition] = useState(true);

  // Daftar item dengan duplikasi item pertama di ujung untuk siklus roll tak terbatas
  const items = [...titles, titles[0]];
  const total = titles.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setHasTransition(true);
      setIndex((prev) => prev + 1);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs, total]);

  const handleTransitionEnd = () => {
    if (index >= total) {
      // Reset seketika ke item awal tanpa animasi transisi agar seamless
      setHasTransition(false);
      setIndex(0);
    }
  };

  return (
    <div
      className="relative h-[20px] overflow-hidden"
      aria-label="Spesialisasi profesi"
    >
      <div
        className={`flex flex-col ${
          hasTransition
            ? "transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            : ""
        } motion-reduce:transition-none`}
        style={{
          transform: `translateY(-${index * 20}px)`,
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {items.map((title, i) => (
          <div
            key={`${title}-${i}`}
            className="flex h-[20px] items-center text-[14px] font-medium leading-[20px] text-muted select-none"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}

