"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <p className="text-accent-dark text-sm font-semibold tracking-widest uppercase">Something went wrong</p>
      <h1 className="font-display mt-4 text-3xl font-bold">We hit a snag</h1>
      <p className="text-muted mt-3 max-w-md">{error.message || "Please refresh and try again."}</p>
      <button type="button" onClick={reset} className="bg-accent hover:bg-accent-light mt-8 rounded-full px-8 py-3.5 text-sm font-semibold text-[#090909] transition-colors">
        Try again
      </button>
    </div>
  );
}
