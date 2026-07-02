import { FOOTER_LINKS, SITE } from "../../lib/constants";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#0a0a0a]/8 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img
              src={SITE.logoFooter}
              alt={SITE.name}
              className="kw-footer-logo mb-3"
              width={52}
              height={18}
              loading="lazy"
            />
            <p className="max-w-xs text-[14px] font-medium leading-relaxed text-[#3d3d3d]">
              SAP partner for advisory, implementation, and managed services.
              Chennai delivery centre.
            </p>
          </div>

          <div>
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-wider text-[#E8A000]">
              Solutions
            </p>
            <ul className="m-0 list-none space-y-2 p-0">
              {FOOTER_LINKS.solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] font-medium text-[#141414] no-underline hover:text-[#E8A000]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-wider text-[#E8A000]">
              Company
            </p>
            <ul className="m-0 list-none space-y-2 p-0">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[14px] font-medium text-[#141414] no-underline hover:text-[#E8A000]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px] font-medium text-[#3d3d3d]">{SITE.phone}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="text-[14px] font-medium text-[#3d3d3d] no-underline hover:text-[#E8A000]"
            >
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-[#0a0a0a]/8 pt-5 text-center">
          <p className="font-mono text-[11px] font-medium text-[#525252]">
            © {new Date().getFullYear()} {SITE.name} Innovations LLP · SAP S/4HANA · Cloud ERP · Joule AI
          </p>
        </div>
      </div>
    </footer>
  );
}
