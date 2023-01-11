import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import nextId from "react-id-generator";
import movieData, { MovieType } from "../../data/movie/movieData";
import useHover from "../../hooks/useHover";
import useWidth from "../../hooks/useWidth";
import MovieSelect from "./MovieSelect";

type Props = {
  title: string;
  movieList: any;
};

// Carousel of movies
export default function MovieSelectTab({ title, movieList }: Props) {
  // Get how many movies to show based on window width
  const movieElements = Array.from(movieList).map((movie: any) => {
    return <MovieSelect key={nextId()} {...movie} link={`/watch/${movie.id}`} />;
  });

  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [aTagOffset, setATagOffset] = useState(0); // The offset of the a tag that surrounds the image
  const movieRef = useRef<HTMLDivElement>(null);
  const width = useWidth();

  // The width of the next and previous buttons should be the width of the movie shown, that is off screen
  useEffect(() => {
    if (movieRef.current === null) return;

    const imageWidth = movieRef.current.children[0].children[0].getBoundingClientRect().width;
    const outSidePadding = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue("--outside-padding").replace("px", "")
    );

    const gap = parseInt(getComputedStyle(movieRef.current).getPropertyValue("gap").replace("px", ""));
    const numberOfImagesInView = Math.floor(width / imageWidth);
    const buttonWidth = width - imageWidth * numberOfImagesInView - gap * numberOfImagesInView - outSidePadding;

    setButtonWidth(buttonWidth);
    setButtonHeight(movieRef.current.children[0].children[0].getBoundingClientRect().height);
  }, [movieRef, width]);

  return (
    <div>
      <h2>{title}</h2>
      <div
        className="movie-select__left movie-select__button"
        style={{ width: buttonWidth, position: "absolute", left: "0", height: buttonHeight, zIndex: 2 }}
      >
        <ChevronLeft />
      </div>
      <div className="movie-select__tab" ref={movieRef}>
        {movieElements}
      </div>
      <div
        className="movie-select__right movie-select__button"
        style={{
          width: buttonWidth,
          position: "absolute",
          right: "0",
          height: buttonHeight,
          transform: `translateY(-${buttonHeight + 4}px)`,
        }}
      >
        <ChevronRight />
      </div>
    </div>
  );
}
