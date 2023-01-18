import movieData from "../../data/movie/movieData";

export default function getTrending() {
  // If this was a real program with a proper backend, I would probably have a viewCount property on
  // the video object and sort by that based on the time period, and have weights for each time period,
  // For example if they watched it yesterday, it would be worth more than if they watched it a week ago

  // For this project, I'm going to use a random number generator to simulate the view count

  const data = new Set();
  const moviesLeft = { ...movieData };

  while (data.size < 10) {
    const randomMovie = Object.keys(moviesLeft)[Math.floor(Math.random() * Object.keys(moviesLeft).length)];
    data.add({ ...movieData[randomMovie], id: randomMovie });
    delete moviesLeft[randomMovie];
  }

  return data;
}
