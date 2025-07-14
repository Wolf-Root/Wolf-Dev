"use client";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: unknown;
  reset: () => void;
}) {
  const typedError = error as Error;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-7xl md:text-8xl lg:text-9xl text-success font-mono">
        500
      </h1>
      <h2 className="font-semibold text-center">
        Sorry, an unexpected error has occurred.
      </h2>
      <p className="text-3xl font-semibold">{typedError.message}</p>
      <div className="flex gap-2">
        <button className="btn btn-success uppercase font-bold">
          <Link href="/">go home</Link>
        </button>
        <button
          className="btn btn-outline btn-success uppercase font-bold"
          onClick={() => reset()}
        >
          Retry
        </button>
      </div>
    </section>
  );
}
