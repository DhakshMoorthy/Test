type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-12 max-w-3xl ${alignClass}`}>
      <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#E8A000]">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0a0a0a]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] leading-relaxed text-[#0a0a0a]/55">
          {description}
        </p>
      )}
    </div>
  );
}
