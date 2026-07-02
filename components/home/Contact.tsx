import { CONTACT, SITE } from "../../lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-black/[0.06] bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="rounded-2xl bg-[#0a0a0a] px-8 py-14 sm:px-14 sm:py-16">
          <h2 className="max-w-lg text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-white">
            {CONTACT.title}
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-white/55">
            {CONTACT.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex rounded-full bg-[#E8A000] px-6 py-3 text-[14px] font-semibold text-[#0a0a0a] no-underline transition-opacity hover:opacity-90"
            >
              {CONTACT.cta}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="text-[15px] text-white/70 no-underline hover:text-white"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
