import React, { useContext, useState } from "react";
import { SearchContext, UserContext } from "../../App";
import movieData, { MovieType } from "../../data/movieData";
import recommendMovies from "../../helpers/recommendMovies";
import MovieSelect from "./MovieSelect";
import MovieSelectTab from "./MovieSelectTab";
import "./styles.css";

export default function MovieSelectPage() {
  const user = useContext(UserContext)!;
  const search = useContext(SearchContext)!;

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

  const recommendedMovies = recommendMovies(user);
  // const movieElements = movieData.map((movie) => <MovieSelect key={movie.id} {...movie} link={`/watch/${movie.id}`} />);

  return (
    <div className="movie-select">
      <div className="movie-select-search">{search ? searchElements : null}</div>
      {/* <div className="movie-select-wrapper"></div> */}
      <MovieSelectTab title="Recommended for you" movieList={recommendedMovies} />
    </div>
  );
}
