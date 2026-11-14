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
      {/* Project cover image */}
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

      {/* Project metadata and title */}
      <div className="mt-3 flex flex-col gap-0.5">
        <span className="text-[14px] font-normal text-muted">
          {project.category}
        </span>
        <h3 className="font-display text-[17px] font-medium text-text leading-snug">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}

