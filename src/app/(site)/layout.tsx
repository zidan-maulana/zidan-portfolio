import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ProgressiveBlur } from "@/components/progressive-blur";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScrollProvider>
      {children}
      <ProgressiveBlur />
    </SmoothScrollProvider>
  );
}
