"use client";
import NavBar from "../navBar/NavBar";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handelClick = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar justify-between relative z-40">
      <Link href="/">
        <p className="text-4xl font-bold">
          Wolf <span className="text-success">Dev</span>
        </p>
      </Link>

      <nav className="flex items-center gap-5">
        <ul className="hidden md:flex items-center gap-5">
          <NavBar />
        </ul>
        <ThemeToggle />

        <button
          className="block md:hidden"
          aria-label="Mobile Menu Open / Close"
        >
          <label
            htmlFor="MobileMenu"
            className="btn btn-circle swap swap-rotate"
          >
            <input
              type="checkbox"
              id="MobileMenu"
              onChange={handelClick}
              checked={isOpen}
            />

            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className="swap-on fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
        </button>

        {isOpen && (
          <ul className="bg-base-300 absolute top-16 left-0 right-0 py-5 flex flex-col items-center justify-center gap-5 rounded-md z-50">
            <NavBar />
          </ul>
        )}
      </nav>
    </header>
  );
}
