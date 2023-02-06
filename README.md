# Netflix Redesign

This project is a redesign of the Netflix website using React and TypeScript. The goal of this project is to make a large realistic app, that is focused on user-experience. Realism features such as API Calling, debounced values, and writing to a database, are demonstrated in this app. User-experience algorithms such as personalized movie recommendations, make for a unique user experience that caters to your personal preferences.

## Features

- User creation (no password) saved into local storage to keep sessions
- User icon selection with the same avatars as Netflix (Using a text file containing all the links and categories, and a python script to convert them into JSON. See src/data/avatars )
- Levenshtein search so it will still give you results when you make a spelling mistake
- Personalized movie recommendations based on watch history (Actors, Genres, and Directors)
- Dynamically updated movie thumbnails, featuring a specific actor from your recently watched
- Personalized movie genre recommendations based on user watch history
- Custom made carousel which contains the movies, along with the avatars in the avatar selection page.

_Please Note_
There are still a few things unimplemented. For example, when you open a movie, the movie billboard will always be Shrek. Adding all of that data will take a very long time with no programming at all, and to my knowledge, there is no API that let's me fetch this data. I even tried making a Python script to scrape the images but Netflix has some security measures to prevent this sort of thing. (Feel free to make a pull request if you want to add more data 😉 )

## Test out the algorithms

### Dynamic posters

Since I don't have the time to find and add all of the posters, there are only a few movies with several posters included.

To test out this algorithm, use "The Shawshank Redemption".

If The Shawshank Redemption shows Morgan Freeman, do a quick search for Dark Waters which has Tim Robbins. All you have to do to add to the watch history is click on the movie. After clicking on Dark Waters several times, The Shawshank Redemption will now show a poster with Tim Robbins on it. You can do the same thing by searching for Seven, or Oblivion, and opening the movies to get The Shawshank Redemption poster to show Morgan Freeman.

### Levenshtein Search

In the search bar, if you search for a title, genre, or actor, and mispell something slightly, it will show similar results. For example if you search for Adam Sandler, but spell it "Adsm Sandler", All the Adam Sandler movies will come up.

### Recommend movies

Movies will be recommended to you based on your watch history, so if you search for Adam Sandler in the search bar, and click on a bunch of different movies several times, then refresh your page, you will start to see a lot more adam sandler movies, being recommended to you, along with movies that include similar genres such as comedy.

## Check it out here

_Please Note_
I removed React Router, because a React-Router + Vite configuration does not work properly with GitHub Pages. To get around this, I added a state holding the path and am conditionally rendering the pages based on the path.
This solution is not ideal, however since this site is just a demo and not used for professional use, this will work fine.

Try out the website! https://jordanlandry.github.io/netflix-redesign/

## Built With

- [React](https://reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces (Used for the front-end)
- [TypeScript](https://reactjs.org/docs/getting-started.html) - A typed superset of JavaScript that scales
- [Python](https://www.python.org/downloads/) - A high level, interpreted programming language (Python was used to convert a text file to JSON)
