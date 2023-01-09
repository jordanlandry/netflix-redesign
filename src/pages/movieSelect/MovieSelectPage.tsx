import React, { useContext, useState } from "react";
import { SearchContext, UserContext } from "../../App";
import ColorGradient from "../../components/ColorGradient";
import movieData, { MovieType } from "../../data/movieData";
import recommendMovies from "../../helpers/recommendMovies";
import MovieSelect from "./MovieSelect";
import MovieSelectTab from "./MovieSelectTab";
import "./styles.css";
import TopTenMovieTab from "./TopTenMovieTab";

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

  return (
    <div className="movie-select">
      <div>
        {search ? (
          <div className="movie-select-search">{searchElements}</div>
        ) : (
          <>
            <ColorGradient />
            <MovieSelectTab title="Top 10 today" movieList={recommendedMovies} />
            <MovieSelectTab title="Recommended for you" movieList={recommendedMovies} />
          </>
        )}
      </div>
    </div>
  );
}
