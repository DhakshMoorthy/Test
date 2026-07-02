import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "../../lib/constants";

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-3 flex h-14 max-w-6xl items-center justify-between rounded-2xl border border-black/[0.06] bg-white/80 px-5 shadow-[0_1px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:mt-4 sm:h-[60px] sm:px-6">
          <a href="/in" className="flex items-center gap-3 no-underline">
            <img
              src={SITE.logo}
              alt={SITE.name}
              className="kw-logo-nav h-6 w-auto sm:h-7"
            />
            <span className="hidden rounded-full border border-[#E8A000]/30 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0a0a0a] sm:inline">
              AI FIRST | SAP
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] font-medium text-[#0a0a0a]/80 no-underline transition-colors hover:text-[#0a0a0a]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden text-[12px] font-medium uppercase tracking-wider text-[#0a0a0a]/50 sm:inline">
              {SITE.region}
            </span>
            <a
              href="#contact"
              className="hidden rounded-full bg-[#E8A000] px-4 py-2 text-[13px] font-semibold text-[#0a0a0a] no-underline transition-opacity hover:opacity-90 sm:inline-flex"
            >
              Contact
            </a>
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#0a0a0a] md:hidden"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white px-6 pt-24 md:hidden">
          <nav className="flex flex-col gap-6">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-[#0a0a0a] no-underline"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-4 inline-flex w-fit rounded-full bg-[#E8A000] px-6 py-3 text-[14px] font-semibold text-[#0a0a0a] no-underline"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
