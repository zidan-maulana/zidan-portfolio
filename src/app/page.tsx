import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Projects } from "@/components/projects";
import { dummyProfile, dummyProjects } from "@/lib/dummy-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pb-12 pt-3 sm:pt-4">
      {/*
        Top Screen Mask:
        Menutupi area di atas navbar (0 sampai 12px/16px) dengan warna bg-page.
        Memastikan konten yang melintas ke atas tertelan bersih dan tidak bocor ke atas layar.
      */}
      <div
        className="fixed top-0 left-0 right-0 h-3 sm:h-4 bg-page z-50 pointer-events-none"
        aria-hidden="true"
      />

      {/*
        Fixed Navbar Layer:
        - Posisi fixed di top-3 sm:top-4 dengan z-50
        - Terpusat sempurna dengan max-w-[756px]
        - Menggunakan pointer-events-none pada wrapper luar agar area samping tetap dapat di-klik
      */}
      <div className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div className="w-full max-w-[756px] pointer-events-auto">
          <Header
            timezone={dummyProfile.timezone}
            location={dummyProfile.location}
            socials={dummyProfile.socials}
          />
        </div>
      </div>

      {/*
        Konten Utama yang Mengalir (z-10):
        - Menggunakan lebar max-w-[756px] yang identik
        - Modul 1 (Hero) memiliki sasis abu-abu dengan rounded-[24px] penuh
        - Spacer di bagian atas Modul 1 setinggi navbar (58px mobile, 62px desktop)
          membuat area sasis abu-abu di balik navbar menyatu sempurna saat scroll 0
        - Saat di-scroll, kartu putih Hero meluncur ke atas dan masuk tertelan ke bawah navbar
      */}
      <div className="w-full max-w-[756px] flex flex-col gap-2 relative z-10">
        {/* Modul 1: Sasis Abu-abu Menampung Card Hero */}
        <div className="w-full rounded-[24px] bg-nav-bg p-[1.5px] flex flex-col">
          {/* Spacer penyatu visual dengan navbar saat scroll 0 */}
          <div
            className="h-[58px] sm:h-[62px] w-full shrink-0"
            aria-hidden="true"
          />
          <Hero profile={dummyProfile} />
        </div>

        {/* Modul 2: Sasis Abu-abu Menampung Card About dan Section Projects */}
        <main className="w-full rounded-[25px] bg-nav-bg p-[1.5px] flex flex-col gap-[2px]">
          <Overview profile={dummyProfile} />
          <Projects projects={dummyProjects} />
        </main>
      </div>
    </div>
  );
}
