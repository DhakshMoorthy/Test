import { HERO } from "../../lib/constants";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-12">
      <p className="mb-5 text-[13px] font-medium tracking-wide text-[#0a0a0a]/50">
        {HERO.label}
      </p>
      <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-[#0a0a0a]">
        {HERO.title}
      </h1>
      <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#0a0a0a]/55">
        {HERO.subtitle}
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#contact"
          className="inline-flex rounded-full bg-[#E8A000] px-6 py-3 text-[14px] font-semibold text-[#0a0a0a] no-underline transition-opacity hover:opacity-90"
        >
          {HERO.primaryCta}
        </a>
        <a
          href="#solutions"
          className="inline-flex text-[14px] font-medium text-[#0a0a0a]/70 no-underline transition-colors hover:text-[#0a0a0a]"
        >
          {HERO.secondaryCta} →
        </a>
      </div>
    </section>
  );
}
