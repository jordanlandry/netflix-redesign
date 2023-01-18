import { useContext } from "react";
import { UserContext } from "../../App";
import movieData from "../../data/movie/movieData";
import formatRuntime from "../../helpers/format/formatRuntime";
import getMatchAmount from "../../helpers/movie/getMatchAmount";
import { SetMovieInViewContext } from "./MovieSelectPage";

type Props = { movieId: string };

export default function MovieModal({ movieId }: Props) {
  const { title, year, runtime, genres, directors, actors, plot } = movieData[movieId];

  const setMovieInView = useContext(SetMovieInViewContext);
  const user = useContext(UserContext)!;

  const handlePlay = () => {
    alert("Cannot play movie, this is just a demo");
  };

  return (
    <div style={{ color: "black" }}>
      <h1>{title}</h1>
      <button onClick={handlePlay}>Play</button>

      <div className="movie-modal__wrapper">
        <div className="movie-modal__left">
          <div className="movie-modal__info-wrapper">
            <span>{getMatchAmount(user, movieId)} Match</span>
            <span>{year}</span>
            <span>{formatRuntime(runtime)}</span>
          </div>
          <div>{plot}</div>
        </div>

        <div className="movie-modal__right">
          <div>
            <span>Cast: </span>
            <span>{actors.join(", ")}</span>
          </div>

          <div>
            <span>Genres: </span>
            <span>{genres.join(", ")}</span>
          </div>

          <div>
            <span>Directors: </span>
            <span>{directors.join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
