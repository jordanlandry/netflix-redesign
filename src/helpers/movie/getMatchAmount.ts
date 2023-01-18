import movieData from "../../data/movie/movieData";
import { UserType } from "../../data/userData";

// Estimates how good a movie is for a user based on the user's habits and the movie's data
// Returns a number between 0 and 1

// With a proper backend and many users, I would likely use other user's habits to estimate how good a movie is for a user
// For example, if 10 people all like action movies and 9/10 of them like a particular action movie,
// Then you can assume that the 11th person will have a 90% chance of liking that movie, and so on
// With lots and lots of data, this would be a very accurate way to estimate how good a movie is for a user
export default function getMatchAmount(user: UserType, movieId: string) {
  const weights = {
    genre: 0.4,
    actor: 0.5,
    director: 0.1,
  };

  const { genres, actors, directors } = user.habits;
  const movie = movieData[movieId];
  let matchAmount = 0;
  movie.genres.forEach((genre: string) => (genres[genre] ? (matchAmount += genres[genre] * weights.genre) : false));
  movie.actors.forEach((actor: string) => (actors[actor] ? (matchAmount += actors[actor] * weights.actor) : false));
  movie.directors.forEach((director: string) =>
    directors[director] ? (matchAmount += directors[director] * weights.director) : false
  );

  // Normalize the match amount to a number between 0 and 1
  matchAmount /= Object.keys(genres).length + Object.keys(actors).length + Object.keys(directors).length;

  return matchAmount;
}
