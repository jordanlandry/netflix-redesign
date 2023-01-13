import { useEffect, useState } from "react";
import nextId from "react-id-generator";
import Carousel from "../../components/carousel/Carousel";
import MovieLoading from "./MovieLoading";
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

  const [loading, setLoading] = useState(movieElements.length === 0);

  useEffect(() => {
    setLoading(movieElements.length === 0);
  }, [movieElements]);

  return (
    <div>
      <h2>{title}</h2>
      {loading ? (
        <div style={{ display: "flex", gap: 25 }}>
          <MovieLoading />
          <MovieLoading />
          <MovieLoading />
          <MovieLoading />
          <MovieLoading />
        </div>
      ) : (
        <Carousel
          itemsToShow={{ s: 2, m: 3, l: 4, xl: 5, xxl: 6, max: 7 }}
          extraButtonStyles={{ borderRadius: "var(--movie-border-radius)" }}
          aspectRatio={73 / 41}
        >
          {movieElements}
        </Carousel>
      )}
    </div>
  );
}
