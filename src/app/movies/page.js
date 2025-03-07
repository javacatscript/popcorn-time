"use client";

import React, { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../../lib/tmdb";

const MoviesPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {

    setIsLoading(true);
    setError(null);

    try {
      const movies = await fetchTrendingMovies();
      setData(movies);
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative top-18 py-4 px-4">
      <h1>Movies of the week!</h1>

      {isLoading && <p>Loading...</p>}

      {error && (
        <div style={{ backgroundColor: "#f8d7da", color: "#721c24", padding: "8px", borderRadius: "4px", marginBottom: "8px" }}>
          {error}
        </div>
      )}

      <ul>
        {data?.results.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
