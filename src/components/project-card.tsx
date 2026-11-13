import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/dummy-data";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug.current}`}
      className="group block rounded-[16px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
      aria-label={`Lihat studi kasus proyek ${project.title}`}
    >
      {/* Wadah Gambar Cover dengan Rasio 16:10 dan Efek Skala 1.03 Saat Hover */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-nav-bg border border-border/70">
        <Image
          src={project.cover.asset.url}
          alt={project.cover.alt}
          fill
          unoptimized
          sizes="(max-width: 640px) 100vw, 360px"
          className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
        />
      </div>

      {/* Teks Informasi Proyek: Kategori dan Judul */}
      <div className="mt-3 flex flex-col gap-0.5">
        <span className="text-[12.5px] sm:text-[13px] font-normal text-muted">
          {project.category}
        </span>
        <h3 className="font-display text-[15.5px] sm:text-[16.5px] font-medium text-text leading-snug transition-colors group-hover:text-muted">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

