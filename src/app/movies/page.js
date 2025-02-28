
export default function MoviesPage() {
  const movies = [
    { id: 1, title: "Inception" },
    { id: 2, title: "The Matrix" },
    { id: 3, title: "Interstellar" },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl text-electric-blue font-bold mb-6">All Movies</h1>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li key={movie.id} className="text-xl">
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
