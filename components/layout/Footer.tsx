export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-surface px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="font-display text-lg font-bold">
            <span className="gradient-text">Kannanware</span>
          </p>
          <p className="text-muted mt-1 text-sm">
            Transforming Businesses with Intelligent ERP & AI
          </p>
        </div>
        <div className="text-muted flex gap-6 text-sm">
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Terms
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
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
