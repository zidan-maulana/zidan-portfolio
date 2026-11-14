"use client";

import React from "react";
import { motion, type HTMLMotionProps, useReducedMotion } from "framer-motion";

interface HoverLiftProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  lift?: number;
  className?: string;
}

export function HoverLift({
  children,
  lift = -3,
  className = "",
  ...props
}: HoverLiftProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={shouldReduceMotion ? undefined : { y: lift }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface HoverLiftButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  lift?: number;
  className?: string;
}

export function HoverLiftButton({
  children,
  lift = -3,
  className = "",
  ...props
}: HoverLiftButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      whileHover={shouldReduceMotion ? undefined : { y: lift }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

interface HoverLiftAnchorProps extends HTMLMotionProps<"a"> {
  children: React.ReactNode;
  lift?: number;
  className?: string;
}

export function HoverLiftAnchor({
  children,
  lift = -3,
  className = "",
  ...props
}: HoverLiftAnchorProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      whileHover={shouldReduceMotion ? undefined : { y: lift }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}
