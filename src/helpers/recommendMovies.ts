import movieData from "../data/movieData";
import { UserType } from "../data/userData";

// Find movies that the user has not watched that have actors/genres/directors that match the user's preferences
// If this was a real app, we would use a machine learning algorithm to make the recommendations and use other user data to make the recommendations more accurate
export default function recommendMovies(user: UserType) {
  // ~~ Genre recommendation ~~ \\
  const genres = user.genres;
  const filteredGenreData = movieData.filter((movie) => movie.genres.some((genre) => genres.includes(genre)));

  // Set to remove duplicates
  const recommendedMovies = new Set();
  filteredGenreData.forEach((movie) => recommendedMovies.add(movie));

  return recommendedMovies;
}
