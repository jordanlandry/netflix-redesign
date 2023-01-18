import { createContext, useContext, useEffect, useState } from "react";
import { SearchContext, UserContext } from "../../App";
import Modal from "../../components/Modal";
import movieData from "../../data/movie/movieData";
import levenshteinDistance from "../../helpers/search/getDistance";
import getTrending from "../../helpers/movie/getTrending";
import recommendGenres from "../../helpers/movie/recommendGenres";
import recommendMovies from "../../helpers/movie/recommendMovies";
import useDebounce from "../../hooks/useDebounce";
import properties from "../../properties";
import MovieBillboard from "./MovieBillboard";
import MovieModal from "./MovieModal";
import MovieSelect from "./MovieSelect";
import MovieSelectTab from "./MovieSelectTab";
import "./styles.css";
import searchForMovies from "../../helpers/search/searchForMovies";
import NavWrapper from "../../components/navbar/NavWrapper";
import useScrollY from "../../hooks/useScrollY";

export const MovieInViewContext = createContext<string | null>(null);
export const SetMovieInViewContext = createContext<any>(null);

export default function MovieSelectPage() {
  const user = useContext(UserContext)!;
  const search = useContext(SearchContext)!;
  const filteredSearchData = searchForMovies(search);

  // Search Elements
  const searchElements = filteredSearchData.map((key) => {
    return (
      <MovieSelect
        id={key}
        key={key}
        title={movieData[key].title}
        posters={movieData[key].posters}
        link={`/watch/${key}`}
      />
    );
  });

  const [movieInView, setMovieInView] = useState(""); // Movie id in view

  // Recommended Movies
  const [recommendedGenres, setRecommendedGenres] = useState<any>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<any>([]);
  const [trendingMovies, setTrendingMovies] = useState<any>([]);

  // Debounce data to prevent flickering
  const debouncedRecommendedMovies = useDebounce(recommendedMovies);
  const debouncedTrendingMovies = useDebounce(trendingMovies);
  const debouncedGenreMovies = useDebounce(recommendedGenres);

  // Update what movies to recommend when the user changes
  useEffect(() => {
    // Reset data
    setRecommendedMovies([]);
    setTrendingMovies([]);
    setRecommendedGenres(recommendGenres(user));

    // Fetch data after a random delay to simulate network latency
    setTimeout(() => {
      setRecommendedGenres(recommendGenres(user));
      setRecommendedMovies(recommendMovies(user));
      setTrendingMovies(getTrending());
    }, properties.SIMULATE_FETCH_DELAY * Math.random());
  }, [user]);

  // This code block makes sure when you open the modal, the background doesn't scroll,
  // and when you close the modal, the background scrolls to the same position as before
  // but also makes sure when you open the modal, you're viewing the top of the modal

  // Code block
  const scrollY = useScrollY(); // Updates state when user scrolls
  const [lastScrollY, setLastScrollY] = useState(scrollY); // Keep track of position when modal is closed

  // Update last scroll when the modal is closed
  useEffect(() => {
    if (!movieInView) setLastScrollY(scrollY);
  }, [scrollY, movieInView]);

  // Scroll to top of modal when open, and scroll to last position when closed
  useEffect(() => {
    window.scrollTo(0, movieInView ? 0 : lastScrollY);
  }, [movieInView]);

  // Make the background not scroll when scrolling in the modal
  const movieOpenStyles: React.CSSProperties = {
    position: "fixed",
    top: -lastScrollY,
  };
  // End of code block

  return (
    <div className="movie-select" style={movieInView ? movieOpenStyles : {}}>
      <NavWrapper />
      <MovieInViewContext.Provider value={movieInView}>
        <SetMovieInViewContext.Provider value={setMovieInView}>
          <div>
            {movieInView ? (
              <Modal open={movieInView !== ""} onClose={() => setMovieInView("")}>
                <MovieModal movieId={movieInView} />
              </Modal>
            ) : null}

            {search ? (
              <div className="movie-select-search padding">{searchElements}</div>
            ) : (
              <>
                <MovieBillboard />
                <div className="padding movie-select-wrapper">
                  <MovieSelectTab title="Recommended for you" movieList={debouncedRecommendedMovies} />
                  <MovieSelectTab title="Trending" movieList={debouncedTrendingMovies} />
                  {Object.keys(debouncedGenreMovies).map((genre) => (
                    <MovieSelectTab key={genre} title={genre} movieList={debouncedGenreMovies[genre]} />
                  ))}
                </div>
              </>
            )}
          </div>
        </SetMovieInViewContext.Provider>
      </MovieInViewContext.Provider>
    </div>
  );
}
