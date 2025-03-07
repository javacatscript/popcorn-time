"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full p-4 border-b border-neutral-700 flex justify-between items-center fixed top-0 right-0 left-0">
      <Link
        href="/"
        className="text-xl font-bold tracking-wide text-electric-blue cursor-pointer"
      >
        🍿 Popcorn Time
      </Link>
      <Link
        href="/movies"
        className="text-xl font-bold tracking-wide text-electric-blue cursor-pointer"
      >
        Movies
      </Link>
      <ThemeToggle />
    </header>
  );
}
