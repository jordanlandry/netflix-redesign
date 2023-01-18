import { useContext, useEffect, useState } from "react";
import nextId from "react-id-generator";
import { UserContext } from "../../App";
import Carousel from "../../components/carousel/Carousel";
import getBreakpoint from "../../helpers/format/getBreakpoint";
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
  const user = useContext(UserContext)!;

  useEffect(() => {
    movieElements.length = 0;
  }, [user]);

  const [movieElements, setMovieElements] = useState<any>([]);

  useEffect(() => {
    setMovieElements(
      Array.from(movieList).map((movie: any) => {
        return <MovieSelect key={nextId()} {...movie} link={`/watch/${movie.id}`} />;
      })
    );
  }, [movieList]);

  const width = useWidth();

  const itemsToShow = { s: 2, m: 3, l: 4, xl: 5, xxl: 6, max: 7 };
  const elementsCount = itemsToShow[getBreakpoint(width)];

  const loadingElements = Array.from({ length: elementsCount }).map((_, index) => (
    <MovieLoading key={index} elementsCount={elementsCount} />
  ));

  return (
    <div className="movie-select-tab">
      <h2>{title}</h2>
      {movieElements.length === 0 ? (
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
