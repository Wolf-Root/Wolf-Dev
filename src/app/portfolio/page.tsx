import Link from "next/link";

export default function Portfolio() {
  return (
    <section className="flex flex-col gap-10">
      <h2 className="text-success">Choose a gallery</h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <Link
          href="/portfolio/Illustrations"
          className="w-[300px] h-[400px] border-4 border-[#bbb] rounded-md relative bg-[url(/illustration.png)] bg-cover group duration-300 hover:border-success"
        >
          <span className="text-[#bbb] absolute right-2.5 bottom-2.5 text-4xl font-bold duration-300 group-hover:text-success">
            Illustrations
          </span>
        </Link>

        <Link
          href="/portfolio/Websites"
          className="w-[300px] h-[400px] border-4 border-[#bbb] rounded-md relative bg-[url(/websites.jpg)] bg-cover group duration-300 hover:border-success"
        >
          <span className="text-[#bbb] absolute right-2.5 bottom-2.5 text-4xl font-bold duration-300 group-hover:text-success">
            Websites
          </span>
        </Link>

        <Link
          href="/portfolio/Applications"
          className="w-[300px] h-[400px] border-4 border-[#bbb] rounded-md relative bg-[url(/apps.jpg)] bg-cover group duration-300 hover:border-success"
        >
          <span className="text-[#bbb] absolute right-2.5 bottom-2.5 text-4xl font-bold duration-300 group-hover:text-success">
            Applications
          </span>
        </Link>
      </div>
    </section>
  );
}
