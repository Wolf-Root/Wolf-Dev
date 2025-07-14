import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "WolfDev – Creative Front-End Developer",
  description:
    "Hi, I'm Youssef. I build modern, fast, and beautiful websites using Next.js, React, and Tailwind CSS.",

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  openGraph: {
    title: "WolfDev – Creative Front-End Developer",
    description:
      "Hi, I'm Youssef. I build modern, fast, and beautiful websites using Next.js, React, and Tailwind CSS.",
    url: "https://you-div.netlify.app/",
    siteName: "WolfDev",
    images: [
      {
        url: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
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
    <html lang="en">
      <body className="container mx-auto min-h-screen flex flex-col justify-between gap-5 px-2 md:px-0">
        <Header />
        <main>{children}</main>
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
