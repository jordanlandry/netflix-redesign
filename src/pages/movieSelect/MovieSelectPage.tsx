import { createContext, useContext, useEffect, useState } from "react";
import { SearchContext, UserContext } from "../../App";
import Modal from "../../components/Modal";
import movieData from "../../data/movie/movieData";
import getTrending from "../../helpers/getTrending";
import recommendGenres from "../../helpers/recommendGenres";
import recommendMovies from "../../helpers/recommendMovies";
import useDebounce from "../../hooks/useDebounce";
import properties from "../../properties";
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
      <div>
        {search ? (
          <div className="movie-select-search">{searchElements}</div>
        ) : (
          <>
            {movieInView ? (
              <Modal open={movieInView !== ""} onClose={() => setMovieInView("")}>
                <MovieModal movieId={movieInView} />
              </Modal>
            ) : null}
            <MovieInViewContext.Provider value={movieInView}>
              <SetMovieInViewContext.Provider value={setMovieInView}>
                <MovieSelectTab title="Recommended for you" movieList={debouncedRecommendedMovies} />
                <MovieSelectTab title="Trending" movieList={debouncedTrendingMovies} />
                {
                  Object.keys((debouncedGenreMovies)).map((genre) => (
                    <MovieSelectTab key={genre} title={genre} movieList={debouncedGenreMovies[genre]} />
                  ))
                }
              </SetMovieInViewContext.Provider>
            </MovieInViewContext.Provider>
          </>
        )}
      </div>
    </div>
  );
}
