interface FooterProps {
  name?: string;
}

export function Footer({ name = "Zidan Maulana" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex w-full max-w-[756px] items-center justify-center py-6 sm:py-8 text-[13px] sm:text-[13.5px] text-muted"
      aria-label="Footer situs"
    >
      <div className="font-normal text-center select-none">
        {currentYear} &copy; {name}
      </div>
    </footer>
  );
}

