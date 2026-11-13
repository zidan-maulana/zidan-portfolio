import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { dummyProfile, dummyProjects } from "@/lib/dummy-data";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return dummyProjects.map((project) => ({
    slug: project.slug.current,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = dummyProjects.find((p) => p.slug.current === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | ${dummyProfile.name}`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = dummyProjects.find((p) => p.slug.current === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pb-12">
      {/*
        Lapisan Penutup Atas (Canopy) - z-40:
        Menutup area di atas navbar dan ruang di luar sudut lengkungan atas
      */}
      <div
        className="fixed -top-[100px] left-0 right-0 h-[140px] sm:h-[144px] bg-page z-40 pointer-events-none"
        aria-hidden="true"
      />

      {/*
        Fixed Navbar Layer - z-50:
        Navbar kapsul konsisten dengan glassmorphism dan rounded-[24px]
      */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div className="w-full max-w-[756px] pt-3 sm:pt-4 pointer-events-auto">
          <Header
            timezone={dummyProfile.timezone}
            location={dummyProfile.location}
            socials={dummyProfile.socials}
          />
        </div>
      </div>

      {/*
        Konten Utama yang Mengalir (z-10):
        Mengikuti sistem Latar Penghubung yang identik dengan HomePage dan ProjectsPage
      */}
      <div className="w-full max-w-[756px] flex flex-col items-center relative z-10 pt-3 sm:pt-4">
        {/* Sasis Abu-abu Menampung Card Detail Proyek */}
        <div className="w-full rounded-[24px] bg-nav-bg px-[1.5px] pb-[2px] pt-[56px] sm:pt-[62px]">
          <main className="relative z-10 overflow-hidden rounded-[24px] bg-surface px-6 sm:px-8 md:px-[44px] pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-10 md:pb-12">
            {/* Metadata Kategori dan Periode Waktu */}
            <div className="text-[13px] sm:text-[14px] font-normal text-muted">
              {project.category}
              {project.timeline
                ? ` · ${project.timeline}`
                : project.year
                ? ` · ${project.year}`
                : ""}
            </div>

            {/* Judul Utama Proyek */}
            <h1 className="mt-2 font-display text-[26px] sm:text-[32px] md:text-[36px] font-medium tracking-[-0.02em] text-text leading-tight">
              {project.title}
            </h1>

            {/* Ringkasan / Deskripsi Proyek */}
            <p className="mt-2.5 max-w-[620px] text-[14px] sm:text-[14.5px] font-normal text-muted leading-relaxed">
              {project.summary}
            </p>

            {/* Tombol Preview Project */}
            {project.liveUrl && (
              <div className="mt-5 sm:mt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[38px] sm:h-[40px] items-center justify-center rounded-[12px] border border-btn-secondary-border bg-surface px-5 font-display text-[13.5px] sm:text-[14px] font-medium text-btn-secondary-text shadow-btn-secondary transition-all duration-200 ease hover:bg-btn-secondary-hover hover:shadow-btn-secondary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
                >
                  Preview Project
                </a>
              </div>
            )}

            {/* Gambar Cover Utama */}
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

            {/* Bagian Tahapan Proyek (Ideation & Conceptual, Production & Execution) */}
            {project.sections && project.sections.length > 0 && (
              <div className="mt-2 flex flex-col gap-8 sm:gap-10">
                {project.sections.map((section, idx) => (
                  <section
                    key={`${section.tag}-${idx}`}
                    className="flex flex-col pt-6 sm:pt-8"
                  >
                    <span className="font-display text-[13px] sm:text-[13.5px] font-medium text-text">
                      {section.tag}
                    </span>
                    <h2 className="mt-2 font-display text-[18px] sm:text-[20px] md:text-[21px] font-medium text-text leading-snug">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-[13.5px] sm:text-[14px] text-muted font-normal leading-relaxed">
                      {section.description}
                    </p>

                    {/* Galeri Gambar 2 Kolom untuk Tahapan Ideation */}
                    {section.images && section.images.length > 0 && (
                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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

        {/* Footer Sesuai Gambar Referensi */}
        <Footer name={dummyProfile.name} />
      </div>
    </div>
  );
}
