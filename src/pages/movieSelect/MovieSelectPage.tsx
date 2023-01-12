import React, { useContext, useState } from "react";
import nextId from "react-id-generator";
import { SearchContext, UserContext } from "../../App";
import ColorGradient from "../../components/ColorGradient";
import movieData, { MovieType } from "../../data/movie/movieData";
import recommendMovies from "../../helpers/recommendMovies";
import MovieSelect from "./MovieSelect";
import MovieSelectTab from "./MovieSelectTab";
import "./styles.css";

export default function MovieSelectPage() {
  const user = useContext(UserContext)!;
  const search = useContext(SearchContext)!;

  // Filter by search: actors, title, genres, directors (Returns an array of keys/ids)
  const filteredSearchData = Object.keys(movieData).filter((key) => {
    const { actors, title, genres, directors } = movieData[key];

    return (
      actors.some((actor) => actor.toLowerCase().includes(search.toLowerCase())) ||
      title.toLowerCase().includes(search.toLowerCase()) ||
      genres.some((genre) => genre.toLowerCase().includes(search.toLowerCase())) ||
      directors.some((director) => director.toLowerCase().includes(search.toLowerCase()))
    );
  });

  // Search Elements
  const searchElements = filteredSearchData.map((key) => (
    <MovieSelect
      id={key}
      key={key}
      title={movieData[key].title}
      posters={movieData[key].posters}
      link={`/watch/${key}`}
    />
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
            <MovieSelectTab title="Recommended for you" movieList={recommendedMovies} />
          </>
        )}
      </div>
    </div>
  );
}
