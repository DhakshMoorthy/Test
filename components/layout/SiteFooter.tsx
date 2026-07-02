import { FOOTER_LINKS, SITE } from "../../lib/constants";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={SITE.logoFooter}
              alt={SITE.name}
              className="mb-4 h-8 w-auto"
            />
            <p className="max-w-xs text-[14px] leading-relaxed text-[#0a0a0a]/55">
              SAP partner for advisory, implementation, and managed services.
              Chennai delivery centre.
            </p>
          </div>

          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#0a0a0a]/40">
              Solutions
            </p>
            <ul className="space-y-2 list-none p-0 m-0">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#0a0a0a]/65 no-underline hover:text-[#0a0a0a]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-[#0a0a0a]/40">
              Company
            </p>
            <ul className="space-y-2 list-none p-0 m-0">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] text-[#0a0a0a]/65 no-underline hover:text-[#0a0a0a]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] text-[#0a0a0a]/55">{SITE.phone}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-[14px] text-[#0a0a0a]/55 no-underline hover:text-[#0a0a0a]"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-black/[0.06] pt-8 text-[12px] text-[#0a0a0a]/40 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Kannanware Innovations LLP</span>
          <span>SAP® is the trademark of SAP SE</span>
        </div>
      </div>
    </footer>
  );
}
