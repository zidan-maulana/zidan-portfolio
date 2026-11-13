interface HeroGridProps {
  className?: string;
}

export function HeroGrid({ className = "" }: HeroGridProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 347 420"
      width="347"
      height="420"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        {/* 4 Gradasi Vertikal dengan userSpaceOnUse agar garis stroke 1px ter-render sempurna di browser */}
        <linearGradient
          id="hero-vgrid-1"
          gradientUnits="userSpaceOnUse"
          x1="190"
          y1="60"
          x2="190"
          y2="330"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="75%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="hero-vgrid-2"
          gradientUnits="userSpaceOnUse"
          x1="232"
          y1="65"
          x2="232"
          y2="360"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="75%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="hero-vgrid-3"
          gradientUnits="userSpaceOnUse"
          x1="274"
          y1="75"
          x2="274"
          y2="415"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="75%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="hero-vgrid-4"
          gradientUnits="userSpaceOnUse"
          x1="317"
          y1="155"
          x2="317"
          y2="420"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="75%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
        </linearGradient>

        {/* Gradasi Horizontal Panjang: Memudar halus di kedua ujung */}
        <linearGradient
          id="hero-hgrid-long"
          gradientUnits="userSpaceOnUse"
          x1="20"
          y1="180"
          x2="347"
          y2="180"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
          <stop offset="18%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="82%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
        </linearGradient>

        {/* Gradasi Horizontal Pendek: Terlihat di kiri lalu memudar ke arah kanan */}
        <linearGradient
          id="hero-hgrid-short"
          gradientUnits="userSpaceOnUse"
          x1="190"
          y1="270"
          x2="335"
          y2="270"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="65%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0" />
        </linearGradient>

        {/* Gradasi Kotak Aksen 1: Isian abu-abu muda dengan opacity maksimal sekitar 30% */}
        <linearGradient
          id="hero-box-fade-1"
          gradientUnits="userSpaceOnUse"
          x1="232"
          y1="136"
          x2="232"
          y2="180"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0.30" />
        </linearGradient>

        {/* Gradasi Kotak Aksen 2: Isian abu-abu muda dengan opacity maksimal sekitar 30% */}
        <linearGradient
          id="hero-box-fade-2"
          gradientUnits="userSpaceOnUse"
          x1="274"
          y1="270"
          x2="274"
          y2="314"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0.30" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke, #E5E7EB)" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* Kotak Aksen 1: Kolom B, tepat di atas garis horizontal pertama (42 x 44 px) */}
      <rect
        x="232"
        y="136"
        width="42"
        height="44"
        fill="url(#hero-box-fade-1)"
      />

      {/* Kotak Aksen 2: Kolom C, tepat di bawah garis horizontal kedua (43 x 44 px) */}
      <rect
        x="274"
        y="270"
        width="43"
        height="44"
        fill="url(#hero-box-fade-2)"
      />

      {/* 4 Garis Vertikal Asimetris di Sisi Kanan (Jarak 42-43 px) */}
      <line
        x1="190"
        y1="60"
        x2="190"
        y2="330"
        stroke="url(#hero-vgrid-1)"
        strokeWidth="1"
      />
      <line
        x1="232"
        y1="65"
        x2="232"
        y2="360"
        stroke="url(#hero-vgrid-2)"
        strokeWidth="1"
      />
      <line
        x1="274"
        y1="75"
        x2="274"
        y2="415"
        stroke="url(#hero-vgrid-3)"
        strokeWidth="1"
      />
      <line
        x1="317"
        y1="155"
        x2="317"
        y2="420"
        stroke="url(#hero-vgrid-4)"
        strokeWidth="1"
      />

      {/* 2 Garis Horizontal */}
      {/* Garis Horizontal 1: Garis panjang melintasi hampir seluruh lebar aset */}
      <line
        x1="20"
        y1="180"
        x2="347"
        y2="180"
        stroke="url(#hero-hgrid-long)"
        strokeWidth="1"
      />

      {/* Garis Horizontal 2: Garis lebih pendek melintasi kolom kanan */}
      <line
        x1="190"
        y1="270"
        x2="335"
        y2="270"
        stroke="url(#hero-hgrid-short)"
        strokeWidth="1"
      />
    </svg>
  );
}
