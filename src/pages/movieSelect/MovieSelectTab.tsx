import movieData, { MovieType } from "../../data/movieData";
import MovieSelect from "./MovieSelect";

type Props = {
  title: string;
  movieList: any;
};

// Carousel of movies
export default function MovieSelectTab({ title, movieList }: Props) {
  const movieElements = Array.from(movieList).map((movie: any) => (
    <MovieSelect key={movie.id} {...movie} link={`/watch/${movie.id}`} />
  ));

  return (
    <div>
      {title}
      <div className="movie-select__tab">{movieElements}</div>
    </div>
  );
}
