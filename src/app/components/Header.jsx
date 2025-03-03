"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="w-full p-4 border-b border-neutral-700 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold tracking-wide text-electric-blue">
        🍿 Popcorn Time
      </Link>
      <ThemeToggle />
    </header>
  );
}
