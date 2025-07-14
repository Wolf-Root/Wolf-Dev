import Button from "@/components/mainButton/Button";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-7xl md:text-8xl lg:text-9xl text-success font-mono">
        404
      </h1>
      <h2 className="text-5xl font-semibold leading-15 text-center">
        Sorry, There&apos;s
        <br />{" "}
        <span className="font-bold text-success font-mono">NOTHING HERE</span>
      </h2>
      <Button link="/" text="go home" />
    </section>
  );
}
