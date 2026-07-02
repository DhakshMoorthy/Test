import { ArrowRight, Mail, Phone } from "lucide-react";
import { CONTACT, SITE } from "../../lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-[#0a0a0a]/6 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="kw-terminal relative overflow-hidden rounded-2xl border border-[#0a0a0a]/10 bg-[#0a0a0a] px-8 py-14 sm:px-14 sm:py-16">
          <div className="kw-grid-bg pointer-events-none absolute inset-0 opacity-[0.08]" />
          <div className="kw-scan-line pointer-events-none absolute inset-0 opacity-[0.05]" />
          <div className="relative">
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#E8A000]">
              SAP Advisory
            </p>
            <h2 className="max-w-lg text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              {CONTACT.title}
            </h2>
            <p className="mt-4 max-w-md text-[16px] font-medium leading-relaxed text-white/75">
              {CONTACT.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#E8A000] px-6 py-3 text-[14px] font-bold text-[#0a0a0a] no-underline transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(232,160,0,0.35)]"
              >
                {CONTACT.cta}
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-[15px] text-white/60 no-underline hover:text-white"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 text-[15px] text-white/60 no-underline hover:text-white"
              >
                <Mail className="h-4 w-4" strokeWidth={1.75} />
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
