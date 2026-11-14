import { client } from './client'
import {
  type Profile,
  type Project,
  type Experience,
  type Education,
  type Certification,
  type SkillCard,
  type TechToolItem,
  dummyProfile,
  dummyProjects,
  dummyExperiences,
  dummyEducations,
  dummyCertifications,
  dummySkills,
  dummyTools,
} from '@/lib/dummy-data'

export const profileQuery = `*[_type == "profile"][0] {
  name,
  role,
  roles,
  headline,
  shortBio,
  aboutText,
  overview,
  phone,
  email,
  location,
  timezone,
  availability,
  showAvailability,
  bookingUrl,
  projectsUrl,
  contactSubhead,
  socials,
  "avatar": {
    "alt": coalesce(avatar.alt, "Foto profil " + name),
    "asset": {
      "url": avatar.asset->url
    }
  },
  "cv": {
    "asset": {
      "url": cv.asset->url
    }
  }
}`

export const projectsQuery = `*[_type == "project" && (featured == true || !defined(featured))] | order(order asc, _createdAt desc) {
  "id": _id,
  title,
  slug,
  category,
  timeline,
  year,
  summary,
  stack,
  liveUrl,
  repoUrl,
  featured,
  order,
  "cover": {
    "alt": coalesce(cover.alt, title),
    "asset": {
      "url": cover.asset->url
    }
  },
  sections[] {
    tag,
    title,
    description,
    images[] {
      "alt": coalesce(alt, ""),
      "asset": {
        "url": asset->url
      }
    }
  }
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  "id": _id,
  title,
  slug,
  category,
  timeline,
  year,
  summary,
  stack,
  liveUrl,
  repoUrl,
  featured,
  order,
  "cover": {
    "alt": coalesce(cover.alt, title),
    "asset": {
      "url": cover.asset->url
    }
  },
  sections[] {
    tag,
    title,
    description,
    images[] {
      "alt": coalesce(alt, ""),
      "asset": {
        "url": asset->url
      }
    }
  }
}`

export const projectSlugsQuery = `*[_type == "project" && defined(slug.current)] {
  "slug": slug.current
}`

export const experiencesQuery = `*[_type == "experience"] | order(order asc, _createdAt desc) {
  "id": _id,
  organization,
  role,
  description,
  startDate,
  endDate,
  location,
  "logo": {
    "alt": coalesce(logo.alt, organization),
    "asset": {
      "url": logo.asset->url
    }
  }
}`

export const educationsQuery = `*[_type == "education"] | order(order asc, _createdAt desc) {
  "id": _id,
  institution,
  degree,
  description,
  startDate,
  endDate,
  location
}`

export const certificationsQuery = `*[_type == "certification"] | order(order asc, _createdAt desc) {
  "id": _id,
  title,
  issuer,
  date,
  url
}`

export const proficienciesQuery = `*[_type == "proficiency"] | order(order asc, number asc) {
  "id": _id,
  number,
  title,
  description
}`

export const toolsQuery = `*[_type == "tool"] | order(order asc, _createdAt asc) {
  "id": _id,
  name,
  icon,
  descriptor,
  url
}`

export async function getProfile(): Promise<Profile> {
  try {
    const data = await client.fetch<Profile | null>(
      profileQuery,
      {},
      { next: { tags: ['profile'] } }
    )
    if (!data || !data.name) return dummyProfile
    return {
      ...dummyProfile,
      ...data,
      avatar: {
        alt: data.avatar?.alt || dummyProfile.avatar.alt,
        asset: {
          url: data.avatar?.asset?.url || dummyProfile.avatar.asset.url,
        },
      },
      cv: {
        asset: {
          url: data.cv?.asset?.url || dummyProfile.cv.asset.url,
        },
      },
      socials: data.socials && data.socials.length > 0 ? data.socials : dummyProfile.socials,
    }
  } catch (error) {
    console.warn('Failed to fetch profile from Sanity, using fallback:', error)
    return dummyProfile
  }
}

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await client.fetch<Project[]>(
      projectsQuery,
      {},
      { next: { tags: ['projects'] } }
    )
    if (!data || data.length === 0) return dummyProjects
    return data.map((p, index) => {
      const fallback = dummyProjects[index]
      return {
        ...p,
        cover: {
          alt: p.cover?.alt || fallback?.cover.alt || p.title,
          asset: {
            url: p.cover?.asset?.url || fallback?.cover.asset.url || '',
          },
        },
      }
    })
  } catch (error) {
    console.warn('Failed to fetch projects from Sanity, using fallback:', error)
    return dummyProjects
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const data = await client.fetch<Project | null>(
      projectBySlugQuery,
      { slug },
      { next: { tags: [`project:${slug}`, 'projects'] } }
    )
    if (!data) {
      return dummyProjects.find((p) => p.slug.current === slug) || null
    }
    const fallback = dummyProjects.find((p) => p.slug.current === slug)
    return {
      ...data,
      cover: {
        alt: data.cover?.alt || fallback?.cover.alt || data.title,
        asset: {
          url: data.cover?.asset?.url || fallback?.cover.asset.url || '',
        },
      },
    }
  } catch (error) {
    console.warn(`Failed to fetch project ${slug} from Sanity, using fallback:`, error)
    return dummyProjects.find((p) => p.slug.current === slug) || null
  }
}

export async function getProjectSlugs(): Promise<string[]> {
  try {
    const data = await client.fetch<{ slug: string }[]>(
      projectSlugsQuery,
      {},
      { next: { tags: ['projects'] } }
    )
    if (!data || data.length === 0) {
      return dummyProjects.map((p) => p.slug.current)
    }
    return data.map((item) => item.slug)
  } catch {
    return dummyProjects.map((p) => p.slug.current)
  }
}

export async function getExperiences(): Promise<Experience[]> {
  try {
    const data = await client.fetch<Experience[]>(
      experiencesQuery,
      {},
      { next: { tags: ['experience'] } }
    )
    if (!data || data.length === 0) return dummyExperiences
    return data
  } catch (error) {
    console.warn('Failed to fetch experiences from Sanity, using fallback:', error)
    return dummyExperiences
  }
}

export async function getEducations(): Promise<Education[]> {
  try {
    const data = await client.fetch<Education[]>(
      educationsQuery,
      {},
      { next: { tags: ['education'] } }
    )
    if (!data || data.length === 0) return dummyEducations
    return data
  } catch (error) {
    console.warn('Failed to fetch educations from Sanity, using fallback:', error)
    return dummyEducations
  }
}

export async function getCertifications(): Promise<Certification[]> {
  try {
    const data = await client.fetch<Certification[]>(
      certificationsQuery,
      {},
      { next: { tags: ['certification'] } }
    )
    if (!data || data.length === 0) return dummyCertifications
    return data
  } catch (error) {
    console.warn('Failed to fetch certifications from Sanity, using fallback:', error)
    return dummyCertifications
  }
}

export async function getProficiencies(): Promise<SkillCard[]> {
  try {
    const data = await client.fetch<SkillCard[]>(
      proficienciesQuery,
      {},
      { next: { tags: ['proficiency'] } }
    )
    if (!data || data.length === 0) return dummySkills
    return data
  } catch (error) {
    console.warn('Failed to fetch proficiencies from Sanity, using fallback:', error)
    return dummySkills
  }
}

export async function getTools(): Promise<TechToolItem[]> {
  try {
    const data = await client.fetch<TechToolItem[]>(
      toolsQuery,
      {},
      { next: { tags: ['tool'] } }
    )
    if (!data || data.length === 0) return dummyTools
    return data
  } catch (error) {
    console.warn('Failed to fetch tools from Sanity, using fallback:', error)
    return dummyTools
  }
}
