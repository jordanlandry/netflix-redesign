import movieData, { MovieType } from "../../data/movie/movieData";
import searchSubstring from "./searchSubstring";

export default function searchForMovies(search: string) {
  // Go through each movie and check if the search string is a substring of the title, actors, genres, director, or description
  // If it is, add it to the results array

  // const results: any[] = [];

  const results: { [key: string]: number } = {};

  // What to multiply the distance by depending on what property it is
  const searchMultipliers = {
    title: 0,
    actors: 1,
    genres: 2,
    directors: 3,
  };

  Object.keys(movieData).forEach((key) => {
    // Go through each property of the movie and check if the search string is a substring of it
    const { title, actors, genres, directors } = movieData[key];

    // if (searchSubstring(title, search) !== false) results[key] = ;

    const distance = searchSubstring(title, search);
    if (distance !== -1) results[key] = distance * searchMultipliers.title;

    actors.forEach((actor) => {
      const distance = searchSubstring(actor, search);
      if (distance !== -1 && results[key] && distance < results[key])
        results[key] = distance * searchMultipliers.actors;
    });

    genres.forEach((genre) => {
      const distance = searchSubstring(genre, search);
      if (distance !== -1 && results[key] && distance < results[key])
        results[key] = distance * searchMultipliers.genres;
    });

    directors.forEach((director) => {
      const distance = searchSubstring(director, search);
      if (distance !== -1 && results[key] && distance < results[key])
        results[key] = distance * searchMultipliers.genres;
    });
  });

  const sortedResults = Object.keys(results).sort((a, b) => results[a] - results[b]);

  console.log(sortedResults);
  return sortedResults;
}
