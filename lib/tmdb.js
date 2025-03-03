const API_BASE_URL = "https://api.themoviedb.org/3";

export const fetchTrendingMovies = async () => {
  const res = await fetch(
    `${API_BASE_URL}/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch trending movies");
  return res.json();
};

export const fetchMovieDetails = async (id) => {
  const res = await fetch(
    `${API_BASE_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch movie details");
  return res.json();
};
