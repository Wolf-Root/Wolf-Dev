import Button from "@/components/mainButton/Button";
import { getPortfolioByCategory } from "@/lib/portfolio";
import Image from "next/image";
import { notFound } from "next/navigation";

type PortfolioItem = {
  _id: string;
  title: string;
  desc: string;
  img: string;
  category: string;
};

const validCategories = ["Illustrations", "Websites", "Applications"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    return {
      title: "Portfolio | WolfDev",
      description: "Category not found.",
    };
  }

  try {
    const items: PortfolioItem[] = await getPortfolioByCategory(category);

    return {
      title: `${category} | Portfolio | WolfDev`,
      description: `Explore our latest ${category.toLowerCase()} projects.`,
      openGraph: {
        title: `${category} | Portfolio | WolfDev`,
        description: `Explore our latest ${category.toLowerCase()} projects.`,
        images: items.length > 0 ? [{ url: items[0].img }] : [],
        type: "website",
      },
    };
  } catch {
    return {
      title: "Portfolio | WolfDev",
      description: "Failed to load category.",
    };
  }
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  let items: PortfolioItem[];
  try {
    items = await getPortfolioByCategory(category);
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "status" in error &&
      (error as { status: number }).status === 404
    ) {
      return notFound();
    }

    throw error;
  }

  return (
    <section>
      <h2 className="text-success font-semibold text-4xl mt-8 capitalize">
        {category}
      </h2>

      <div className="flex flex-col gap-20 my-20">
        {items.map(({ _id, title, desc, img }) => (
          <div
            key={_id}
            className="flex flex-col-reverse lg:flex-row gap-10 items-center lg:even:flex-row-reverse"
          >
            <div className="flex-1 flex h-full flex-col gap-5">
              <h3 className="text-4xl md:text-5xl font-semibold">{title}</h3>
              <p className="text-lg">{desc}</p>
              <Button link="#" text="See More" />
            </div>

            <div className="flex-1">
              <Image
                src={img}
                alt={title}
                width={700}
                height={700}
                sizes="100vw"
                className="object-cover rounded-md max-h-[500px]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
