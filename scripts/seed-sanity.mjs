import fs from 'node:fs'
import path from 'node:path'
import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !token) {
  console.error('Error: NEXT_PUBLIC_SANITY_PROJECT_ID or SANITY_API_WRITE_TOKEN is missing!')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-11-15',
  useCdn: false,
})

const rootDir = process.cwd()

async function uploadAsset(relativeFilePath, assetType = 'image') {
  const fullPath = path.join(rootDir, 'public', relativeFilePath.replace(/^\//, ''))
  if (!fs.existsSync(fullPath)) {
    console.warn(`File not found: ${fullPath}`)
    return null
  }

  const stream = fs.createReadStream(fullPath)
  const filename = path.basename(fullPath)
  console.log(`Uploading ${assetType}: ${filename}...`)

  try {
    const asset = await client.assets.upload(assetType, stream, {
      filename,
    })
    return asset._id
  } catch (err) {
    console.error(`Failed to upload ${filename}:`, err.message)
    return null
  }
}

async function seed() {
  console.log(`Starting Sanity seed for project ${projectId} (${dataset})...\n`)

  // 1. Profile Avatar & CV
  const avatarAssetId = await uploadAsset('/profile-picture.jpeg', 'image')
  const cvAssetId = await uploadAsset('/dummy-cv.pdf', 'file')

  const profileDoc = {
    _id: 'profile',
    _type: 'profile',
    name: 'Zidan Maulana',
    role: 'Full Stack Developer',
    roles: [
      'Full Stack Developer',
      'AI Engineer',
      'UI/UX Designer',
    ],
    headline: 'I build modern, high-performance digital experiences that drive real impact.',
    shortBio: 'Informatics student and freelance developer crafting digital solutions that engage users and deliver real value.',
    aboutText: "Hey, I'm Zidan Maulana, an Informatics student and freelance developer crafting scalable web applications, modern frontend architecture, and intuitive digital experiences that deliver real impact.",
    location: 'Jakarta',
    timezone: 'Asia/Jakarta',
    availability: 'Open for new projects',
    showAvailability: false,
    email: 'zidan@example.com',
    phone: '+62 812 3456 7890',
    bookingUrl: 'mailto:zidan@example.com',
    projectsUrl: '#projects',
    contactSubhead: 'Get in touch for collaborations, project inquiries, or opportunities.',
    socials: [
      { _key: 'soc-1', label: 'LinkedIn', url: 'https://linkedin.com', handle: '/in/zidanmaulana' },
      { _key: 'soc-2', label: 'GitHub', url: 'https://github.com', handle: 'zidanmaulana' },
      { _key: 'soc-3', label: 'Instagram', url: 'https://instagram.com', handle: '@zidanmaulana' },
    ],
    avatar: avatarAssetId
      ? {
          _type: 'image',
          asset: { _type: 'reference', _ref: avatarAssetId },
          alt: 'Foto profil Zidan Maulana',
        }
      : undefined,
    cv: cvAssetId
      ? {
          _type: 'file',
          asset: { _type: 'reference', _ref: cvAssetId },
        }
      : undefined,
  }

  await client.createOrReplace(profileDoc)
  console.log('✓ Profile seeded')

  // 2. Projects
  const projectsData = [
    {
      id: 'project-1',
      title: 'Orbit - SaaS Analytics Platform',
      slug: 'orbit-saas-platform',
      category: 'Full Stack / SaaS',
      timeline: 'Jan 10th - Feb 28th',
      year: '2026',
      coverPath: '/projects/orbit.svg',
      coverAlt: 'Orbit SaaS Analytics Platform Interface Mockup',
      summary: 'Real-time web analytics and telemetry platform with high-throughput event ingestion and custom dashboard visualization.',
      sections: [
        {
          _key: 'sec-1',
          tag: 'Ideation & Conceptual',
          title: 'Architecting an ultra-responsive analytics canvas for complex real-time datasets.',
          description: 'The core objective was delivering sub-second query rendering with zero visual stutter. We explored modular grid widgets, streaming chart primitives, and predictive client-side data caching.',
          images: [
            { path: '/projects/orbit-detail-1.svg', alt: 'Orbit Analytics Dashboard Metric Widgets' },
            { path: '/projects/orbit-detail-2.svg', alt: 'Orbit Telemetry Stream Topology Visualization' },
          ],
        },
        {
          _key: 'sec-2',
          tag: 'Production & Execution',
          title: 'Scalable telemetry ingestion pipelines built with resilient frontend architecture.',
          description: 'Implemented virtualized canvas charts handling over 100,000 data points smoothly. Built custom SVG renderers and integrated Web Worker telemetry pipelines to guarantee 60fps interaction during peak loads.',
          images: [],
        },
      ],
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Prisma'],
      liveUrl: 'https://example.com/orbit',
      repoUrl: 'https://github.com/example/orbit',
      featured: true,
      order: 1,
    },
    {
      id: 'project-2',
      title: 'Nova AI - Design System Engine',
      slug: 'nova-ai-design-system',
      category: 'AI & UI/UX Tooling',
      timeline: 'Nov 5th - Dec 20th',
      year: '2025',
      coverPath: '/projects/nova.svg',
      coverAlt: 'Nova AI Design System Engine Card Mockup',
      summary: 'Intelligent design token extractor and accessible UI component generator powered by modern generative AI workflows.',
      sections: [
        {
          _key: 'sec-1',
          tag: 'Ideation & Conceptual',
          title: 'Automating token synchronization between Figma variables and production React code.',
          description: 'We reimagined design systems as living dynamic code. By synthesizing token definitions into accessible React primitives, designers and engineers eliminated style drift completely.',
          images: [
            { path: '/projects/nova-detail-1.svg', alt: 'Nova Token Extractor Geometric Grid' },
            { path: '/projects/nova-detail-2.svg', alt: 'Nova Component Preview and Syntax Inspection' },
          ],
        },
        {
          _key: 'sec-2',
          tag: 'Production & Execution',
          title: 'Ensuring WCAG AAA compliance and atomic CSS token optimization across themes.',
          description: 'Developed automated contrast algorithms and semantic color mapping engines that output lightweight CSS custom properties, cutting component bundle sizes by 38%.',
          images: [],
        },
      ],
      stack: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'Tailwind CSS'],
      liveUrl: 'https://example.com/nova',
      repoUrl: 'https://github.com/example/nova',
      featured: true,
      order: 2,
    },
    {
      id: 'project-3',
      title: 'Finova Finance App',
      slug: 'finova-finance-app',
      category: 'FinTech / Personal Finance',
      timeline: 'Aug 12th - Oct 1st',
      year: '2025',
      coverPath: '/projects/finova.svg',
      coverAlt: 'Finova Personal Finance App Mobile Mockup',
      summary: 'Privacy-first wealth tracker and automated transaction categorization tool with real-time budget forecasting.',
      sections: [
        {
          _key: 'sec-1',
          tag: 'Ideation & Conceptual',
          title: 'Designing high-trust wealth management interfaces that make finances frictionless.',
          description: 'Users needed a calm, non-judgmental financial overview. We restructured account hierarchies, introduced intuitive categorization tags, and created clear trajectory indicators.',
          images: [
            { path: '/projects/finova-detail-1.svg', alt: 'Finova Mobile Transaction Feed Interface' },
            { path: '/projects/finova-detail-2.svg', alt: 'Finova Net Worth Growth Projection Chart' },
          ],
        },
        {
          _key: 'sec-2',
          tag: 'Production & Execution',
          title: 'Local-first state caching and responsive micro-interactions for instant feedback.',
          description: 'Engineered offline-ready IndexedDB storage synchronized via background sync APIs, delivering instant optimistic UI updates and seamless transaction recording.',
          images: [],
        },
      ],
      stack: ['Next.js', 'TypeScript', 'Zustand', 'Recharts', 'Supabase'],
      liveUrl: 'https://example.com/finova',
      repoUrl: 'https://github.com/example/finova',
      featured: true,
      order: 3,
    },
    {
      id: 'project-4',
      title: 'Lunex Website Redesign',
      slug: 'lunex-website-redesign',
      category: 'Technology',
      timeline: 'Mar 1st - Apr 12th',
      year: '2024',
      coverPath: '/projects/lunex.svg',
      coverAlt: 'Lunex Website Redesign Laptop Mockup',
      summary: 'Lunex Website Redesign focused on improving usability and visual clarity through a modern and structured web experience.',
      sections: [
        {
          _key: 'sec-1',
          tag: 'Ideation & Conceptual',
          title: 'Fasonex was reimagined as a cleaner and more intuitive platform built around user-focused navigation.',
          description: 'The goal was to simplify the browsing experience while enhancing visual hierarchy and content structure. The concept focused on clear layouts, improved content flow, and a modern interface to help users find information faster and interact with ease.',
          images: [
            { path: '/projects/lunex-detail-1.svg', alt: 'Lunex Studio Desktop Display Mockup' },
            { path: '/projects/lunex-detail-2.svg', alt: 'Lunex Studio Laptop Table Mockup' },
          ],
        },
        {
          _key: 'sec-2',
          tag: 'Production & Execution',
          title: 'Design-driven layouts and structured storytelling for modern brand identity.',
          description: 'Refined UI patterns, accessible component standards, and visual balance were applied across every screen to ensure both aesthetic consistency and effortless navigation for every visitor.',
          images: [],
        },
      ],
      stack: ['UI/UX Design', 'Figma', 'Webflow', 'Prototyping'],
      liveUrl: 'https://example.com/lunex',
      repoUrl: 'https://github.com/example/lunex',
      featured: true,
      order: 4,
    },
    {
      id: 'project-5',
      title: 'Lumina UI Kit',
      slug: 'lumina-ui-kit',
      category: 'Design Systems',
      timeline: 'May 10th - Jun 30th',
      year: '2024',
      coverPath: '/projects/lumina.svg',
      coverAlt: 'Lumina UI Kit Dark Mode Dashboard Mockup',
      summary: 'A dark-mode first component library and design system optimized for high-density analytical dashboards.',
      sections: [
        {
          _key: 'sec-1',
          tag: 'Ideation & Conceptual',
          title: 'Crafting contrast-rich, accessible dark mode primitives from the ground up.',
          description: 'Explored deep zinc surface tones, balanced ambient glows, and strict WCAG AA contrast thresholds to prevent eye fatigue during prolonged dashboard monitoring sessions.',
          images: [
            { path: '/projects/lumina-detail-1.svg', alt: 'Lumina Design System Component Palette Grid' },
            { path: '/projects/lumina-detail-2.svg', alt: 'Lumina Vector Iconography and Typography Specimen' },
          ],
        },
        {
          _key: 'sec-2',
          tag: 'Production & Execution',
          title: 'Comprehensive design guidelines and vector component kit for product teams.',
          description: 'Produced multi-platform design tokens, marketing landing templates, and SVG iconography systems adopted across all product touchpoints.',
          images: [],
        },
      ],
      stack: ['Design Systems', 'Figma', 'Tailwind CSS', 'Next.js'],
      liveUrl: 'https://example.com/lumina',
      repoUrl: 'https://github.com/example/lumina',
      featured: true,
      order: 5,
    },
    {
      id: 'project-6',
      title: 'Ohio Branding',
      slug: 'ohio-branding',
      category: 'Branding',
      timeline: 'Jul 2nd - Aug 20th',
      year: '2024',
      coverPath: '/projects/ohio.svg',
      coverAlt: 'Ohio Editorial Branding Mobile Mockup',
      summary: 'Comprehensive editorial visual identity, typography system, and collateral design guidelines for print and screen.',
      sections: [
        {
          _key: 'sec-1',
          tag: 'Ideation & Conceptual',
          title: 'Editorial storytelling blended with contemporary digital publishing standards.',
          description: 'Focused on serif typographic elegance, generous whitespace margins, and expressive editorial covers that bridge classical print journals with web reading.',
          images: [
            { path: '/projects/ohio-detail-1.svg', alt: 'Ohio Editorial Typography and Masthead Layout' },
            { path: '/projects/ohio-detail-2.svg', alt: 'Ohio Print and Digital Specimen Swatches' },
          ],
        },
        {
          _key: 'sec-2',
          tag: 'Production & Execution',
          title: 'Responsive grid systems and font licensing pipelines for high-traffic magazines.',
          description: 'Crafted fluid typography clamp functions, high-contrast reading themes, and print-ready PDF styling templates for dual-medium publishing workflows.',
          images: [],
        },
      ],
      stack: ['Typography', 'Art Direction', 'Figma', 'Editorial Design'],
      liveUrl: 'https://example.com/ohio',
      repoUrl: 'https://github.com/example/ohio',
      featured: true,
      order: 6,
    },
  ]

  for (const p of projectsData) {
    const coverAssetId = await uploadAsset(p.coverPath, 'image')
    const sections = []

    for (const sec of p.sections) {
      const sectionImages = []
      for (const img of sec.images) {
        const imgAssetId = await uploadAsset(img.path, 'image')
        if (imgAssetId) {
          sectionImages.push({
            _key: Math.random().toString(36).substring(2, 9),
            _type: 'image',
            asset: { _type: 'reference', _ref: imgAssetId },
            alt: img.alt,
          })
        }
      }

      sections.push({
        _key: sec._key,
        tag: sec.tag,
        title: sec.title,
        description: sec.description,
        images: sectionImages.length > 0 ? sectionImages : undefined,
      })
    }

    const doc = {
      _id: p.id,
      _type: 'project',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      category: p.category,
      timeline: p.timeline,
      year: p.year,
      summary: p.summary,
      sections,
      stack: p.stack,
      liveUrl: p.liveUrl,
      repoUrl: p.repoUrl,
      featured: p.featured,
      order: p.order,
      cover: coverAssetId
        ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: coverAssetId },
            alt: p.coverAlt,
          }
        : undefined,
    }

    await client.createOrReplace(doc)
    console.log(`✓ Project seeded: ${p.title}`)
  }

  // 3. Experiences
  const experiences = [
    {
      id: 'exp-1',
      organization: 'Freelance & Independent Contractor',
      role: 'Full Stack Web Developer',
      description: 'Architecting end-to-end full stack web platforms, headless CMS implementations, and custom REST/GraphQL APIs for clients across diverse industries.',
      startDate: 'July 2024',
      endDate: 'Present',
      location: 'Remote, ID',
      logoPath: '/experience/freelance.svg',
      logoAlt: 'Freelance & Independent Contractor badge',
      order: 1,
    },
    {
      id: 'exp-2',
      organization: 'Karsa Digital Studio',
      role: 'Frontend Engineering Intern',
      description: 'Developed responsive web components and interactive design systems with strict accessibility compliance, collaborating with senior engineers to optimize client-side bundle performance.',
      startDate: 'August 2023',
      endDate: 'June 2024',
      location: 'Jakarta, ID',
      logoPath: '/experience/karsa.svg',
      logoAlt: 'Karsa Digital Studio logo badge',
      order: 2,
    },
    {
      id: 'exp-3',
      organization: 'Informatics Computer Laboratory',
      role: 'Web Development Lab Assistant',
      description: 'Mentored undergraduate students in modern frontend workflows, data structures, and algorithmic programming while maintaining internal lab portal software.',
      startDate: 'September 2022',
      endDate: 'July 2023',
      location: 'Depok, ID',
      logoPath: '/experience/lab.svg',
      logoAlt: 'Informatics Computer Laboratory logo badge',
      order: 3,
    },
  ]

  for (const exp of experiences) {
    const logoAssetId = await uploadAsset(exp.logoPath, 'image')
    const doc = {
      _id: exp.id,
      _type: 'experience',
      organization: exp.organization,
      role: exp.role,
      description: exp.description,
      startDate: exp.startDate,
      endDate: exp.endDate,
      location: exp.location,
      order: exp.order,
      logo: logoAssetId
        ? {
            _type: 'image',
            asset: { _type: 'reference', _ref: logoAssetId },
            alt: exp.logoAlt,
          }
        : undefined,
    }
    await client.createOrReplace(doc)
    console.log(`✓ Experience seeded: ${exp.organization}`)
  }

  // 4. Educations
  const educations = [
    {
      id: 'edu-1',
      institution: 'Universitas Pembangunan Nasional Veteran Jakarta',
      degree: 'Bachelor of Science in Informatics',
      description: 'Studying computer science fundamentals, distributed software systems, data structures, and human-computer interaction with hands-on web development practice.',
      startDate: 'September 2022',
      endDate: 'Present',
      location: 'Jakarta, ID',
      order: 1,
    },
    {
      id: 'edu-2',
      institution: 'SMA Negeri 28 Jakarta',
      degree: 'Natural Sciences & Mathematics',
      description: 'Completed secondary education with rigorous coursework in advanced mathematics, analytical physics, and introductory computer programming.',
      startDate: 'July 2019',
      endDate: 'June 2022',
      location: 'Jakarta, ID',
      order: 2,
    },
  ]

  for (const edu of educations) {
    const doc = {
      _id: edu.id,
      _type: 'education',
      institution: edu.institution,
      degree: edu.degree,
      description: edu.description,
      startDate: edu.startDate,
      endDate: edu.endDate,
      location: edu.location,
      order: edu.order,
    }
    await client.createOrReplace(doc)
    console.log(`✓ Education seeded: ${edu.institution}`)
  }

  // 5. Certifications
  const certifications = [
    {
      id: 'cert-1',
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta',
      date: 'April 2024',
      url: 'https://coursera.org',
      order: 1,
    },
    {
      id: 'cert-2',
      title: 'React & Next.js Web Architecture Specialist',
      issuer: 'Dicoding Indonesia',
      date: 'October 2023',
      url: 'https://dicoding.com',
      order: 2,
    },
  ]

  for (const cert of certifications) {
    const doc = {
      _id: cert.id,
      _type: 'certification',
      title: cert.title,
      issuer: cert.issuer,
      date: cert.date,
      url: cert.url,
      order: cert.order,
    }
    await client.createOrReplace(doc)
    console.log(`✓ Certification seeded: ${cert.title}`)
  }

  // 6. Proficiencies (01-04)
  const proficiencies = [
    {
      id: 'skill-1',
      number: '01',
      title: 'Retrieval Augmented Generation',
      description: 'Semantic search, context-aware AI systems, and knowledge base pipelines.',
      order: 1,
    },
    {
      id: 'skill-2',
      number: '02',
      title: 'UI/UX & Design Systems',
      description: 'Scalable design tokens, accessible components, and intuitive interactions.',
      order: 2,
    },
    {
      id: 'skill-3',
      number: '03',
      title: 'Backend & API Integration',
      description: 'Reliable data services, serverless workflows, and seamless integrations.',
      order: 3,
    },
    {
      id: 'skill-4',
      number: '04',
      title: 'Performance & Optimization',
      description: 'Speed audits, Core Web Vitals compliance, and asset optimization.',
      order: 4,
    },
  ]

  for (const prof of proficiencies) {
    const doc = {
      _id: prof.id,
      _type: 'proficiency',
      number: prof.number,
      title: prof.title,
      description: prof.description,
      order: prof.order,
    }
    await client.createOrReplace(doc)
    console.log(`✓ Proficiency seeded: ${prof.number} - ${prof.title}`)
  }

  // 7. Tools
  const tools = [
    { id: 'tool-ts', name: 'TypeScript', icon: 'typescript', order: 1 },
    { id: 'tool-js', name: 'JavaScript', icon: 'javascript', order: 2 },
    { id: 'tool-python', name: 'Python', icon: 'python', order: 3 },
    { id: 'tool-react', name: 'React', icon: 'react', order: 4 },
    { id: 'tool-nextjs', name: 'Next.js', icon: 'nextjs', order: 5 },
    { id: 'tool-tailwind', name: 'Tailwind CSS', icon: 'tailwind', order: 6 },
    { id: 'tool-nodejs', name: 'Node.js', icon: 'nodejs', order: 7 },
    { id: 'tool-express', name: 'Express.js', icon: 'express', order: 8 },
    { id: 'tool-postgresql', name: 'PostgreSQL', icon: 'postgresql', order: 9 },
    { id: 'tool-docker', name: 'Docker', icon: 'docker', order: 10 },
    { id: 'tool-git', name: 'Git', icon: 'git', order: 11 },
    { id: 'tool-figma', name: 'Figma', icon: 'figma', order: 12 },
    { id: 'tool-sanity', name: 'Sanity', icon: 'sanity', order: 13 },
  ]

  for (const tool of tools) {
    const doc = {
      _id: tool.id,
      _type: 'tool',
      name: tool.name,
      icon: tool.icon,
      order: tool.order,
    }
    await client.createOrReplace(doc)
    console.log(`✓ Tool seeded: ${tool.name}`)
  }

  console.log('\n========================================')
  console.log('🎉 All documents and media assets seeded successfully!')
  console.log('========================================\n')
}

seed().catch((err) => {
  console.error('Fatal seed error:', err)
  process.exit(1)
})
