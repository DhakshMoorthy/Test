import { FOOTER_LINKS, SITE } from "../../lib/constants";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#0a0a0a]/6 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={SITE.logoFooter}
              alt={SITE.name}
              className="mb-4 h-8 w-auto"
              loading="lazy"
            />
            <p className="max-w-xs text-[14px] leading-relaxed text-[#0a0a0a]/55">
              SAP partner for advisory, implementation, and managed services.
              Chennai delivery centre.
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#0a0a0a]/40">
              Solutions
            </p>
            <ul className="m-0 list-none space-y-2 p-0">
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
            <p className="mb-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-[#0a0a0a]/40">
              Company
            </p>
            <ul className="m-0 list-none space-y-2 p-0">
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

        <div className="mt-12 border-t border-[#0a0a0a]/6 pt-6 text-center">
          <p className="font-mono text-[11px] text-[#0a0a0a]/35">
            © {new Date().getFullYear()} {SITE.name} Innovations LLP · SAP S/4HANA · Cloud ERP · Joule AI
          </p>
        </div>
      </div>
    </footer>
  );
}
