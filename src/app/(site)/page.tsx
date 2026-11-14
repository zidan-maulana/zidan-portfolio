import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Certification } from "@/components/certification";
import { Proficiencies } from "@/components/proficiencies";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import {
  getProfile,
  getProjects,
  getExperiences,
  getEducations,
  getCertifications,
  getProficiencies,
  getTools,
} from "@/lib/sanity/queries";

export const revalidate = 60;

export default async function HomePage() {
  const [
    profile,
    projects,
    experiences,
    educations,
    certifications,
    proficiencies,
    tools,
  ] = await Promise.all([
    getProfile(),
    getProjects(),
    getExperiences(),
    getEducations(),
    getCertifications(),
    getProficiencies(),
    getTools(),
  ]);

  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pb-16 sm:pb-24">
      {/* Canopy overlay layer (z-40) */}
      <div
        className="fixed -top-[100px] left-0 right-0 h-[140px] sm:h-[144px] bg-page z-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating navigation header (z-50) */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div className="w-full max-w-[756px] pt-3 sm:pt-4 pointer-events-auto">
          <Header
            timezone={profile.timezone}
            location={profile.location}
            socials={profile.socials}
          />
        </div>
      </div>

      {/* Main page content (z-10) */}
      <main className="w-full max-w-[756px] flex flex-col gap-3 relative z-10 pt-3 sm:pt-4">
        {/* Module 1: Hero */}
        <div className="w-full rounded-[24px] bg-nav-bg px-[1.5px] pb-[2px] pt-[56px] sm:pt-[62px]">
          <Hero profile={profile} />
        </div>

        {/* Module 2: About & Projects */}
        <div className="w-full rounded-[25px] bg-nav-bg p-[1.5px] flex flex-col gap-[2px]">
          <Overview profile={profile} />
          <Projects projects={projects} />
        </div>

        {/* Module 3: Experience */}
        {experiences && experiences.length > 0 && (
          <Experience experiences={experiences} />
        )}

        {/* Module 4: Education */}
        {educations && educations.length > 0 && (
          <Education educations={educations} />
        )}

        {/* Module 5: Certification */}
        {certifications && certifications.length > 0 && (
          <Certification certifications={certifications} />
        )}

        {/* Module 6: Proficiencies & Contact */}
        <div className="w-full rounded-[24px] sm:rounded-[25px] bg-nav-bg p-[1.5px] sm:p-[2px] flex flex-col gap-[2px]">
          <Proficiencies
            skills={proficiencies}
            tools={tools}
            className="relative w-full overflow-hidden px-4 sm:px-6 md:px-7 pt-5 sm:pt-6 md:pt-7 pb-4 sm:pb-5"
          />
          <Contact profile={profile} />
        </div>

        {/* Footer */}
        <Footer name={profile.name} />
      </main>
    </div>
  );
}
