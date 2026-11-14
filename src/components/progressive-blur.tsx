import React from "react";

interface ProgressiveBlurProps {
  direction?: "bottom" | "top" | "left" | "right";
  className?: string;
}

// 8 lapisan blur eksponensial sesuai spesifikasi teknis
const BLUR_LAYERS = [
  {
    blur: "0.3125px",
    mask: "rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%",
  },
  {
    blur: "0.625px",
    mask: "rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%",
  },
  {
    blur: "1.25px",
    mask: "rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%",
  },
  {
    blur: "2.5px",
    mask: "rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%",
  },
  {
    blur: "5px",
    mask: "rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%",
  },
  {
    blur: "10px",
    mask: "rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%",
  },
  {
    blur: "20px",
    mask: "rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%",
  },
  {
    blur: "40px",
    mask: "rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%",
  },
];

export function ProgressiveBlur({
  direction = "bottom",
  className = "",
}: ProgressiveBlurProps) {
  return (
    <div
      className={`pointer-events-none relative ${className}`}
      aria-hidden="true"
    >
      {BLUR_LAYERS.map((layer, index) => {
        const gradient = `linear-gradient(to ${direction}, ${layer.mask})`;
        return (
          <div
            key={index}
            className="absolute inset-0 pointer-events-none"
            style={{
              backdropFilter: `blur(${layer.blur})`,
              WebkitBackdropFilter: `blur(${layer.blur})`,
              maskImage: gradient,
              WebkitMaskImage: gradient,
            }}
          />
        );
      })}
    </div>
  );
}
