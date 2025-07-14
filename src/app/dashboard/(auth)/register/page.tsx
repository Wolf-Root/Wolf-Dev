"use client";
import Link from "next/link";

export default function Register() {
  return (
    <section className="flex flex-col items-center gap-4">
      <div className="w-full max-w-lg">
        <form className="w-full bg-base-200 flex justify-center border-2 rounded-2xl">
          <div className="w-[90%] h-full my-10 flex flex-col items-center gap-5">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-center text-success capitalize">
                Create an Account
              </h1>
              <p className="text-lg">Please sign up to see the dashboard.</p>
            </div>

            <label htmlFor="Username" className="sr-only">
              Username
            </label>
            <input
              type="text"
              id="Username"
              name="Username"
              placeholder="Username"
              required
              className="w-full text-xl p-3 border-2 border-[#bbb]"
            />

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
              Register
            </button>

            <p> - OR - </p>

            <Link href="/dashboard/login" className="underline ">
              Login with an existing account
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
