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
        {/* Vertical gradients */}
        <linearGradient
          id="hero-vgrid-1"
          gradientUnits="userSpaceOnUse"
          x1="190"
          y1="60"
          x2="190"
          y2="320"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="65%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="hero-vgrid-2"
          gradientUnits="userSpaceOnUse"
          x1="232"
          y1="65"
          x2="232"
          y2="345"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="65%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="hero-vgrid-3"
          gradientUnits="userSpaceOnUse"
          x1="274"
          y1="75"
          x2="274"
          y2="362"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
          <stop offset="20%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="60%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="hero-vgrid-4"
          gradientUnits="userSpaceOnUse"
          x1="317"
          y1="155"
          x2="317"
          y2="370"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="60%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
        </linearGradient>

        {/* Horizontal gradients */}
        <linearGradient
          id="hero-hgrid-long"
          gradientUnits="userSpaceOnUse"
          x1="55"
          y1="180"
          x2="347"
          y2="180"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
          <stop offset="25%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="85%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id="hero-hgrid-short"
          gradientUnits="userSpaceOnUse"
          x1="190"
          y1="270"
          x2="335"
          y2="270"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="65%" stopColor="var(--hero-grid-stroke)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke)" stopOpacity="0" />
        </linearGradient>

        {/* Accent box gradients */}
        <linearGradient
          id="hero-box-fade-1"
          gradientUnits="userSpaceOnUse"
          x1="232"
          y1="136"
          x2="232"
          y2="180"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke)" stopOpacity="0.30" />
        </linearGradient>

        <linearGradient
          id="hero-box-fade-2"
          gradientUnits="userSpaceOnUse"
          x1="274"
          y1="270"
          x2="274"
          y2="314"
        >
          <stop offset="0%" stopColor="var(--hero-grid-stroke)" stopOpacity="0.30" />
          <stop offset="100%" stopColor="var(--hero-grid-stroke)" stopOpacity="0.06" />
        </linearGradient>
      </defs>

      {/* Accent boxes */}
      <rect
        x="232"
        y="136"
        width="42"
        height="44"
        fill="url(#hero-box-fade-1)"
      />

      <rect
        x="274"
        y="270"
        width="43"
        height="44"
        fill="url(#hero-box-fade-2)"
      />

      {/* Vertical grid lines */}
      <line
        x1="190"
        y1="60"
        x2="190"
        y2="320"
        stroke="url(#hero-vgrid-1)"
        strokeWidth="1"
      />
      <line
        x1="232"
        y1="65"
        x2="232"
        y2="345"
        stroke="url(#hero-vgrid-2)"
        strokeWidth="1"
      />
      <line
        x1="274"
        y1="75"
        x2="274"
        y2="362"
        stroke="url(#hero-vgrid-3)"
        strokeWidth="1"
      />
      <line
        x1="317"
        y1="155"
        x2="317"
        y2="370"
        stroke="url(#hero-vgrid-4)"
        strokeWidth="1"
      />

      {/* Horizontal grid lines */}
      <line
        x1="55"
        y1="180"
        x2="347"
        y2="180"
        stroke="url(#hero-hgrid-long)"
        strokeWidth="1"
      />

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
