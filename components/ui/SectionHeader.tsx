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
      <p className="kw-eyebrow mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#E8A000]">
        {eyebrow}
      </p>
      <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold leading-[1.12] tracking-[-0.03em] text-[#0a0a0a]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] font-medium leading-relaxed text-[#3d3d3d]">
          {description}
        </p>
      )}
    </div>
  );
}
