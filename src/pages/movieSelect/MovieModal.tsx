import { useContext } from "react";
import { XLg } from "react-bootstrap-icons";
import { UserContext } from "../../App";
import PlayButton from "../../components/buttons/PlayButton";
import movieData from "../../data/movie/movieData";
import formatRuntime from "../../helpers/format/formatRuntime";
import getMatchAmount from "../../helpers/movie/getMatchAmount";
import { SetMovieInViewContext } from "./MovieSelectPage";

type Props = { movieId: string; onClose: any };

export default function MovieModal({ movieId, onClose }: Props) {
  const { title, year, runtime, genres, directors, actors, plot } = movieData[movieId];

  const user = useContext(UserContext)!;

  return (
    <div className="movie-modal">
      <XLg size={32} className="movie-modal__x" onClick={onClose} />
      <div className="movie-modal__outside-padding">
        <img
          src="https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABby3Mm4Tm65KlYAJZ0-0YIN9GCKS_Fa85plRIkFOBCspH8B4LGNXduQ7MppmEQvaovwpn1tbMOTiJsYJn4FT7p1ppioiIO6192lr.webp?r=caa"
          style={{ opacity: 1 }}
        />
        <div className="movie-modal__outside">
          <div className="movie-modal__on-image">
            <h1>{title}</h1>
            <PlayButton movieId={movieId} />
          </div>
          <div className="movie-modal__wrapper">
            <div className="movie-modal__left">
              <div className="movie-modal__info-wrapper movie-modal__padding">
                <span className="movie-modal__match">{getMatchAmount(user, movieId)}% Match</span>
                <span className="movie-modal__light">{year}</span>
                <span>{formatRuntime(runtime)}</span>
              </div>
              <div>{plot}</div>
            </div>
            <div className="movie-modal__right">
              <div className="movie-modal__padding">
                <span className="movie-modal__light">Cast: </span>
                <span>{actors.join(", ")}</span>
              </div>
              <div className="movie-modal__padding">
                <span className="movie-modal__light">Genres: </span>
                <span>{genres.join(", ")}</span>
              </div>
              <div className="movie-modal__padding">
                <span className="movie-modal__light">Directors: </span>
                <span>{directors.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p style={{ textAlign: "center" }}>Hello there :)</p>
    </div>
  );
}
