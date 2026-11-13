import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { dummyProjects } from "@/lib/dummy-data";

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
      title: "Proyek Tidak Ditemukan",
    };
  }

  return {
    title: `${project.title} | Portofolio Zidan Maulana`,
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
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pt-4 pb-12 sm:pt-5">
      <div className="w-full max-w-[756px] rounded-[22px] bg-nav-bg p-[2px] flex flex-col gap-[2px]">
        {/* Navigasi Kembali */}
        <div className="flex h-[64px] w-full items-center justify-between px-6 bg-transparent">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-muted transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-md px-2 py-1"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Kembali ke Beranda</span>
          </Link>
          <span className="text-[13px] text-muted">{project.category}</span>
        </div>

        {/* Konten Detail Proyek */}
        <article className="rounded-[20px] bg-surface p-6 sm:p-8 md:p-[44px]">
          {/* Header Judul dan Kategori */}
          <div className="flex flex-col gap-2">
            <span className="text-[13px] font-medium text-muted">
              {project.category} {project.year ? `· ${project.year}` : ""}
            </span>
            <h1 className="font-display text-[26px] sm:text-[32px] font-medium tracking-[-0.015em] text-text leading-tight">
              {project.title}
            </h1>
          </div>

          {/* Cover Gambar Proyek */}
          <div className="mt-6 sm:mt-8 relative aspect-[16/10] w-full overflow-hidden rounded-[16px] bg-nav-bg border border-border/80">
            <Image
              src={project.cover.asset.url}
              alt={project.cover.alt}
              fill
              unoptimized
              priority
              className="object-cover"
            />
          </div>

          {/* Ringkasan Proyek */}
          <div className="mt-8 text-[16px] sm:text-[17px] leading-[26px] sm:leading-[28px] text-muted">
            <p>{project.summary}</p>
          </div>

          {/* Tumpukan Teknologi (Tech Stack) */}
          {project.stack && project.stack.length > 0 && (
            <div className="mt-8 pt-8 border-t border-border">
              <h2 className="font-display text-[15px] font-medium text-text mb-3">
                Teknologi yang Digunakan
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-border px-3 py-1 text-[13px] font-medium text-muted bg-nav-bg/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tombol Tautan Aksi: Live Demo dan Repositori */}
          <div className="mt-8 pt-8 border-t border-border flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[40px] items-center justify-center rounded-[13px] border border-btn-primary-border bg-btn-primary-bg px-5 font-display text-[13.5px] font-medium text-btn-primary-text shadow-btn-primary transition-all hover:opacity-90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
              >
                Kunjungi Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[40px] items-center justify-center rounded-[13px] border border-btn-secondary-border bg-btn-secondary-bg px-5 font-display text-[13.5px] font-medium text-btn-secondary-text shadow-btn-secondary transition-all duration-500 ease-out hover:bg-btn-secondary-hover hover:shadow-btn-secondary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
              >
                Lihat Repositori
              </a>
            )}
          </div>
        </article>
      </div>
    </div>
  );
}

