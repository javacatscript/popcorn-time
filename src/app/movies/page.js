import React from "react";
import { fetchTrendingMovies } from "@/lib/tmdb";

const MoviesPage = async () => {
  const data = await fetchTrendingMovies();
  console.log(data);

  return (
    <div>
      <h1>Movies of the week!</h1>
      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
