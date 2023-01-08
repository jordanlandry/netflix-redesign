import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import movieData from "../../data/movieData";
import MovieSelect from "./MovieSelect";
import "./styles.css";

export default function MovieSelectPage() {
  const user = useContext(UserContext)!;

  // State
  const [search, setSearch] = useState("");

  // Filter by search: actors, title, genres, directors
  const filteredSearchData = movieData.filter((movie) => {
    const { actors, title, genres, directors } = movie;
    return (
      actors.some((actor) => actor.toLowerCase().includes(search.toLowerCase())) ||
      title.toLowerCase().includes(search.toLowerCase()) ||
      genres.some((genre) => genre.toLowerCase().includes(search.toLowerCase())) ||
      directors.some((director) => director.toLowerCase().includes(search.toLowerCase()))
    );
  });

  // Search Elements
  const searchElements = filteredSearchData.map((movie) => (
    <MovieSelect key={movie.id} {...movie} link={`/watch/${movie.id}`} />
  ));

  // Genres filter
  const genres = user.genres;
  const filteredGenreData = movieData.filter((movie) => movie.genres.some((genre) => genres.includes(genre)));

  const recommendedMovies = new Set();
  filteredGenreData.forEach((movie) => recommendedMovies.add(movie));

  const movieElements = movieData.map((movie) => <MovieSelect key={movie.id} {...movie} link={`/watch/${movie.id}`} />);

  return (
    <div className="movie-select">
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      <div className="movie-select-wrapper">{search ? searchElements : null}</div>
    </div>
  );
}
