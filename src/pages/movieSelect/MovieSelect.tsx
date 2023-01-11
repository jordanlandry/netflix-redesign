import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { MovieType } from "../../data/movie/movieData";
import selectPoster from "../../helpers/selectPoster";

type Props = {
  title: string;
  posters: { id: number; url: string; actor: string }[];
  link: string;
};

export default function MovieSelect({ title, posters, link }: Props) {
  const [hover, setHover] = useState(false);
  const user = useContext(UserContext)!;

  const poster = selectPoster(user, posters);

  return (
    <a
      className="movie-select__poster"
      href={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => {
        // Add to recently watched
        // const movie: MovieType = {
        //   id: posters[0].id,
        //   title,
        //   poster: poster.url,
        //   actor: poster.actor,
        // };
      }}
    >
      <img src={poster.url} alt={title} loading="lazy" />
    </a>
  );
}
