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
      className={`pointer-events-none select-none text-hero-grid-stroke ${className}`}
    >
      <defs>
        {/* Gradasi Vertikal: Transparan di ujung atas dan bawah, terlihat di tengah */}
        <linearGradient id="hero-vgrid-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="20%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="75%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Gradasi Horizontal Panjang: Memudar halus di kedua ujung */}
        <linearGradient id="hero-hgrid-long" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="18%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="82%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Gradasi Horizontal Pendek: Terlihat di kiri lalu memudar ke arah kanan */}
        <linearGradient id="hero-hgrid-short" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="60%" stopColor="currentColor" stopOpacity="0.85" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>

        {/* Gradasi Kotak Aksen 1: Isian abu-abu muda dengan opacity maksimal sekitar 30% */}
        <linearGradient id="hero-box-fade-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.06" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.30" />
        </linearGradient>

        {/* Gradasi Kotak Aksen 2: Isian abu-abu muda dengan opacity maksimal sekitar 30% */}
        <linearGradient id="hero-box-fade-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.30" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
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
      {/* Garis Vertikal 1: x = 190 */}
      <line
        x1="190"
        y1="60"
        x2="190"
        y2="330"
        stroke="url(#hero-vgrid-fade)"
        strokeWidth="1"
      />

      {/* Garis Vertikal 2: x = 232 (190 + 42) */}
      <line
        x1="232"
        y1="65"
        x2="232"
        y2="360"
        stroke="url(#hero-vgrid-fade)"
        strokeWidth="1"
      />

      {/* Garis Vertikal 3: x = 274 (232 + 42) */}
      <line
        x1="274"
        y1="75"
        x2="274"
        y2="415"
        stroke="url(#hero-vgrid-fade)"
        strokeWidth="1"
      />

      {/* Garis Vertikal 4: x = 317 (274 + 43) */}
      <line
        x1="317"
        y1="155"
        x2="317"
        y2="420"
        stroke="url(#hero-vgrid-fade)"
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
