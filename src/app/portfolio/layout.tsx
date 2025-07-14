import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | WolfDev",
  description:
    "Browse projects by Youssef in design, web development, and app interfaces. Built with passion and precision.",
  openGraph: {
    title: "Portfolio | WolfDev",
    description:
      "Browse projects by Youssef in design, web development, and app interfaces. Built with passion and precision.",
    url: "https://you-div.netlify.app/portfolio",
    images: [
      {
        url: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg",
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
