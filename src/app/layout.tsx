import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ProgressiveBlur } from "@/components/progressive-blur";
import { dummyProfile } from "@/lib/dummy-data";
import "./globals.css";

const interDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/InterDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterDisplay-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/InterDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${dummyProfile.name} | ${dummyProfile.role}`,
  description: dummyProfile.shortBio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={interDisplay.variable}
      suppressHydrationWarning
    >
      <body className="antialiased min-h-screen bg-page text-text font-display">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
          <ProgressiveBlur />
        </ThemeProvider>
      </body>
    </html>
  );
}
