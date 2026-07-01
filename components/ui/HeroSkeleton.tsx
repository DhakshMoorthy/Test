export default function HeroSkeleton() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-foreground"
      aria-label="Loading hero"
    >
      <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
      <div className="relative z-10 flex flex-col items-center gap-4 px-6">
        <div className="h-16 w-16 rounded-full bg-white/10" />
        <div className="h-4 w-32 rounded-full bg-white/10" />
        <div className="h-10 w-72 max-w-full rounded-lg bg-white/10" />
        <div className="h-4 w-56 rounded-full bg-white/10" />
      </div>
    </section>
  );
}
