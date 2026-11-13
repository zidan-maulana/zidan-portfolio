export interface Profile {
  name: string;
  role: string;
  avatar: {
    asset: {
      url: string;
    };
    alt: string;
  };
  headline: string;
  shortBio: string;
  overview: Array<{
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
  socials: Array<{
    label: string;
    url: string;
  }>;
}

export interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  category: string;
  year?: string;
  cover: {
    asset: { url: string };
    alt: string;
  };
  summary: string;
  body?: Array<{
    _type: string;
    children: Array<{ _type: string; text: string }>;
  }>;
  gallery?: Array<{
    asset: { url: string };
    alt: string;
  }>;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  order?: number;
}

export interface Experience {
  _id: string;
  organization: string;
  logo?: {
    asset: { url: string };
    alt?: string;
  };
  role: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
}

export interface Education {
  _id: string;
  institution: string;
  degree: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
}

export interface Certification {
  _id: string;
  title: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Tool {
  _id: string;
  name: string;
  descriptor: string;
  logo?: {
    asset: { url: string };
  };
  url?: string;
  order: number;
}

export const dummyProfile: Profile = {
  name: "Muhammad Isya Zidan Maulana",
  role: "Web Developer & Informatics Student",
  avatar: {
    asset: {
      url: "/avatar.svg",
    },
    alt: "Foto profil Muhammad Isya Zidan Maulana",
  },
  headline: "Crafting responsive, accessible, and high-performance digital experiences.",
  shortBio: "Informatics undergraduate student and freelance web developer focused on modern web technologies, clean architecture, and delightful user interfaces.",
  overview: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "I am an Informatics student with a strong passion for frontend engineering and modern web development. I enjoy transforming complex problems into clean, intuitive, and performant web solutions.",
        },
      ],
    },
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "With practical experience in freelance web projects, I build modern web applications using Next.js, TypeScript, and headless CMS platforms. Always eager to learn and collaborate on impactful projects.",
        },
      ],
    },
  ],
  location: "Jakarta",
  timezone: "Asia/Jakarta",
  availability: "Open for new projects",
  showAvailability: true,
  cv: {
    asset: {
      url: "/dummy-cv.pdf",
    },
  },
  email: "zidan@example.com",
  socials: [
    { label: "GitHub", url: "https://github.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Instagram", url: "https://instagram.com" },
  ],
};

export const dummyProjects: Project[] = [
  {
    _id: "project-1",
    title: "E-Commerce Platform",
    slug: { current: "e-commerce-platform" },
    category: "Web Development",
    year: "2026",
    cover: {
      asset: { url: "/avatar.svg" },
      alt: "E-Commerce Platform Preview",
    },
    summary: "A modern headless e-commerce store with seamless checkout experience.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
    order: 1,
  },
];

export const dummyExperiences: Experience[] = [
  {
    _id: "exp-1",
    organization: "Freelance Developer",
    role: "Frontend Developer",
    description: "Developing custom web applications and interactive landing pages for various clients.",
    startDate: "2024",
    endDate: undefined,
    location: "Remote",
  },
];

export const dummyEducations: Education[] = [
  {
    _id: "edu-1",
    institution: "Universitas",
    degree: "S1 Teknik Informatika",
    description: "Fokus pada rekayasa perangkat lunak dan arsitektur sistem informasi web.",
    startDate: "2023",
    endDate: undefined,
    location: "Jakarta, Indonesia",
  },
];

export const dummyCertifications: Certification[] = [];

export const dummyTools: Tool[] = [
  {
    _id: "tool-1",
    name: "Next.js",
    descriptor: "Frontend React Framework",
    order: 1,
  },
  {
    _id: "tool-2",
    name: "TypeScript",
    descriptor: "Typed JavaScript",
    order: 2,
  },
  {
    _id: "tool-3",
    name: "Tailwind CSS",
    descriptor: "Utility-first CSS Framework",
    order: 3,
  },
];

