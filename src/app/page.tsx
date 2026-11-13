import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Projects } from "@/components/projects";
import { dummyProfile, dummyProjects } from "@/lib/dummy-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pt-4 pb-12 sm:pt-5">
      {/* Modul Luar: Lebar tepat 756px dengan sasis abu-abu padding 2px persis inspeksi referensi */}
      <div className="w-full max-w-[756px] rounded-[22px] bg-nav-bg p-[2px] flex flex-col gap-[2px]">
        <Header
          timezone={dummyProfile.timezone}
          location={dummyProfile.location}
          socials={dummyProfile.socials}
        />
        <main className="w-full flex flex-col gap-[2px]">
          <Hero profile={dummyProfile} />
          <Overview profile={dummyProfile} />
          <Projects projects={dummyProjects} />
        </main>
      </div>
    </div>
  );
}
