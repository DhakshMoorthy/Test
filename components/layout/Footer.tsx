import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Image src="/assets/kannanware/kw-logo.png" alt="Kannanware" width={140} height={32} />
        <div className="text-muted flex gap-6 text-sm">
          <a href="#" className="transition-colors hover:text-accent-dark">Privacy</a>
          <a href="#" className="transition-colors hover:text-accent-dark">Terms</a>
          <a href="#" className="transition-colors hover:text-accent-dark">Contact</a>
        </div>
        <p className="text-muted text-xs">
          © {new Date().getFullYear()} Kannanware. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
