"use client";

import { useEffect, useRef, useState } from "react";

interface BlurRevealProps {
  text: string;
  className?: string;
}

export function BlurReveal({ text, className = "" }: BlurRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block transition-all duration-500 ease-out motion-reduce:!opacity-100 motion-reduce:!filter-none motion-reduce:!transform-none motion-reduce:!transition-none"
          style={{
            filter: isRevealed ? "blur(0px)" : "blur(8px)",
            opacity: isRevealed ? 1 : 0,
            transform: isRevealed ? "translateY(0)" : "translateY(4px)",
            transitionDelay: `${index * 20}ms`,
            marginRight: "0.28em",
          }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
