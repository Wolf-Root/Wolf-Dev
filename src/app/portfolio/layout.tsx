import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | WolfDev",
  description:
    "Browse projects by Youssef in design, web development, and app interfaces. Built with passion and precision.",
  openGraph: {
    title: "Portfolio | WolfDev",
    description:
      "Browse projects by Youssef in design, web development, and app interfaces. Built with passion and precision.",
    url: "https://wolf-dev.vercel.app/portfolio",
    images: [
      {
        url: "https://images.pexels.com/photos/7735630/pexels-photo-7735630.jpeg",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-5xl md:text-6xl lg:text-7xl">Our Works</h1>
      {children}
    </>
  );
}
