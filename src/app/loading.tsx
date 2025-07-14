export default function Loading() {
  return (
    <section className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-5xl">Loading...</h1>
      <span className="text-success loading loading-spinner loading-xl"></span>
    </section>
  );
}
