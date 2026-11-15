import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  getProfile,
  getCertificationById,
  getCertificationIds,
} from "@/lib/sanity/queries";

interface CertificationDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const ids = await getCertificationIds();
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: CertificationDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const [cert, profile] = await Promise.all([
    getCertificationById(id),
    getProfile(),
  ]);

  if (!cert) {
    return {
      title: "Certification Not Found",
    };
  }

  return {
    title: `${cert.title} | ${profile.name}`,
    description:
      cert.description ||
      `Dokumen sertifikasi resmi diterbitkan oleh ${cert.issuer} pada ${cert.date}.`,
  };
}

export default async function CertificationDetailPage({
  params,
}: CertificationDetailPageProps) {
  const { id } = await params;
  const [cert, profile] = await Promise.all([
    getCertificationById(id),
    getProfile(),
  ]);

  if (!cert) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-page text-text flex flex-col items-center justify-start px-3 sm:px-6 pb-12">
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
      <div className="w-full max-w-[756px] flex flex-col items-center relative z-10 pt-3 sm:pt-4">
        <div className="w-full rounded-[24px] bg-nav-bg px-[1.5px] pb-[2px] pt-[56px] sm:pt-[62px]">
          <main className="relative z-10 overflow-hidden rounded-[24px] bg-surface px-5 sm:px-7 md:px-[32px] pt-7 sm:pt-8 md:pt-[36px] pb-5 sm:pb-7 md:pb-[32px]">
            {/* Category / Issuer and date */}
            <div className="text-[13px] sm:text-[14px] font-normal text-muted">
              {cert.issuer}
              {cert.date ? ` · ${cert.date}` : ""}
            </div>

            {/* Certification title */}
            <h1 className="mt-2 font-display text-[26px] font-medium tracking-[-0.015em] text-text leading-tight">
              {cert.title}
            </h1>

            {/* Certification summary / description */}
            <p className="mt-2.5 max-w-[620px] text-[14px] font-normal text-muted leading-relaxed">
              {cert.description ||
                `Dokumen sertifikasi resmi diterbitkan oleh ${cert.issuer} pada ${cert.date}.`}
            </p>

            {/* Certificate image preview container */}
            {cert.image?.asset?.url ? (
              <div className="mt-7 sm:mt-8 relative aspect-[16/10] w-full overflow-hidden rounded-[14px] sm:rounded-[16px] bg-nav-bg border border-border/70">
                <Image
                  src={cert.image.asset.url}
                  alt={cert.image.alt || cert.title}
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="mt-7 sm:mt-8 aspect-[16/10] w-full rounded-[14px] sm:rounded-[16px] bg-nav-bg border border-border/70 flex flex-col items-center justify-center p-6 text-center">
                <svg
                  className="h-10 w-10 text-muted/60 mb-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <span className="text-[14px] font-medium text-text">
                  Foto Sertifikat Belum Diunggah
                </span>
                <span className="mt-1 text-[13px] text-muted max-w-sm">
                  Unggah file foto sertifikat pada dashboard Sanity Studio untuk menampilkannya di halaman ini.
                </span>
              </div>
            )}
          </main>
        </div>

        {/* Footer */}
        <Footer name={profile.name} />
      </div>
    </div>
  );
}
