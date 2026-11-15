# Zidan Maulana - Personal Portfolio

A modern, minimalist personal portfolio and case studies website built with Next.js (App Router), TypeScript, Tailwind CSS, and Sanity CMS.

## Features

- **Minimalist & Content-First Design**: Focuses on clean typography, balanced spacing, and subtle micro-interactions.
- **Dynamic Content with Sanity CMS**: Full headless CMS integration with embedded Sanity Studio (`/studio`) for managing projects, experience, skills, and profile data.
- **Light & Dark Theme**: System-aware theme toggle with smooth color transitions.
- **Performance & SEO**: Built on Next.js App Router with Incremental Static Regeneration (ISR) for fast delivery.
- **Smooth Navigation**: Enhanced with Lenis smooth scrolling and fluid mobile navigation.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) & [Lenis](https://lenis.darkroom.engineering/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v20+) and [pnpm](https://pnpm.io/) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zidan-maulana/zidan-portfolio.git
   cd zidan-portfolio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Fill in your Sanity project configuration:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. Run the development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the website, or [http://localhost:3000/studio](http://localhost:3000/studio) to access Sanity Studio.

## Available Scripts

- `pnpm dev`: Starts the local development server.
- `pnpm build`: Creates an optimized production build.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint checks.
- `pnpm typecheck`: Validates TypeScript types.

## License

This project is licensed under the MIT License.
