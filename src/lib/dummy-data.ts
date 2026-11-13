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
  role: "Frontend Developer",
  avatar: {
    asset: {
      url: "/profile-picture.png",
    },
    alt: "Foto profil Zidan Maulana",
  },
  headline:
    "I build modern, high-performance digital experiences that drive real impact.",
  shortBio:
    "Informatics student and freelance web developer crafting digital solutions that scale smoothly, engage users, and deliver real value.",
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
  bookingUrl: "mailto:zidan@example.com",
  projectsUrl: "#projects",
  socials: [
    { label: "GitHub", url: "https://github.com" },
    { label: "LinkedIn", url: "https://linkedin.com" },
    { label: "Instagram", url: "https://instagram.com" },
  ],
};
