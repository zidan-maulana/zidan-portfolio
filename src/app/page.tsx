import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { dummyProfile } from "@/lib/dummy-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page text-text flex flex-col py-3">
      <Header
        timezone={dummyProfile.timezone}
        location={dummyProfile.location}
        socials={dummyProfile.socials}
      />
      <main className="flex-1 w-full">
        <Hero profile={dummyProfile} />
      </main>
    </div>
  );
}
