import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  getProfile,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/sanity/queries";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const [project, profile] = await Promise.all([
    getProjectBySlug(slug),
    getProfile(),
  ]);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${profile.name}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const [project, profile] = await Promise.all([
    getProjectBySlug(slug),
    getProfile(),
  ]);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pb-12">
      {/* Canopy overlay layer (z-40) */}
      <div
        className="fixed -top-[100px] left-0 right-0 h-[140px] sm:h-[144px] bg-page z-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating navigation header (z-50) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div className="w-full max-w-[756px] pt-3 sm:pt-4 pointer-events-auto">
          <Header
            timezone={profile.timezone}
            location={profile.location}
            socials={profile.socials}
          />
        </div>
      </div>

      {/* Main page content (z-10) */}
      <div className="w-full max-w-[756px] flex flex-col items-center relative z-10 pt-3 sm:pt-4">
        <div className="w-full rounded-[24px] bg-nav-bg px-[1.5px] pb-[2px] pt-[56px] sm:pt-[62px]">
          <main className="relative z-10 overflow-hidden rounded-[24px] bg-surface px-5 sm:px-7 md:px-[32px] py-8 sm:py-10 md:py-[50px]">
            {/* Category and timeline */}
            <div className="text-[13px] sm:text-[14px] font-normal text-muted">
              {project.category}
              {project.timeline
                ? ` · ${project.timeline}`
                : project.year
                ? ` · ${project.year}`
                : ""}
            </div>

            {/* Project title */}
            <h1 className="mt-2 font-display text-[26px] font-medium tracking-[-0.015em] text-text leading-tight">
              {project.title}
            </h1>

            {/* Project summary */}
            <p className="mt-2.5 max-w-[620px] text-[14px] font-normal text-muted leading-relaxed">
              {project.summary}
            </p>

            {/* Project preview button */}
            {project.liveUrl && (
              <div className="mt-5 sm:mt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] sm:h-[40px] items-center justify-center rounded-[12px] border border-btn-secondary-border bg-surface px-5 font-display text-[13.5px] sm:text-[14px] font-medium text-btn-secondary-text shadow-btn-secondary transition-all duration-200 ease hover:bg-btn-secondary-hover hover:shadow-btn-secondary-hover dark:bg-white dark:text-btn-primary-text dark:border-transparent dark:hover:bg-white/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
                >
                  Preview Project
                </a>
              </div>
            )}

            {/* Cover image */}
            <div className="mt-7 sm:mt-8 relative aspect-[16/10] w-full overflow-hidden rounded-[14px] sm:rounded-[16px] bg-nav-bg border border-border/70">
              <Image
                src={project.cover.asset.url}
                alt={project.cover.alt}
                fill
                unoptimized
                priority
                className="object-cover"
              />
            </div>

            {/* Case study stages */}
            {project.sections && project.sections.length > 0 && (
              <div className="mt-8 sm:mt-10 flex flex-col gap-8 sm:gap-10">
                {project.sections.map((section, idx) => (
                  <section
                    key={`${section.tag}-${idx}`}
                    className="flex flex-col"
                  >
                    <span className="font-display text-[13px] sm:text-[13.5px] font-medium text-text">
                      {section.tag}
                    </span>
                    <h2 className="mt-2.5 font-display text-[20px] font-medium text-text leading-snug">
                      {section.title}
                    </h2>
                    <p className="mt-3.5 text-[14px] text-muted font-normal leading-relaxed">
                      {section.description}
                    </p>

                    {/* Image gallery */}
                    {section.images && section.images.length > 0 && (
                      <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {section.images.map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] bg-nav-bg border border-border/70"
                          >
                            <Image
                              src={img.asset.url}
                              alt={img.alt}
                              fill
                              unoptimized
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>
            )}
          </main>
        </div>

        {/* Footer */}
        <Footer name={profile.name} />
      </div>
    </div>
  );
}
