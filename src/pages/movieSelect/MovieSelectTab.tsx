import { useContext, useEffect, useState } from "react";
import nextId from "react-id-generator";
import { UserContext } from "../../App";
import Carousel from "../../components/carousel/Carousel";
import getBreakpoint from "../../helpers/getBreakpoint";
import useWidth from "../../hooks/useWidth";
import properties from "../../properties";
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

  const user = useContext(UserContext)!;

  const [loading, setLoading] = useState(true);
  const width = useWidth();

  useEffect(() => {
    setLoading(movieElements.length === 0);
  }, [movieElements]);

  useEffect(() => setLoading(true), [user]);

  const itemsToShow = { s: 2, m: 3, l: 4, xl: 5, xxl: 6, max: 7 };
  const elementsCount = itemsToShow[getBreakpoint(width)];

  const loadingElements = Array.from({ length: elementsCount }).map((_, index) => (
    <MovieLoading key={index} elementsCount={elementsCount} />
  ));

  return (
    <div>
      <h2>{title}</h2>
      {loading ? (
        <div style={{ display: "flex", gap: 25 }}>{loadingElements}</div>
      ) : (
        <Carousel
          itemsToShow={itemsToShow}
          extraButtonStyles={{ borderRadius: "var(--movie-border-radius)" }}
          aspectRatio={properties.POSTER_ASPECT_RATIO}
        >
          {movieElements}
        </Carousel>
      )}
    </div>
  );
}
