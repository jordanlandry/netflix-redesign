import nextId from "react-id-generator";
import movieData, { MovieType } from "../../data/movieData";
import MovieSelect from "./MovieSelect";

type Props = {
  title: string;
  movieList: any;
};

// Carousel of movies
export default function MovieSelectTab({ title, movieList }: Props) {
  const movieElements = Array.from(movieList).map((movie: any) => (
    <MovieSelect key={nextId()} {...movie} link={`/watch/${movie.id}`} />
  ));

  return (
    <div>
      <h2>{title}</h2>
      <div className="movie-select__tab">{movieElements}</div>
    </div>
  );
}
