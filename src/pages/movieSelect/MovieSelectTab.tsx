import { MovieType } from "../../data/movieData";
import MovieSelect from "./MovieSelect";

type Props = {
  title: string;
  movieList: MovieType[];
};

// Carousel of movies
export default function MovieSelectTab({ title, movieList }: Props) {
  return (
    <div>
      {title}
      {/* <MovieSelect {...movies} /> */}
    </div>
  );
}
