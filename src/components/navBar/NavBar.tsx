"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links: { title: string; url: string }[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Dashboard",
    url: "/dashboard",
  },
];

export default function NavBar() {
  const path = usePathname();
  return Links.map(({ title, url }, index) => (
    <li
      key={index}
      className={`text-lg font-semibold duration-300 ${
        path === url || path.startsWith(url + "/")
          ? "text-success underline underline-offset-8"
          : "hover:text-success"
      }`}
    >
      <Link href={url}>{title}</Link>
    </li>
  ));
}
