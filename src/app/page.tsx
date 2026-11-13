import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Overview } from "@/components/overview";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";
import { dummyProfile, dummyProjects } from "@/lib/dummy-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pb-12">
      {/*
        Lapisan Penutup Atas (Canopy) - z-40:
        - Berada di posisi fixed dari y = -100px sampai separuh atas navbar (y = 44px)
        - Menggunakan warna bg-page (putih di light, gelap di dark)
        - Menutup penuh area di atas navbar dan ruang di luar sudut kiri atas & kanan atas navbar
        - Berhenti di y = 44px sehingga sama sekali tidak mengisi ruang di luar sudut bawah navbar
      */}
      <div
        className="fixed -top-[100px] left-0 right-0 h-[140px] sm:h-[144px] bg-page z-40 pointer-events-none"
        aria-hidden="true"
      />

      {/*
        Fixed Navbar Layer - z-50:
        - Berada di depan Canopy (z-50) sehingga badan navbar tidak tertutup oleh Canopy
        - Berbentuk kapsul permanen dengan rounded-[24px] penuh
        - Memiliki latar solid bg-nav-bg
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
        - Dimulai di y=12px (mobile) / y=16px (desktop) dengan pt-3 sm:pt-4
        - Modul 1 (Hero) memiliki sasis abu-abu dengan rounded-[24px] penuh
        - Bagian atas Modul 1 bertindak sebagai Latar Penghubung (Connecting Background):
          Tinggi navbar (56px/60px) + sela abu-abu = pt-[56px] sm:pt-[62px]
        - Saat scroll 0: Latar Penghubung abu-abu berada tepat di belakang navbar,
          sehingga navbar dan sasis Hero terlihat sebagai satu kesatuan objek abu-abu.
        - Saat scroll > 0: Card putih Hero meluncur ke atas dan masuk tertelan ke balik navbar,
          sementara siluet rounded kapsul navbar tetap terbaca jelas.
      */}
      <div className="w-full max-w-[756px] flex flex-col gap-3 relative z-10 pt-3 sm:pt-4">
        {/* Modul 1: Sasis Abu-abu Menampung Latar Penghubung dan Card Hero */}
        <div className="w-full rounded-[24px] bg-nav-bg px-[1.5px] pb-[2px] pt-[56px] sm:pt-[62px]">
          <Hero profile={dummyProfile} />
        </div>

        {/* Modul 2: Sasis Abu-abu Menampung Card About dan Section Projects */}
        <main className="w-full rounded-[25px] bg-nav-bg p-[1.5px] flex flex-col gap-[2px]">
          {/* Section About: Kartu Putih Mandiri */}
          <Overview profile={dummyProfile} />

          {/* Section Projects: Langsung Menempel pada Sasis Abu-abu */}
          <Projects projects={dummyProjects} />
        </main>

        {/* Footer Keterangan Sesuai Gambar 2 */}
        <Footer name={dummyProfile.name} />
      </div>
    </div>
  );
}
