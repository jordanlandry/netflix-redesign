import { useState } from "react";
import { MovieType } from "../../data/movieData";

interface Props extends MovieType {
  link: string;
}

export default function MovieSelect({ title, posters, link }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <a
      className="movie-select__poster"
      href={link}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={posters[0].url} alt={title} />
    </a>
  );
}
