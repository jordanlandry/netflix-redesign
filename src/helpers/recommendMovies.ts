import movieData from "../data/movieData";
import { UserType } from "../data/userData";

// Find movies that the user has not watched that have actors/genres/directors that match the user's preferences
// If this was a real app, we would use a machine learning algorithm to make the recommendations and use other user data to make the recommendations more accurate
export default function recommendMovies(user: UserType) {
  // ~~ Genre recommendation ~~ \\
  const genres = user.genres;
  const filteredGenreData = movieData.map((movie) => {
    let relavancy = 0;

    movie.genres.some((genre) => {
      if (genres[genre]) relavancy += genres[genre] * Math.random(); // Add a random number to the relavancy to make the recommendations more varied
      return genres[genre] ? true : false;
    });

    return { ...movie, relavancy };
  });

  // Sort the movies by the relavancy
  filteredGenreData.sort((a, b) => b.relavancy - a.relavancy);

  // ~~ Actor recommendation ~~ \\
  // const actors = user.actors;
  // const filteredActorData = movieData.filter((movie) => movie.actors.some((actor) => actors.includes(actor)));

  // ~~ Director recommendation ~~ \\
  // const directors = user.directors;
  // const filteredDirectorData = movieData.filter((movie) => movie.directors.some((director) => directors.includes(director)));

  // Set to remove duplicates
  const recommendedMovies = new Set();
  filteredGenreData.forEach((movie) => recommendedMovies.add(movie));

  return recommendedMovies;
}
