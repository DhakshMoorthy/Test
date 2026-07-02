export default function Contact() {
  return (
    <section id="contact" className="border-t border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="rounded-2xl bg-[#0a0a0a] px-8 py-14 sm:px-14 sm:py-16">
          <h2 className="max-w-md text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[-0.03em] text-white">
            Start your SAP journey.
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/55">
            Speak with our team about S/4HANA, cloud ERP, or on-demand SAP
            experts.
          </p>
          <a
            href="mailto:admin@kannanware.com"
            className="mt-8 inline-flex rounded-full bg-[#E8A000] px-6 py-3 text-[14px] font-semibold text-[#0a0a0a] no-underline transition-opacity hover:opacity-90"
          >
            admin@kannanware.com
          </a>
        </div>
      </div>
    </section>
  );
}
