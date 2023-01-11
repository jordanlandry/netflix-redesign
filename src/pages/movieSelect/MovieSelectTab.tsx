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

  const [hover, setHover] = useState(false);

  const [buttonWidth, setButtonWidth] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const movieRef = useRef<HTMLDivElement>(null);
  const width = useWidth();

  const [scrollIndex, setScrollIndex] = useState(0);
  const [widthToScroll, setWidthToScroll] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

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

    setButtonWidth(buttonWidth - gap);
    setButtonHeight(movieRef.current.children[0].children[0].getBoundingClientRect().height);
    setWidthToScroll((imageWidth + gap) * numberOfImagesInView);
    setScrollOffset(gap);
  }, [movieRef, width]);

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <h2>{title}</h2>
      <div
        className="movie-select__left movie-select__button pointer"
        style={{ width: buttonWidth, position: "absolute", left: "0", height: buttonHeight, zIndex: 2 }}
        onClick={() => setScrollIndex((prev) => prev - 1)}
      >
        <ChevronLeft />
      </div>
      <div
        className="movie-select__tab"
        ref={movieRef}
        style={{
          transform: `translateX(${widthToScroll * -scrollIndex + scrollOffset}px)`,
          transition: "transform 0.5s",
        }}
      >
        {movieElements}
      </div>
      <div
        className="movie-select__right movie-select__button pointer"
        onClick={() => setScrollIndex((prev) => prev + 1)}
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
