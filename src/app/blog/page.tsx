import { getAllBlogs } from "@/lib/blog";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Blog | WolfDev",
  description:
    "Read the latest web design and development insights from Youssef at WolfDev.",
  openGraph: {
    title: "Blog | WolfDev",
    description:
      "Read the latest web design and development insights from Youssef at WolfDev.",
    url: "https://you-div.netlify.app/blog",
    siteName: "WolfDev",
    images: [
      {
        url: "https://images.pexels.com/photos/4458/laptop-office-desk-computer.jpg",
      },
    ],
    type: "article",
  },
};

type BlogItem = {
  _id: string;
  title: string;
  sabTitle: string;
  desc: string;
  img: string;
};

export default async function Blog() {
  const data: BlogItem[] = await getAllBlogs();

  if (!data || data.length === 0) {
    return notFound();
  }

  return (
    <section>
      <h1 className="text-5xl md:text-6xl">Blog</h1>
      <div className="flex flex-col gap-20 my-20">
        {data.map(({ _id, title, sabTitle, img }) => (
          <Link
            href={`blog/${_id}`}
            key={_id}
            className="flex flex-col lg:flex-row gap-10 items-center "
          >
            <div>
              <Image
                src={img}
                alt={title}
                width={500}
                height={400}
                sizes="100vw"
                className="object-cover max-h-[300px]"
              />
            </div>

            <div className="flex-1 flex h-full flex-col gap-5">
              <h2 className="text-success text-4xl font-semibold">{title}</h2>
              <p className="text-lg">{sabTitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
