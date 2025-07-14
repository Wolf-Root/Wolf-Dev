import connectDB from "./mongodb";
import Portfolio from "@/models/Portfolio";

export async function getPortfolioByCategory(category: string) {
  await connectDB();

  const validCategories = ["Illustrations", "Websites", "Applications"];
  if (!validCategories.includes(category)) {
    const error = new Error("Invalid category") as Error & { status?: number };
    error.status = 404;
    throw error;
  }

  const items = await Portfolio.find({ category });

  if (!items.length) {
    const error = new Error("No items found") as Error & { status?: number };
    error.status = 404;
    throw error;
  }

  return items.map(({ _id, title, desc, img, category }) => ({
    _id: _id.toString(),
    title,
    desc,
    img,
    category,
  }));
}
