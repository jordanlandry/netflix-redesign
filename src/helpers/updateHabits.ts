import movieData from "../data/movie/movieData";
import { UserType } from "../data/userData";

export default function updateHabits(movieId: string, user: UserType) {
  const userGenres = user.habits.genres;
  const userActors = user.habits.actors;
  const userDirectors = user.habits.directors;

  const movie = movieData[movieId];

  movie.genres.forEach((genre: string) => (userGenres[genre] ? (userGenres[genre] += 1) : (userGenres[genre] = 1)));
  movie.actors.forEach((actor: string) => (userActors[actor] ? (userActors[actor] += 1) : (userActors[actor] = 1)));
  movie.directors.forEach((director: string) =>
    userDirectors[director] ? (userDirectors[director] += 1) : (userDirectors[director] = 1)
  );

  user.habits.genres = userGenres;
  user.habits.actors = userActors;
  user.habits.directors = userDirectors;

  return user;
}
