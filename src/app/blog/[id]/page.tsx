import { getBlogById } from "@/lib/blog";
import Image from "next/image";
import { notFound } from "next/navigation";

type PostType = {
  _id: string;
  title: string;
  sabTitle: string;
  desc: string;
  img: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const blog: PostType = await getBlogById(id);

    return {
      title: `${blog.title} | Blog | WolfDev`,
      description: blog.sabTitle,
      openGraph: {
        title: `${blog.title} | Blog | WolfDev`,
        description: blog.sabTitle,
        images: [{ url: blog.img }],
        type: "article",
      },
    };
  } catch {
    return {
      title: "Blog | WolfDev",
      description: "This blog post was not found.",
    };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post: PostType = await getBlogById(id);
  if (!post) {
    return notFound();
  }
  const { title, sabTitle, img, desc } = post;

  return (
    <section className="flex flex-col justify-between gap-20 md:gap-30">
      <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-10">
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-success">{title}</h1>
          <h2 className="font-medium">{sabTitle}</h2>

          <div className="flex gap-4 items-center text-lg">
            <Image
              src="https://images.pexels.com/photos/14547446/pexels-photo-14547446.jpeg"
              alt="Avatar"
              width={64}
              height={64}
              className="object-center rounded-full max-w-16 max-h-16"
            />
            <span>Kmal Kozan</span>
          </div>
        </div>
        <div className="flex-1">
          <Image src={img} alt={title} width={800} height={500} />
        </div>
      </div>
      <div>
        <p className="text-lg">{desc}</p>
      </div>
    </section>
  );
}
