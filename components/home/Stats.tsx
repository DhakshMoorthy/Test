import { STATS } from "../../lib/constants";

export default function Stats() {
  return (
    <section className="border-y border-black/[0.06] bg-[#fafafa]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 sm:grid-cols-4 sm:px-8">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-[2rem] font-semibold tracking-tight text-[#0a0a0a] sm:text-[2.25rem]">
              {stat.value}
            </p>
            <p className="mt-1 text-[13px] text-[#0a0a0a]/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
