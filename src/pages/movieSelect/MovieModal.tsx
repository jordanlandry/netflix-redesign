import React, { useContext } from "react";
import { UserContext } from "../../App";
import movieData from "../../data/movie/movieData";
import formatRuntime from "../../helpers/formatRuntime";
import getMatchAmount from "../../helpers/getMatchAmount";

type Props = { movieId: string };

export default function MovieModal({ movieId }: Props) {
  const { title, year, runtime, genres, directors, actors, plot } = movieData[movieId];
  const user = useContext(UserContext)!;

  return (
    <div style={{ color: "black" }}>
      <h1>{title}</h1>
      <div className="movie-modal__info-wrapper">
        <span>{getMatchAmount(user, movieId)}</span>
        <span>{year}</span>
        <span>{formatRuntime(runtime)}</span>
      </div>
      <div>{plot}</div>

      <div>
        <span>{genres.join(", ")}</span>
      </div>

      <div>
        <span>{directors.join(", ")}</span>
      </div>

      <div>
        <span>{actors.join(", ")}</span>
      </div>
    </div>
  );
}
