import Link from "next/link";
import type { Project } from "@/lib/dummy-data";
import { ProjectCard } from "@/components/project-card";
import { HoverLift } from "@/components/hover-lift";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  // Hanya menampilkan maksimal 4 proyek di section Projects halaman beranda
  const displayedProjects = projects.slice(0, 4);

  return (
    <section
      id="projects"
      aria-label="Studi Kasus dan Proyek"
      className="relative px-4 sm:px-6 md:px-7 py-6 sm:py-8 md:py-[44px]"
    >
      {/* Section header */}
      <div className="flex flex-col">
        <h2 className="font-display text-[20px] font-medium tracking-[-0.01em] text-text">
          Case Studies &amp; Projects
        </h2>
        <p className="mt-1 text-[14px] font-normal text-muted">
          A selection of projects showcasing frontend architecture, modern engineering, and measurable impact.
        </p>
      </div>

      {/* Projects grid */}
      <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-5 sm:gap-y-7">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Action button */}
      <div className="mt-8 sm:mt-10 flex justify-center">
        <HoverLift>
          <Link
            href="/projects"
            className="inline-flex h-[44px] cursor-pointer items-center justify-center rounded-[14px] border border-btn-secondary-border bg-surface px-7 font-display text-[14.5px] font-medium text-btn-secondary-text shadow-btn-secondary transition-colors duration-200 ease hover:bg-btn-secondary-hover hover:shadow-btn-secondary-hover dark:bg-white dark:text-btn-primary-text dark:border-transparent dark:hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text"
          >
            See my Projects
          </Link>
        </HoverLift>
      </div>
    </section>
  );
}

