import { createContext, useContext, useEffect, useState } from "react";
import { SearchContext, UserContext } from "../../App";
import Modal from "../../components/Modal";
import movieData from "../../data/movie/movieData";
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

export const MovieInViewContext = createContext<string | null>(null);
export const SetMovieInViewContext = createContext<any>(null);

export default function MovieSelectPage() {
  const user = useContext(UserContext)!;
  const search = useContext(SearchContext)!;

  const [movieInView, setMovieInView] = useState(""); // Movie id in view

  // Filter by search: actors, title, genres, directors (Returns an array of keys/ids)
  const filteredSearchData = Object.keys(movieData).filter((key) => {
    const { actors, title, genres, directors } = movieData[key];

    return (
      actors.some((actor) => actor.toLowerCase().includes(search.toLowerCase())) ||
      title.toLowerCase().includes(search.toLowerCase()) ||
      genres.some((genre) => genre.toLowerCase().includes(search.toLowerCase())) ||
      directors.some((director) => director.toLowerCase().includes(search.toLowerCase()))
    );
  });

  // Search Elements
  const searchElements = filteredSearchData.map((key) => (
    <MovieSelect
      id={key}
      key={key}
      title={movieData[key].title}
      posters={movieData[key].posters}
      link={`/watch/${key}`}
    />
  ));

  const [recommendedGenres, setRecommendedGenres] = useState<any>([]);
  const [recommendedMovies, setRecommendedMovies] = useState<any>([]);
  const [trendingMovies, setTrendingMovies] = useState<any>([]);

  const debouncedRecommendedMovies = useDebounce(recommendedMovies);
  const debouncedTrendingMovies = useDebounce(trendingMovies);
  const debouncedGenreMovies = useDebounce(recommendedGenres);

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
