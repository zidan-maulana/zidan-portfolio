import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Projects } from "@/components/projects";
import { dummyProfile, dummyProjects } from "@/lib/dummy-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pt-4 pb-12 sm:pt-5">
      {/* Kontainer Kolom Utama dengan Pemisahan Antarmodul */}
      <div className="w-full max-w-[756px] flex flex-col gap-4">
        {/* Modul 1: Card Home (Header + Hero) di dalam sasis abu-abu padding 2px */}
        <div className="w-full rounded-[22px] bg-nav-bg p-[2px] flex flex-col gap-[2px]">
          <Header
            timezone={dummyProfile.timezone}
            location={dummyProfile.location}
            socials={dummyProfile.socials}
          />
          <Hero profile={dummyProfile} />
        </div>

        {/* Modul 2: Sasis Abu-abu Menampung Card About dan Section Projects */}
        <main className="w-full rounded-[22px] bg-nav-bg p-[2px] flex flex-col gap-[2px]">
          {/* Section About: Berupa Kartu Putih Terpisah */}
          <Overview profile={dummyProfile} />

          {/* Section Projects: Langsung Menempel pada Sasis Abu-abu Tanpa Kartu Putih */}
          <Projects projects={dummyProjects} />
        </main>
      </div>
    </div>
  );
}
