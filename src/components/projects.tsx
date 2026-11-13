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
      className="relative p-6 sm:p-8 md:p-[44px]"
    >
      {/* Judul dan Subtitle Section Proyek */}
      <div className="flex flex-col">
        <h2 className="font-display text-[20px] sm:text-[22px] font-medium tracking-[-0.01em] text-text">
          Case Studies &amp; Projects
        </h2>
        <p className="mt-1 text-[13.5px] sm:text-[14.5px] font-normal text-muted">
          A selection of projects showcasing frontend architecture, modern engineering, and measurable impact.
        </p>
      </div>

      {/* Grid 2 Kolom Kartu Proyek */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-5 sm:gap-y-7">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Tombol Aksi di Bagian Bawah: See All Projects */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          href="#projects"
          className="inline-flex h-[40px] cursor-pointer items-center justify-center rounded-[13px] border border-btn-secondary-border bg-surface px-6 font-display text-[13.5px] font-medium text-btn-secondary-text shadow-btn-secondary transition-all duration-200 ease hover:-translate-y-[2px] hover:bg-btn-secondary-hover active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
        >
          See All Projects
        </Link>
      </div>
    </section>
  );
}

