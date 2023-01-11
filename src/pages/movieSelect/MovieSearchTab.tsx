import React from "react";
import { MovieType } from "../../data/movieData";

type Props = { movies: MovieType };

export default function MovieSearchTab({ movies }: Props) {
  // Turn movie object into array of JSX elements
  const movieElements: any = [];
  Object.keys(movies).forEach((key: string) => {
    movieElements.push(<div key={key}>{movies[key].title}</div>);
  });

  return <div></div>;
}
