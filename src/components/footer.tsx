import Link from "next/link";

interface FooterProps {
  name?: string;
}

export function Footer({ name = "Zidan Maulana" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex w-full max-w-[756px] flex-col sm:flex-row items-center justify-between gap-4 py-8 px-2 sm:px-4 text-[13.5px] text-muted"
      aria-label="Footer situs"
    >
      <div className="font-normal">
        Copyright &copy; {currentYear} {name}.
      </div>
      <div className="flex items-center gap-6 font-normal">
        <Link
          href="/privacy"
          className="transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-sm"
        >
          Privacy Policy
        </Link>
        <Link
          href="/terms"
          className="transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-sm"
        >
          Terms of Service
        </Link>
        <Link
          href="/404"
          className="transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text rounded-sm"
        >
          404
        </Link>
      </div>
    </footer>
  );
}

