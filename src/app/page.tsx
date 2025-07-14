import Button from "@/components/mainButton/Button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <div className="w-full md:flex-1 flex flex-col justify-between gap-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl capitalize bg-linear-to-b from-success to-base-content bg-clip-text text-transparent">
          Better design for your digital <br /> products.
        </h1>
        <p className="text-xl opacity-90">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button link="/portfolio" text="See Our Works" />
      </div>

      <div className="w-full md:flex-1 flex items-center justify-center animate-move">
        <Image src="/hero.png" width={700} height={700} alt="Hero Img" priority={true} />
      </div>
    </section>
  );
}
