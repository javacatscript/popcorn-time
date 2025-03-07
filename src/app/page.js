'use client'

import Search from "./components/Search";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-electric-blue">
      <h1 className="text-6xl font-bold">🍿 Popcorn Time</h1>
      <Search />
    </main>
  );
}