import movieData from "../data/movieData";
import { UserType } from "../data/userData";

// Find movies that the user has not watched that have actors/genres/directors that match
// the user's preference If this was a real app, we would use a machine learning algorithm
// to make the recommendations and use other user data to make the recommendations more accurate
export default function recommendMovies(user: UserType) {
  const relavancies = {
    genre: 0.5,
    actor: 0.6,
    director: 0.1,
    random: 0.2,
  };

  const { genres, actors, directors } = user;
  const filteredData = movieData.map((movie) => {
    let relavancy = Math.random() * relavancies.random; // Add a random number to the relavancy to make the recommendations more varied

    movie.genres.forEach((genre) => (genres[genre] ? (relavancy += genres[genre] * relavancies.genre) : false));
    movie.actors.forEach((actor) => (actors[actor] ? (relavancy += actors[actor] * relavancies.actor) : false));
    movie.directors.forEach((director) =>
      directors[director] ? (relavancy += directors[director] * relavancies.director) : false
    );

    // Remove movies that the user has already watched
    user.recentlyWatched.forEach((watchedMovie) => (watchedMovie.id === movie.id ? (relavancy = 0) : false));

    return { ...movie, relavancy };
  });

  // Sort the movies by the relavancy
  const sortedData = filteredData.sort((a, b) => b.relavancy - a.relavancy);

  // Set to remove duplicates
  const recommendedMovies = new Set();
  sortedData.forEach((movie) => recommendedMovies.add(movie));

  return recommendedMovies;
}
