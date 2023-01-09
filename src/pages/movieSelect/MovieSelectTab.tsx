import movieData, { MovieType } from "../../data/movieData";
import MovieSelect from "./MovieSelect";

type Props = {
  title: string;
  movieList: any;
};

// Carousel of movies
export default function MovieSelectTab({ title, movieList }: Props) {
  // const WIDTH_OF_MOVIE_PX = 200;
  // const MOVIE_MARGIN_PX = 20;
  // const TOTAL_WIDTH = WIDTH_OF_MOVIE_PX + MOVIE_MARGIN_PX;

  const movieElements = Array.from(movieList).map((movie: any) => (
    <MovieSelect key={movie.id} {...movie} link={`/watch/${movie.id}`} />
  ));

  return (
    <div>
      <h2>{title}</h2>
      <div className="movie-select__tab">{movieElements}</div>
    </div>
  );
}
