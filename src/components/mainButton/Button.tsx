import Link from "next/link";
import React from "react";

export default function Button({ text, link }: { text: string; link: string }) {
  return (
    <Link href={link} className="w-fit btn py-5 btn-success text-lg font-semibold text-base-content capitalize">
      {text}
    </Link>
  );
}
