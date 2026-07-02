export default function About() {
  return (
    <section id="about" className="border-t border-black/[0.06] bg-[#fafafa]">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-[13px] font-medium uppercase tracking-wider text-[#0a0a0a]/45">
              About Kannanware
            </p>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-[#0a0a0a]">
              Your SAP partner in India.
            </h2>
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-[#0a0a0a]/55">
            <p>
              Kannanware helps enterprises adopt and run SAP — from blueprint
              through go-live and beyond. GST, e-invoicing, and statutory
              compliance are part of every engagement.
            </p>
            <p>
              Our Chennai delivery centre combines certified consultants with
              cost-effective execution for manufacturing, BFSI, FMCG, and
              services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
