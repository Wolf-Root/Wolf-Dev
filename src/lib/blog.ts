import connectDB from "./mongodb";
import Posts from "@/models/Posts";

export async function getAllBlogs() {
  await connectDB();
  const blogs = await Posts.find();

  return blogs.map(({ _id, title, sabTitle, desc, img }) => ({
    _id: _id.toString(),
    title,
    sabTitle,
    desc,
    img,
  }));
}

export async function getBlogById(id: string) {
  await connectDB();
  const blog = await Posts.findById(id);

  if (!blog) {
    const error = new Error("Not Found") as Error & { status?: number };
    error.status = 404;
    throw error;
  }

  return {
    _id: blog._id.toString(),
    title: blog.title,
    sabTitle: blog.sabTitle,
    desc: blog.desc,
    img: blog.img,
  };
}
