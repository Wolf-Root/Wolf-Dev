"use client";
import Button from "@/components/mainButton/Button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="flex flex-col items-center gap-4">
      <h1>Dashboard</h1>
      <h2 className="text-success">Nothing Here</h2>

      <div className="flex items-center gap-5">
        <Button link="/dashboard/login" text="login" />

        <Link
          href="/dashboard/register"
          className="w-fit btn btn-soft py-5 btn-success text-lg font-semibold text-base-content capitalize"
        >
          register
        </Link>
      </div>
    </section>
  );
}
