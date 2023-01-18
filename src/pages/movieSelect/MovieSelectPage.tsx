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

    // Fetch data after a random delay
    setTimeout(() => {
      setRecommendedGenres(recommendGenres(user));
      setRecommendedMovies(recommendMovies(user));
      setTrendingMovies(getTrending());
    }, properties.SIMULATE_FETCH_DELAY * Math.random());
  }, [user]);

  return (
    <div className="movie-select">
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
