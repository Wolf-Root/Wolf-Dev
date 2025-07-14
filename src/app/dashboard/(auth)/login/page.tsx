"use client";
import Link from "next/link";

export default function Login() {
  return (
    <section className="flex flex-col items-center gap-4">
      <div className="w-full max-w-lg">
        <form className="w-full bg-base-200 flex justify-center border-2 rounded-2xl">
          <div className="w-[90%] h-full my-10 flex flex-col items-center gap-5">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-center text-success capitalize">
                Welcome Back
              </h1>
              <p className="text-lg">Please sign in to see the dashboard.</p>
            </div>

            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full text-xl p-3 border-2 border-[#bbb]"
            />
            <label htmlFor="Passwrd" className="sr-only">
              Passwrd
            </label>
            <input
              type="password"
              id="Passwrd"
              name="Passwrd"
              placeholder="Passwrd"
              required
              className="w-full text-xl p-3 border-2 border-[#bbb]"
            />

            <button className="w-full btn btn-success text-lg font-semibold">
              Login
            </button>
            <button className="w-full btn btn-neutral text-lg font-semibold">
              Login with Github
            </button>

            <p> - OR - </p>

            <Link href="/dashboard/register" className="underline ">
              Create new account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
