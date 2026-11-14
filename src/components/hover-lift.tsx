"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import React from "react";

interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  y?: number;
  scale?: number;
}

export function HoverLift({
  children,
  className = "",
  y = -2.5,
  scale = 1.02,
  ...props
}: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y, scale }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`inline-flex motion-reduce:transform-none ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface HoverLiftLinkProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
  className?: string;
  y?: number;
  scale?: number;
}

export function HoverLiftLink({
  children,
  className = "",
  y = -2.5,
  scale = 1.02,
  ...props
}: HoverLiftLinkProps) {
  return (
    <motion.a
      whileHover={{ y, scale }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`inline-flex motion-reduce:transform-none ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
