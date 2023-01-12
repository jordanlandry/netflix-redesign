import nextId from "react-id-generator";
import Carousel from "../../components/carousel/Carousel";
import MovieSelect from "./MovieSelect";

type Props = {
  title: string;
  movieList: any;
};

// Carousel of movies
export default function MovieSelectTab({ title, movieList }: Props) {
  const movieElements = Array.from(movieList).map((movie: any) => {
    return <MovieSelect key={nextId()} {...movie} link={`/watch/${movie.id}`} />;
  });

  return (
    <div>
      <h2>{title}</h2>
      <Carousel itemsToShow={{ s: 1, m: 3, l: 4 }} extraButtonStyles={{ borderRadius: "var(--movie-border-radius)" }}>
        {movieElements}
      </Carousel>
    </div>
  );
}
