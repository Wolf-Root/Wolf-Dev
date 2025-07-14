import Posts from "@/models/Posts";
import connectDB from "@/lib/mongodb";

export async function GET() {
  const baseUrl = process.env.baseUrl || "https://your-domain.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/portfolio",
    "/portfolio/Illustrations",
    "/portfolio/Websites",
    "/portfolio/Applications",
    "/blog",
  ];

  let blogRoutes: string[] = [];

  try {
    await connectDB();

    const data = await Posts.find().select("_id");

    if (Array.isArray(data)) {
      blogRoutes = data.map(({ _id }) => `/blog/${_id}`);
    } else {
      console.error("Blog API did not return an array.");
    }
  } catch (err) {
    console.error("Failed to fetch blog data:", err);
  }

  const allRoutes = [...staticRoutes, ...blogRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allRoutes
      .map((route) => {
        return `<url><loc>${baseUrl}${route}</loc></url>`;
      })
      .join("\n")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
