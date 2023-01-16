import movieData from "../data/movie/movieData";
import { UserType } from "../data/userData";

// Estimates how good a movie is for a user based on the user's habits and the movie's data
// Returns a number between 0 and 1
export default function getMatchAmount(user: UserType, movieId: string) {
  const { genres, actors, directors } = user.habits;
  const movie = movieData[movieId];
  let matchAmount = 0;
  movie.genres.forEach((genre: string) => (genres[genre] ? (matchAmount += genres[genre]) : false));
  movie.actors.forEach((actor: string) => (actors[actor] ? (matchAmount += actors[actor]) : false));
  movie.directors.forEach((director: string) => (directors[director] ? (matchAmount += directors[director]) : false));

  return matchAmount;
}
