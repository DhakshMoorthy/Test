import { useState } from "react";
import { ChevronDown, Globe, Menu, Search, X } from "lucide-react";
import { NAV_ITEMS, SITE } from "../../lib/constants";

export default function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-[1000]">
        <div className="relative mx-auto mt-3 flex h-14 w-[calc(100%-16px)] min-w-0 items-center gap-2 rounded-[22px] border border-[#0a0a0a]/8 bg-white/80 px-3 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:mt-4 sm:h-[68px] sm:w-[calc(100%-32px)] sm:gap-3 sm:px-5 lg:mt-5 lg:w-[calc(100%-40px)] lg:max-w-[2000px] lg:gap-6 lg:rounded-[26px] lg:px-8">
          <a
            href="/in"
            className="flex min-w-0 shrink items-center gap-2 no-underline sm:gap-2.5 lg:gap-3"
          >
            <img
              src={SITE.logo}
              alt={SITE.name}
              className="kw-logo h-6 w-auto sm:h-7 lg:h-8"
            />
            <div className="hidden h-[28px] min-w-0 items-center gap-1.5 rounded-full border border-[#0a0a0a]/10 bg-white/80 px-2.5 sm:inline-flex lg:px-3">
              <img
                src={SITE.stagIcon}
                alt=""
                className="h-[14px] w-[14px] shrink-0 opacity-80"
              />
              <span className="whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[#0a0a0a]/70">
                AI FIRST
              </span>
              <span
                className="h-[12px] w-px shrink-0 bg-[#0a0a0a]/15"
                aria-hidden="true"
              />
              <span className="whitespace-nowrap font-mono text-[10px] font-medium uppercase tracking-[0.06em] text-[#0a0a0a]">
                SAP
              </span>
            </div>
          </a>

          <div className="hidden min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden lg:flex">
            <ul className="flex max-w-full list-none items-center gap-1 overflow-x-auto xl:gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex h-[30px] shrink-0 items-center gap-1 rounded-full px-3 py-0 text-[15px] font-medium tracking-[-0.01em] text-[#0a0a0a]/80 transition-all duration-200 hover:bg-[#0a0a0a]/5 hover:text-[#0a0a0a] xl:px-3.5 xl:text-[16px]"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className="h-[14px] w-[14px] shrink-0 text-[#0a0a0a]/30"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="ml-auto flex shrink-0 items-center gap-1.5 sm:gap-2.5 lg:ml-0 lg:gap-4">
            <button
              type="button"
              aria-label="Search site"
              className="inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full text-[#1a1a1a]/75 transition-colors duration-200 hover:text-[#E8A000]"
            >
              <Search className="h-[18px] w-[18px]" strokeWidth={2.15} />
            </button>

            <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
              <button
                type="button"
                className="flex h-[30px] shrink-0 items-center justify-center gap-1.5 rounded-[16px] border border-[#E8A000]/25 bg-white/90 px-3 text-[14px] font-medium leading-none text-[#1a1a1a] transition-all duration-200 hover:border-[#E8A000]/45 hover:bg-white"
              >
                <Globe
                  className="h-[16px] w-[16px] text-[#666]"
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <span className="uppercase tracking-[0.08em]">{SITE.region}</span>
                <ChevronDown className="h-[12px] w-[12px] text-[#E8A000]" />
              </button>

              <a
                href="#contact"
                className="inline-flex h-[30px] shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#0a0a0a]/12 bg-[#0a0a0a] px-6 text-[15px] font-semibold leading-none text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
              >
                Contact us
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#1a1a1a] lg:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="flex h-full flex-col items-center justify-center gap-6 px-6 pt-20">
            <img src={SITE.logo} alt={SITE.name} className="kw-logo h-8 w-auto" />
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xl font-medium text-[#1a1a1a] transition-colors hover:text-[#E8A000]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#0a0a0a] px-8 text-[15px] font-semibold text-white"
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
