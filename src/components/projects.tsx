import Link from "next/link";
import type { Project } from "@/lib/dummy-data";
import { ProjectCard } from "@/components/project-card";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      aria-label="Studi Kasus dan Proyek"
      className="relative px-4 sm:px-6 md:px-7 py-6 sm:py-8 md:py-[44px]"
    >
      {/* Judul dan Subtitle Section Proyek */}
      <div className="flex flex-col">
        <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-text">
          Case Studies &amp; Projects
        </h2>
        <p className="mt-1 text-[14px] font-normal text-muted">
          A selection of projects showcasing frontend architecture, modern engineering, and measurable impact.
        </p>
      </div>

      {/* Grid 2 Kolom Kartu Proyek */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-5 sm:gap-y-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Tombol Aksi di Bagian Bawah: See my Projects Sesuai Screenshot Referensi */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex h-[44px] cursor-pointer items-center justify-center rounded-[14px] border border-btn-secondary-border bg-surface px-7 font-display text-[14.5px] font-medium text-btn-secondary-text shadow-btn-secondary transition-all duration-200 ease hover:bg-btn-secondary-hover hover:shadow-btn-secondary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
        >
          See my Projects
        </Link>
      </div>
    </section>
  );
}

