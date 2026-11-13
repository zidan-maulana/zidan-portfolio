import type { Metadata } from "next";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Footer } from "@/components/footer";
import { dummyProfile, dummyProjects } from "@/lib/dummy-data";

export const metadata: Metadata = {
  title: "Projects | Zidan Maulana",
  description:
    "Selected case studies and projects showcasing frontend architecture, web engineering, and digital design.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pb-12">
      {/*
        Lapisan Penutup Atas (Canopy) - z-40:
        Menutup area di atas navbar dan ruang di luar sudut atas lengkungan navbar
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
        Mengikuti sistem Latar Penghubung yang identik dengan HomePage
      */}
      <div className="w-full max-w-[756px] flex flex-col items-center relative z-10 pt-3 sm:pt-4">
        {/* Sasis Abu-abu Menampung Card Grid Proyek */}
        <div className="w-full rounded-[24px] bg-nav-bg px-[1.5px] pb-[2px] pt-[56px] sm:pt-[62px]">
          <main className="relative z-10 overflow-hidden rounded-[24px] bg-surface px-4 sm:px-6 md:px-7 pt-5 sm:pt-7 md:pt-8 pb-6 sm:pb-8 md:pb-[44px]">
            {/* Grid 2 Kolom Seluruh Proyek dengan komposisi persis section Projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-5 sm:gap-y-7">
              {dummyProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </main>
        </div>

        {/* Footer Keterangan Sesuai Gambar 2 */}
        <Footer name={dummyProfile.name} />
      </div>
    </div>
  );
}
