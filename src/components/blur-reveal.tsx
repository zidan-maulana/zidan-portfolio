"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

interface BlurRevealProps {
  text: string;
  className?: string;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block mr-[0.28em] text-text motion-reduce:!opacity-100"
    >
      {children}
    </motion.span>
  );
}

export function BlurReveal({ text, className = "" }: BlurRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = text.split(" ");
  const total = words.length;
  const step = 1 / total;

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i * step;
        const end = Math.min(1, start + step * 1.5);
        return (
          <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}
