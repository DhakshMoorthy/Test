import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Kannanware" width={120} height={28} />
        </div>
        <div className="text-muted flex gap-6 text-sm">
          <a href="#" className="transition-colors hover:text-accent">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-accent">
            Contact
          </a>
        </div>
        <p className="text-muted text-xs">
          © {new Date().getFullYear()} Kannanware. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
