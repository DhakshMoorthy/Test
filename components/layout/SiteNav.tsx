import { useState } from "react";
import { ChevronDown, Globe, Menu, Search, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "../../lib/constants";

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[1000]">
        <div className="relative mx-auto mt-3 flex h-12 w-[calc(100%-16px)] min-w-0 items-center gap-2 rounded-2xl border border-[#E8A000]/20 bg-white/92 px-3 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl sm:mt-4 sm:h-14 sm:w-[calc(100%-32px)] sm:gap-3 sm:px-4 lg:mt-5 lg:w-[calc(100%-40px)] lg:max-w-6xl lg:rounded-[22px] lg:px-6">
          <a
            href="/in"
            className="flex min-w-0 max-w-[48%] shrink items-center gap-2 no-underline sm:max-w-none sm:gap-2.5"
            aria-label={`${SITE.name} home`}
          >
            <img
              src={SITE.logo}
              alt={SITE.name}
              className="kw-nav-logo shrink-0"
              width={128}
              height={24}
            />
            <div className="hidden min-w-0 items-center gap-1 rounded-full border border-[#E8A000]/30 bg-[#E8A000]/[0.06] px-2 py-0.5 sm:inline-flex">
              <img
                src={SITE.stagIcon}
                alt=""
                className="h-3 w-3 shrink-0"
                width={12}
                height={12}
              />
              <span className="whitespace-nowrap font-mono text-[9px] font-bold uppercase tracking-[0.05em] text-[#E8A000]">
                AI
              </span>
              <span className="h-2.5 w-px shrink-0 bg-[#E8A000]/35" aria-hidden="true" />
              <span className="whitespace-nowrap font-mono text-[9px] font-semibold uppercase tracking-[0.05em] text-[#0a0a0a]">
                SAP
              </span>
            </div>
          </a>

          <div className="hidden min-h-0 min-w-0 flex-1 items-center justify-center lg:flex">
            <ul className="flex list-none items-center gap-0.5 p-0 xl:gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex h-8 shrink-0 items-center gap-0.5 rounded-full px-2.5 text-[14px] font-semibold tracking-[-0.01em] text-[#0a0a0a] transition-colors hover:bg-[#E8A000]/10 hover:text-[#0a0a0a] xl:px-3 xl:text-[15px]"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className="h-3 w-3 shrink-0 text-[#E8A000]/70"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1 sm:gap-2">
            <button
              type="button"
              aria-label="Search site"
              className="hidden h-8 w-8 items-center justify-center rounded-full text-[#0a0a0a] transition-colors hover:bg-[#E8A000]/10 hover:text-[#E8A000] sm:inline-flex"
            >
              <Search className="h-4 w-4" strokeWidth={2.15} />
            </button>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <button
                type="button"
                className="flex h-8 items-center justify-center gap-1 rounded-full border border-[#E8A000]/25 bg-white px-2.5 text-[13px] font-semibold text-[#0a0a0a] transition-colors hover:border-[#E8A000]/45 hover:bg-[#E8A000]/5"
              >
                <Globe className="h-3.5 w-3.5 text-[#525252]" strokeWidth={1.75} aria-hidden="true" />
                <span className="uppercase tracking-[0.06em]">{SITE.region}</span>
                <ChevronDown className="h-3 w-3 text-[#E8A000]" />
              </button>

              <a
                href="#contact"
                className="inline-flex h-8 items-center justify-center whitespace-nowrap rounded-full bg-[#E8A000] px-5 text-[14px] font-bold text-[#0a0a0a] no-underline transition-all hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(232,160,0,0.35)]"
              >
                Contact us
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[#0a0a0a] lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[1001] bg-white/98 backdrop-blur-xl lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-5 px-6 pt-16">
            <img
              src={SITE.logo}
              alt={SITE.name}
              className="kw-nav-logo mb-2"
              width={128}
              height={24}
            />
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-semibold text-[#0a0a0a] no-underline transition-colors hover:text-[#E8A000]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-[#E8A000] px-8 text-[15px] font-bold text-[#0a0a0a] no-underline"
              onClick={() => setMobileOpen(false)}
            >
              Contact us
            </a>
          </div>
        </div>
      )}
    </>
  );
}
