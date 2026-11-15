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
    handle?: string;
  }>;
}

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
    { label: "LinkedIn", url: "https://linkedin.com", handle: "/in/zidanmaulana" },
    { label: "GitHub", url: "https://github.com", handle: "zidanmaulana" },
    { label: "Instagram", url: "https://instagram.com", handle: "@zidanmaulana" },
  ],
};

export interface ProjectSection {
  tag: string;
  title: string;
  description: string;
  images?: Array<{
    asset: {
      url: string;
    };
    alt: string;
  }>;
}

export interface Project {
  id: string;
  title: string;
  slug: {
    current: string;
  };
  category: string;
  timeline?: string;
  year?: string;
  cover: {
    asset: {
      url: string;
    };
    alt: string;
  };
  summary: string;
  body?: string;
  sections?: ProjectSection[];
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
    timeline: "Jan 10th - Feb 28th",
    year: "2026",
    cover: {
      asset: {
        url: "/projects/orbit.svg",
      },
      alt: "Orbit SaaS Analytics Platform Interface Mockup",
    },
    summary:
      "Real-time web analytics and telemetry platform with high-throughput event ingestion and custom dashboard visualization.",
    sections: [
      {
        tag: "Ideation & Conceptual",
        title:
          "Architecting an ultra-responsive analytics canvas for complex real-time datasets.",
        description:
          "The core objective was delivering sub-second query rendering with zero visual stutter. We explored modular grid widgets, streaming chart primitives, and predictive client-side data caching.",
        images: [
          {
            asset: { url: "/projects/orbit-detail-1.svg" },
            alt: "Orbit Analytics Dashboard Metric Widgets",
          },
          {
            asset: { url: "/projects/orbit-detail-2.svg" },
            alt: "Orbit Telemetry Stream Topology Visualization",
          },
        ],
      },
      {
        tag: "Production & Execution",
        title:
          "Scalable telemetry ingestion pipelines built with resilient frontend architecture.",
        description:
          "Implemented virtualized canvas charts handling over 100,000 data points smoothly. Built custom SVG renderers and integrated Web Worker telemetry pipelines to guarantee 60fps interaction during peak loads.",
      },
    ],
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
    timeline: "Nov 5th - Dec 20th",
    year: "2025",
    cover: {
      asset: {
        url: "/projects/nova.svg",
      },
      alt: "Nova AI Design System Engine Card Mockup",
    },
    summary:
      "Intelligent design token extractor and accessible UI component generator powered by modern generative AI workflows.",
    sections: [
      {
        tag: "Ideation & Conceptual",
        title:
          "Automating token synchronization between Figma variables and production React code.",
        description:
          "We reimagined design systems as living dynamic code. By synthesizing token definitions into accessible React primitives, designers and engineers eliminated style drift completely.",
        images: [
          {
            asset: { url: "/projects/nova-detail-1.svg" },
            alt: "Nova Token Extractor Geometric Grid",
          },
          {
            asset: { url: "/projects/nova-detail-2.svg" },
            alt: "Nova Component Preview and Syntax Inspection",
          },
        ],
      },
      {
        tag: "Production & Execution",
        title:
          "Ensuring WCAG AAA compliance and atomic CSS token optimization across themes.",
        description:
          "Developed automated contrast algorithms and semantic color mapping engines that output lightweight CSS custom properties, cutting component bundle sizes by 38%.",
      },
    ],
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
    timeline: "Aug 12th - Oct 1st",
    year: "2025",
    cover: {
      asset: {
        url: "/projects/finova.svg",
      },
      alt: "Finova Personal Finance App Mobile Mockup",
    },
    summary:
      "Privacy-first wealth tracker and automated transaction categorization tool with real-time budget forecasting.",
    sections: [
      {
        tag: "Ideation & Conceptual",
        title:
          "Designing high-trust wealth management interfaces that make finances frictionless.",
        description:
          "Users needed a calm, non-judgmental financial overview. We restructured account hierarchies, introduced intuitive categorization tags, and created clear trajectory indicators.",
        images: [
          {
            asset: { url: "/projects/finova-detail-1.svg" },
            alt: "Finova Mobile Transaction Feed Interface",
          },
          {
            asset: { url: "/projects/finova-detail-2.svg" },
            alt: "Finova Net Worth Growth Projection Chart",
          },
        ],
      },
      {
        tag: "Production & Execution",
        title:
          "Local-first state caching and responsive micro-interactions for instant feedback.",
        description:
          "Engineered offline-ready IndexedDB storage synchronized via background sync APIs, delivering instant optimistic UI updates and seamless transaction recording.",
      },
    ],
    stack: ["Next.js", "TypeScript", "Zustand", "Recharts", "Supabase"],
    liveUrl: "https://example.com/finova",
    repoUrl: "https://github.com/example/finova",
    featured: true,
    order: 3,
  },
  {
    id: "project-4",
    title: "Lunex Website Redesign",
    slug: {
      current: "lunex-website-redesign",
    },
    category: "Technology",
    timeline: "Mar 1st - Apr 12th",
    year: "2024",
    cover: {
      asset: {
        url: "/projects/lunex.svg",
      },
      alt: "Lunex Website Redesign Laptop Mockup",
    },
    summary:
      "Lunex Website Redesign focused on improving usability and visual clarity through a modern and structured web experience.",
    sections: [
      {
        tag: "Ideation & Conceptual",
        title:
          "Fasonex was reimagined as a cleaner and more intuitive platform built around user-focused navigation.",
        description:
          "The goal was to simplify the browsing experience while enhancing visual hierarchy and content structure. The concept focused on clear layouts, improved content flow, and a modern interface to help users find information faster and interact with ease.",
        images: [
          {
            asset: { url: "/projects/lunex-detail-1.svg" },
            alt: "Lunex Studio Desktop Display Mockup",
          },
          {
            asset: { url: "/projects/lunex-detail-2.svg" },
            alt: "Lunex Studio Laptop Table Mockup",
          },
        ],
      },
      {
        tag: "Production & Execution",
        title:
          "The redesign approach focused on structure, consistency, and improved interaction design.",
        description:
          "A refreshed UI system was developed with scalable components and responsive layouts. Typography, spacing, and visual hierarchy were refined to improve readability, while interactions were optimized to create a smoother and more engaging user experience across devices.",
      },
    ],
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
    timeline: "May 4th - Jun 18th",
    year: "2024",
    cover: {
      asset: {
        url: "/projects/lumina.svg",
      },
      alt: "Lumina Brand Design Dark Tablet Mockup",
    },
    summary:
      "Modern brand identity, design system, and digital asset suite for a high-growth cloud SaaS startup.",
    sections: [
      {
        tag: "Ideation & Conceptual",
        title:
          "Forging a distinct visual identity for high-performance developer infrastructure.",
        description:
          "Explored stark contrast schemes, radiant color accents, and geometric typographic rhythm to communicate developer-grade precision and reliable speed.",
        images: [
          {
            asset: { url: "/projects/lumina-detail-1.svg" },
            alt: "Lumina Brand Logo Geometry and Radiant Glow",
          },
          {
            asset: { url: "/projects/lumina-detail-2.svg" },
            alt: "Lumina Color Palette and Typeface Specifications",
          },
        ],
      },
      {
        tag: "Production & Execution",
        title:
          "Comprehensive design guidelines and vector component kit for product teams.",
        description:
          "Produced multi-platform design tokens, marketing landing templates, and SVG iconography systems adopted across all product touchpoints.",
      },
    ],
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
    timeline: "Jul 2nd - Aug 20th",
    year: "2024",
    cover: {
      asset: {
        url: "/projects/ohio.svg",
      },
      alt: "Ohio Editorial Branding Mobile Mockup",
    },
    summary:
      "Comprehensive editorial visual identity, typography system, and collateral design guidelines for print and screen.",
    sections: [
      {
        tag: "Ideation & Conceptual",
        title:
          "Editorial storytelling blended with contemporary digital publishing standards.",
        description:
          "Focused on serif typographic elegance, generous whitespace margins, and expressive editorial covers that bridge classical print journals with web reading.",
        images: [
          {
            asset: { url: "/projects/ohio-detail-1.svg" },
            alt: "Ohio Editorial Typography and Masthead Layout",
          },
          {
            asset: { url: "/projects/ohio-detail-2.svg" },
            alt: "Ohio Print and Digital Specimen Swatches",
          },
        ],
      },
      {
        tag: "Production & Execution",
        title:
          "Responsive grid systems and font licensing pipelines for high-traffic magazines.",
        description:
          "Crafted fluid typography clamp functions, high-contrast reading themes, and print-ready PDF styling templates for dual-medium publishing workflows.",
      },
    ],
    stack: ["Typography", "Art Direction", "Figma", "Editorial Design"],
    liveUrl: "https://example.com/ohio",
    repoUrl: "https://github.com/example/ohio",
    featured: true,
    order: 6,
  },
];

export interface Experience {
  id: string;
  organization: string;
  role: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  logo: {
    asset: {
      url: string;
    };
    alt: string;
  };
}

export const dummyExperiences: Experience[] = [
  {
    id: "exp-1",
    organization: "Freelance & Open Source",
    role: "Full Stack Developer",
    description:
      "Designing and building modern web applications, high-performance user interfaces, and custom frontend architectures for independent clients and open source initiatives.",
    startDate: "July 2024",
    endDate: "Now",
    location: "Jakarta, ID",
    logo: {
      asset: {
        url: "/experience/freelance.svg",
      },
      alt: "Freelance Full Stack Developer logo badge",
    },
  },
  {
    id: "exp-2",
    organization: "Karsa Digital Studio",
    role: "Frontend Engineering Intern",
    description:
      "Developed responsive web components and interactive design systems with strict accessibility compliance, collaborating with senior engineers to optimize client-side bundle performance.",
    startDate: "August 2023",
    endDate: "June 2024",
    location: "Jakarta, ID",
    logo: {
      asset: {
        url: "/experience/karsa.svg",
      },
      alt: "Karsa Digital Studio logo badge",
    },
  },
  {
    id: "exp-3",
    organization: "Informatics Computer Laboratory",
    role: "Web Development Lab Assistant",
    description:
      "Mentored undergraduate students in modern frontend workflows, data structures, and algorithmic programming while maintaining internal lab portal software.",
    startDate: "September 2022",
    endDate: "July 2023",
    location: "Depok, ID",
    logo: {
      asset: {
        url: "/experience/lab.svg",
      },
      alt: "Informatics Computer Laboratory logo badge",
    },
  },
];

export interface Education {
  id: string;
  institution: string;
  degree: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
}

export const dummyEducations: Education[] = [
  {
    id: "edu-1",
    institution: "Universitas Pembangunan Nasional Veteran Jakarta",
    degree: "Bachelor of Science in Informatics",
    description:
      "Studying computer science fundamentals, distributed software systems, data structures, and human-computer interaction with hands-on web development practice.",
    startDate: "September 2022",
    endDate: "Present",
    location: "Jakarta, ID",
  },
  {
    id: "edu-2",
    institution: "SMA Negeri 28 Jakarta",
    degree: "Natural Sciences & Mathematics",
    description:
      "Completed secondary education with rigorous coursework in advanced mathematics, analytical physics, and introductory computer programming.",
    startDate: "July 2019",
    endDate: "June 2022",
    location: "Jakarta, ID",
  },
];

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: {
    asset: {
      url: string;
    };
    alt?: string;
  };
}

export const dummyCertifications: Certification[] = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta",
    date: "April 2024",
    url: "https://coursera.org",
  },
  {
    id: "cert-2",
    title: "React & Next.js Web Architecture Specialist",
    issuer: "Dicoding Indonesia",
    date: "October 2023",
    url: "https://dicoding.com",
  },
];

export interface SkillCard {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface TechToolItem {
  id: string;
  name: string;
  icon: string;
}

export const dummySkills: SkillCard[] = [
  {
    id: "skill-1",
    number: "01",
    title: "Retrieval Augmented Generation",
    description:
      "Semantic search, context-aware AI systems, and knowledge base pipelines.",
  },
  {
    id: "skill-2",
    number: "02",
    title: "UI/UX & Design Systems",
    description:
      "Scalable design tokens, accessible components, and intuitive interactions.",
  },
  {
    id: "skill-3",
    number: "03",
    title: "Backend & API Integration",
    description:
      "Reliable data services, serverless workflows, and seamless integrations.",
  },
  {
    id: "skill-4",
    number: "04",
    title: "Performance & Optimization",
    description:
      "Speed audits, Core Web Vitals compliance, and asset optimization.",
  },
];

export const dummyTools: TechToolItem[] = [
  { id: "tool-ts", name: "TypeScript", icon: "typescript" },
  { id: "tool-js", name: "JavaScript", icon: "javascript" },
  { id: "tool-python", name: "Python", icon: "python" },
  { id: "tool-react", name: "React", icon: "react" },
  { id: "tool-nextjs", name: "Next.js", icon: "nextjs" },
  { id: "tool-tailwind", name: "Tailwind CSS", icon: "tailwind" },
  { id: "tool-nodejs", name: "Node.js", icon: "nodejs" },
  { id: "tool-express", name: "Express.js", icon: "express" },
  { id: "tool-postgresql", name: "PostgreSQL", icon: "postgresql" },
  { id: "tool-docker", name: "Docker", icon: "docker" },
  { id: "tool-git", name: "Git", icon: "git" },
  { id: "tool-figma", name: "Figma", icon: "figma" },
  { id: "tool-sanity", name: "Sanity", icon: "sanity" },
];



