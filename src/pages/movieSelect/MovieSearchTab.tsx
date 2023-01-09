import React from "react";
import { MovieType } from "../../data/movieData";

type Props = { movies: MovieType[] };

export default function MovieSearchTab({ movies }: Props) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
}
