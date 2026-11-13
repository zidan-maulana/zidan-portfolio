import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Projects } from "@/components/projects";
import { dummyProfile, dummyProjects } from "@/lib/dummy-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start">
      {/*
        Canopy penutup di atas navbar:
        - Menutup rentang y=0 sampai y=18px (serta area overscroll) dengan bg-page
        - Memastikan konten yang melewati batas atas navbar tertelan secara bersih
      */}
      <div
        className="fixed -top-[100px] left-0 right-0 h-[118px] bg-page z-50 pointer-events-none"
        aria-hidden="true"
      />

      {/*
        Fixed Navbar Layer:
        - Terpisah dari alur konten hero
        - Berjarak 18px dari atas viewport
        - Terpusat secara horizontal dengan lebar maksimal 760px
        - Margin kiri-kanan 16px (mobile) sampai 24px (desktop)
        - Di depan konten halaman (z-50)
      */}
      <div className="fixed top-[18px] left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <div className="w-full max-w-[760px] pointer-events-auto">
          <Header
            timezone={dummyProfile.timezone}
            location={dummyProfile.location}
            socials={dummyProfile.socials}
          />
        </div>
      </div>

      {/*
        Alur Konten Utama Halaman:
        - Dimulai dari jarak 18px dari atas (sejajar dengan posisi navbar)
        - Lebar maksimal 760px dengan margin kiri-kanan 16px (mobile) sampai 24px (desktop)
        - Scroll halaman utama (tanpa overflow scroll internal)
      */}
      <div className="w-full max-w-[760px] px-4 sm:px-6 pt-[18px] pb-12 flex flex-col items-center relative z-10">
        <div className="w-full flex flex-col gap-2">
          {/*
            Modul 1: Sasis Abu-abu Menampung Card Hero
            - Di awal halaman: Dimulai di y=18px dengan bg-nav-bg dan rounded-[24px],
              menyatu visual secara sempurna dengan navbar di atasnya.
            - Ruang awal (pt-[74px]): Memberi ruang pengganti sehingga card hero
              (avatar, nama, headline) berada tepat di bawah navbar dan tidak tertimpa.
            - Saat scroll: Sasis dan card hero bergerak naik meluncur ke belakang navbar.
          */}
          <div className="w-full rounded-[24px] bg-nav-bg px-[1.5px] pb-[1.5px] pt-[74px]">
            <Hero profile={dummyProfile} />
          </div>

          {/* Modul 2: Sasis Abu-abu Menampung Card About dan Section Projects */}
          <main className="w-full rounded-[25px] bg-nav-bg p-[1.5px] flex flex-col gap-[2px]">
            <Overview profile={dummyProfile} />
            <Projects projects={dummyProjects} />
          </main>
        </div>
      </div>
    </div>
  );
}
