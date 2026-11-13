export interface Profile {
  name: string;
  role: string;
  roles?: string[];
  avatar: {
    asset: {
      url: string;
    };
    alt: string;
  };
  headline: string;
  shortBio: string;
  aboutText?: string;
  phone?: string;
  overview?: Array<{
    _type: string;
    children: Array<{ _type: string; text: string }>;
  }>;
  location: string;
  timezone: string;
  availability: string;
  showAvailability: boolean;
  cv: {
    asset: {
      url: string;
    };
  };
  email: string;
  bookingUrl: string;
  projectsUrl: string;
  socials: Array<{
    label: string;
    url: string;
  }>;
}

export interface BrandLogo {
  id: string;
  name: string;
  svgPath: string;
  svgViewBox: string;
}

export const dummyBrands: BrandLogo[] = [
  {
    id: "brand-1",
    name: "Logoipsum 1",
    svgViewBox: "0 0 140 32",
    svgPath:
      "M16 7c-4.97 0-9 4.03-9 9s4.03 9 9 9c2.8 0 5.29-1.28 6.94-3.29l-3.32-2.12C18.6 20.67 17.38 21.2 16 21.2c-2.87 0-5.2-2.33-5.2-5.2s2.33-5.2 5.2-5.2c1.38 0 2.6.53 3.62 1.41l3.32-2.12C21.29 8.28 18.8 7 16 7zm16 1.8h3.8v14.4H32V8.8zm14.6 0c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2 7.8-3.3 7.8-7.2-3.5-7.2-7.8-7.2zm0 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm14.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v2.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm18.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v6.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm13.8-10.8h3.8v14.4h-3.8V8.8zm14.6 0c-2.6 0-4.6 1.1-5.6 2.8V8.8h-3.6v14.4h3.8v-6.9c0-2.2 1.5-3.7 3.6-3.7 2 0 3.2 1.3 3.2 3.4v7.2h3.8v-7.8c0-4-2.3-6.6-5.2-6.6z",
  },
  {
    id: "brand-2",
    name: "Logoipsum 2",
    svgViewBox: "0 0 140 32",
    svgPath:
      "M6 6h7v7H6V6zm13 0h7v7h-7V6zm-13 13h7v7H6v-7zm13 0h7v7h-7v-7zm13-10.2h3.8v14.4H32V8.8zm14.6 0c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2 7.8-3.3 7.8-7.2-3.5-7.2-7.8-7.2zm0 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm14.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v2.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm18.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v6.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm13.8-10.8h3.8v14.4h-3.8V8.8zm14.6 0c-2.6 0-4.6 1.1-5.6 2.8V8.8h-3.6v14.4h3.8v-6.9c0-2.2 1.5-3.7 3.6-3.7 2 0 3.2 1.3 3.2 3.4v7.2h3.8v-7.8c0-4-2.3-6.6-5.2-6.6z",
  },
  {
    id: "brand-3",
    name: "Logoipsum 3",
    svgViewBox: "0 0 140 32",
    svgPath:
      "M16 6l3.2 6.5 7.1 1-5.1 5 1.2 7.1-6.4-3.4-6.4 3.4 1.2-7.1-5.1-5 7.1-1L16 6zm16 2.8h3.8v14.4H32V8.8zm14.6 0c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2 7.8-3.3 7.8-7.2-3.5-7.2-7.8-7.2zm0 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm14.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v2.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm18.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v6.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm13.8-10.8h3.8v14.4h-3.8V8.8zm14.6 0c-2.6 0-4.6 1.1-5.6 2.8V8.8h-3.6v14.4h3.8v-6.9c0-2.2 1.5-3.7 3.6-3.7 2 0 3.2 1.3 3.2 3.4v7.2h3.8v-7.8c0-4-2.3-6.6-5.2-6.6z",
  },
  {
    id: "brand-4",
    name: "Logoipsum 4",
    svgViewBox: "0 0 140 32",
    svgPath:
      "M9 16c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7-7-3.13-7-7zm3 0c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4zm20-7.2h3.8v14.4H32V8.8zm14.6 0c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2 7.8-3.3 7.8-7.2-3.5-7.2-7.8-7.2zm0 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm14.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v2.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm18.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v6.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm13.8-10.8h3.8v14.4h-3.8V8.8zm14.6 0c-2.6 0-4.6 1.1-5.6 2.8V8.8h-3.6v14.4h3.8v-6.9c0-2.2 1.5-3.7 3.6-3.7 2 0 3.2 1.3 3.2 3.4v7.2h3.8v-7.8c0-4-2.3-6.6-5.2-6.6z",
  },
  {
    id: "brand-5",
    name: "Logoipsum 5",
    svgViewBox: "0 0 140 32",
    svgPath:
      "M16 6a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10H16V6zm16 2.8h3.8v14.4H32V8.8zm14.6 0c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2 7.8-3.3 7.8-7.2-3.5-7.2-7.8-7.2zm0 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm14.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v2.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm18.4-10.8c-4.3 0-7.8 3.3-7.8 7.2s3.5 7.2 7.8 7.2c2.2 0 4.1-.9 5.4-2.3v6.1h3.6V8.8h-3.6v2.1c-1.3-1.4-3.2-2.1-5.4-2.1zm.6 10.8c-2.3 0-4-1.6-4-3.6s1.7-3.6 4-3.6 4 1.6 4 3.6-1.7 3.6-4 3.6zm13.8-10.8h3.8v14.4h-3.8V8.8zm14.6 0c-2.6 0-4.6 1.1-5.6 2.8V8.8h-3.6v14.4h3.8v-6.9c0-2.2 1.5-3.7 3.6-3.7 2 0 3.2 1.3 3.2 3.4v7.2h3.8v-7.8c0-4-2.3-6.6-5.2-6.6z",
  },
];

export const dummyProfile: Profile = {
  name: "Zidan Maulana",
  role: "Full Stack Developer",
  roles: [
    "Full Stack Developer",
    "AI Engineer",
    "UI/UX Designer",
  ],
  avatar: {
    asset: {
      url: "/profile-picture.jpeg",
    },
    alt: "Foto profil Zidan Maulana",
  },
  headline:
    "I build modern, high-performance digital experiences that drive real impact.",
  shortBio:
    "Informatics student and freelance developer crafting digital solutions that engage users and deliver real value.",
  aboutText:
    "Hey, I'm Zidan Maulana, an Informatics student and freelance developer crafting scalable web applications, modern frontend architecture, and intuitive digital experiences that deliver real impact.",
  location: "Jakarta",
  timezone: "Asia/Jakarta",
  availability: "Open for new projects",
  showAvailability: false,
  cv: {
    asset: {
      url: "/dummy-cv.pdf",
    },
  },
  email: "zidan@example.com",
  phone: "+62 812 3456 7890",
  bookingUrl: "mailto:zidan@example.com",
  projectsUrl: "#projects",
  socials: [
    { label: "GitHub", url: "https://github.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Instagram", url: "https://instagram.com" },
  ],
};

export interface Project {
  id: string;
  title: string;
  slug: {
    current: string;
  };
  category: string;
  year?: string;
  cover: {
    asset: {
      url: string;
    };
    alt: string;
  };
  summary: string;
  body?: string;
  stack?: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  order?: number;
}

export const dummyProjects: Project[] = [
  {
    id: "project-1",
    title: "Orbit - SaaS Analytics Platform",
    slug: {
      current: "orbit-saas-platform",
    },
    category: "Full Stack / SaaS",
    year: "2026",
    cover: {
      asset: {
        url: "/projects/orbit.svg",
      },
      alt: "Orbit SaaS Analytics Platform Interface Mockup",
    },
    summary:
      "Real-time web analytics and telemetry platform with high-throughput event ingestion and custom dashboard visualization.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
    liveUrl: "https://example.com/orbit",
    repoUrl: "https://github.com/example/orbit",
    featured: true,
    order: 1,
  },
  {
    id: "project-2",
    title: "Nova AI - Design System Engine",
    slug: {
      current: "nova-ai-design-system",
    },
    category: "AI & UI/UX Tooling",
    year: "2025",
    cover: {
      asset: {
        url: "/projects/nova.svg",
      },
      alt: "Nova AI Design System Engine Card Mockup",
    },
    summary:
      "Intelligent design token extractor and accessible UI component generator powered by modern generative AI workflows.",
    stack: ["React", "TypeScript", "Node.js", "OpenAI API", "Tailwind CSS"],
    liveUrl: "https://example.com/nova",
    repoUrl: "https://github.com/example/nova",
    featured: true,
    order: 2,
  },
  {
    id: "project-3",
    title: "Finova Finance App",
    slug: {
      current: "finova-finance-app",
    },
    category: "FinTech / Personal Finance",
    year: "2025",
    cover: {
      asset: {
        url: "/projects/finova.svg",
      },
      alt: "Finova Personal Finance App Mobile Mockup",
    },
    summary:
      "Privacy-first wealth tracker and automated transaction categorization tool with real-time budget forecasting.",
    stack: ["Next.js", "TypeScript", "Zustand", "Recharts", "Supabase"],
    liveUrl: "https://example.com/finova",
    repoUrl: "https://github.com/example/finova",
    featured: true,
    order: 3,
  },
  {
    id: "project-4",
    title: "Lunex Workspace Redesign",
    slug: {
      current: "lunex-workspace-redesign",
    },
    category: "Frontend Architecture",
    year: "2024",
    cover: {
      asset: {
        url: "/projects/lunex.svg",
      },
      alt: "Lunex Collaborative Workspace Desktop Mockup",
    },
    summary:
      "Complete frontend redesign and performance overhaul of a collaborative workspace platform, boosting Core Web Vitals by 45%.",
    stack: ["React", "TypeScript", "Vite", "WebSockets", "Tailwind CSS"],
    liveUrl: "https://example.com/lunex",
    repoUrl: "https://github.com/example/lunex",
    featured: true,
    order: 4,
  },
  {
    id: "project-5",
    title: "Lumina - Brand Design",
    slug: {
      current: "lumina-brand-design",
    },
    category: "Technology / SaaS",
    year: "2024",
    cover: {
      asset: {
        url: "/projects/lumina.svg",
      },
      alt: "Lumina Brand Design Dark Tablet Mockup",
    },
    summary:
      "Modern brand identity, design system, and digital asset suite for a high-growth cloud SaaS startup.",
    stack: ["Design Systems", "Figma", "Tailwind CSS", "Next.js"],
    liveUrl: "https://example.com/lumina",
    repoUrl: "https://github.com/example/lumina",
    featured: true,
    order: 5,
  },
  {
    id: "project-6",
    title: "Ohio Branding",
    slug: {
      current: "ohio-branding",
    },
    category: "Branding",
    year: "2024",
    cover: {
      asset: {
        url: "/projects/ohio.svg",
      },
      alt: "Ohio Editorial Branding Mobile Mockup",
    },
    summary:
      "Comprehensive editorial visual identity, typography system, and collateral design guidelines for print and screen.",
    stack: ["Typography", "Art Direction", "Figma", "Editorial Design"],
    liveUrl: "https://example.com/ohio",
    repoUrl: "https://github.com/example/ohio",
    featured: true,
    order: 6,
  },
];
