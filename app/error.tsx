"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-soft-grey px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-emerald">
        Something went wrong
      </p>
      <h1 className="mt-4 font-display text-3xl font-medium text-foreground">
        We hit a snag
      </h1>
      <p className="mt-3 max-w-md text-muted">
        {error.message || "Please refresh the page or try again in a moment."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-ocean px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ocean-light"
      >
        Try again
      </button>
    </div>
  );
}
