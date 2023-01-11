import movieData from "../data/movie/movieData";
import { UserType } from "../data/userData";

// Find movies that the user has not watched that have actors/genres/directors that match
// the user's preference If this was a real app, we would use a machine learning algorithm
// to make the recommendations and use other user data to make the recommendations more accurate
// and also could keep track of which movies have been recommended to the user and lower the relavancy
// of those movies in the future to prevent the user from seeing the same movies over and over again
// but for the sake of this project, we will just use a simple algorithm to make the recommendations

// TODO: Fix this type
export default function recommendMovies(user: any) {
  const relavancies = {
    genre: 0.5,
    actor: 0.6,
    director: 0.1,
    random: 0.2,
  };

  const { genres, actors, directors } = user.habits;
  // Turn the movieData object into an array
  // const filteredData = Object.values(movieData).map((movie) => {
  //   let relavancy = Math.random() * relavancies.random; // Add a random number to the relavancy to make the recommendations more varied

  //   movie.genres.forEach((genre: string) => (genres[genre] ? (relavancy += genres[genre] * relavancies.genre) : false));
  //   movie.actors.forEach((actor: string) => (actors[actor] ? (relavancy += actors[actor] * relavancies.actor) : false));
  //   movie.directors.forEach((director: string) =>
  //     directors[director] ? (relavancy += directors[director] * relavancies.director) : false
  //   );

  //   // Remove movies that the user has already watched
  //   // user.recentlyWatched.forEach((watchedMovie: any) => (watchedMovie.id === key ? (relavancy = 0) : false));

  //   return { ...movie, relavancy };
  // });

  const filteredData = Object.keys(movieData).map((key) => {
    let relavancy = Math.random() * relavancies.random; // Add a random number to the relavancy to make the recommendations more varied

    movieData[key].genres.forEach((genre: string) =>
      genres[genre] ? (relavancy += genres[genre] * relavancies.genre) : false
    );
    movieData[key].actors.forEach((actor: string) =>
      actors[actor] ? (relavancy += actors[actor] * relavancies.actor) : false
    );
    movieData[key].directors.forEach((director: string) =>
      directors[director] ? (relavancy += directors[director] * relavancies.director) : false
    );

    // Remove movies that the user has already watched
    // user.recentlyWatched.forEach((watchedMovie: any) => (watchedMovie.id === key ? (relavancy = 0) : false));

    return { ...movieData[key], relavancy, id: key };
  });

  // Sort the movies by the relavancy
  const sortedData = filteredData.sort((a, b) => b.relavancy - a.relavancy);

  // Set to remove duplicates, remove relavancy from the movies to prevent it from thinking that the movies are different
  const recommendedMovies = new Set();
  sortedData.forEach((movie) => {
    return recommendedMovies.add({ ...movie, relavancy: 0, id: movie.id });
  });

  return recommendedMovies;
}
