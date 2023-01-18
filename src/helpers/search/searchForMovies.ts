import movieData, { MovieType } from "../../data/movie/movieData";
import searchSubstring from "./searchSubstring";

export default function searchForMovies(search: string) {
  // Go through each movie and check if the search string is a substring of the title, actors, genres, director, or description
  // If it is, add it to the results array

  const results: any[] = [];

  Object.keys(movieData).forEach((key) => {
    // Go through each property of the movie and check if the search string is a substring of it
    const { title, actors, genres, directors } = movieData[key];

    if (searchSubstring(title, search)) results.push(key);
    else if (actors.some((actor) => searchSubstring(actor, search))) results.push(key);
    else if (genres.some((genre) => searchSubstring(genre, search))) results.push(key);
    else if (directors.some((director) => searchSubstring(director, search))) results.push(key);
  });

  return results;
}
