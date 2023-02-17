import movieData from "../../data/movie/movieData";
import { UserType } from "../../data/userData";

// Recommend movies from a specific genre that the user enjoys
export default function recommendGenres(user: UserType, genreCount: number = 3, movieCount: number = 10) {
  // Sort the top genres by the number of movies the user has watched
  const sortedGenres = Object.keys(user.habits.genres)
    .sort((a, b) => user.habits.genres[b] - user.habits.genres[a])
    .slice(0, genreCount + 2); // +2 to add more variety

  if (sortedGenres.length < genreCount) return [];

  let iterations = 0;
  const genrePicks: any = [];
  while (genrePicks.length < genreCount && iterations < genreCount + 25) {
    const randomGenre = sortedGenres[Math.floor(Math.random() * sortedGenres.length)];

    // Go through all the user's recently watched to see if they have watched any movies from the genre
    const recentlyWatched = user.recentlyWatched.filter(({ id }) => movieData[id].genres.includes(randomGenre));

    // If the user has watched any movies from the genre, add it to the result and remove from sortedGenres
    if (recentlyWatched.length > 0) sortedGenres.splice(sortedGenres.indexOf(randomGenre), 1);
    genrePicks.push(randomGenre);

    iterations++;
  }

  // Pick some random movies from each genre
  const result: { [key: string]: any } = {};

  genrePicks.forEach((genre: string) => {
    const movies = Object.keys(movieData).filter((id) => movieData[id].genres.includes(genre));

    // Pick 10 random movies from the genre
    let i = 0;
    const randomMovies: any = [];

    // The more movies we have the lower chance we have to pick the same movie, so that's why this is fine
    while (randomMovies.length < movieCount && i < movieCount + 25) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      if (randomMovies.filter((movie: any) => movie.id === randomMovie).length === 0)
        randomMovies.push({ ...movieData[randomMovie], id: randomMovie });

      i++;
    }

    result[genre] = randomMovies;
  });

  return result;
}
