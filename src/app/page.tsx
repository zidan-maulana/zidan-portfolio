import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Projects } from "@/components/projects";
import { dummyProfile, dummyProjects } from "@/lib/dummy-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pb-12">
      {/*
        Fixed Navbar Layer:
        - Posisi fixed di top-0 dengan z-50
        - bg-page menutupi semua konten yang melintas di belakangnya
        - Konten halaman tertelan ke bawah navbar saat di-scroll
      */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 bg-page">
        <div className="w-full max-w-[756px] pt-3 sm:pt-4">
          <Header
            timezone={dummyProfile.timezone}
            location={dummyProfile.location}
            socials={dummyProfile.socials}
          />
        </div>
      </div>

      {/*
        Konten yang bisa di-scroll:
        - pt offset = page padding-top (12px/16px) + navbar (62px) + sasis gap (0px)
        - Hero sasis tanpa rounded atas agar menyatu mulus dengan navbar
      */}
      <div className="w-full max-w-[756px] flex flex-col gap-2 pt-[74px] sm:pt-[78px]">
        {/* Modul 1: Sasis Abu-abu menampung Card Hero */}
        <div className="w-full rounded-b-[24px] bg-nav-bg px-[1.5px] pb-[1.5px]">
          <Hero profile={dummyProfile} />
        </div>

        {/* Modul 2: Sasis Abu-abu Menampung Card About dan Section Projects */}
        <main className="w-full rounded-[25px] bg-nav-bg p-[1.5px] flex flex-col gap-[2px]">
          {/* Section About: Kartu Putih Mandiri */}
          <Overview profile={dummyProfile} />

          {/* Section Projects: Langsung Menempel pada Sasis Abu-abu */}
          <Projects projects={dummyProjects} />
        </main>
      </div>
    </div>
  );
}
