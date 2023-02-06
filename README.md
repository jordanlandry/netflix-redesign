# Netflix Redesign

This project is a redesign of the Netflix website using React and TypeScript. The goal of this project is to make a large realistic app, that is focused on user-experience. Realism features such as API Calling, debounced values, and writing to a database, are demonstrated in this app. User-experience algorithms such as personalized movie recommendations, make for a unique user experience that caters to your personal preferences.

## Features

- User creation
- User icon selection, same avatars as Netflix
- Levenshtein search so it will still give you results when you make a spelling mistake
- Personalized movie recommendations based on watch history
- Dynamically updated movie thumbnails, featuring a specific actor from your recently watched
- Personalized movie genre recommendations based on user watch history
- Custom made carousel which contains the movies

_Please Note_
There are still a few bugs in this program and unimplemented features for example, there's nothing stopping you from creating a user with an empty name. However I may not be fixing these issues in the near future as there are many other projects I would like to work on, and the project was for a learning experience and I understand and know how to fix and implement the missing features, therefore it would be a waste of time for me to implement them now. For example one of the features I didn't add were all of the backgrounds for each movie modal. Instead, it's just shrek, because adding them all would take a very long time and to my knowledge, there is no API that let's me fetch this data. (Feel free to make a pull request if you wanna add more data ;) )

## Test out some of the algorithms

### Dynamic posters

Since I don't have the time to find and add all of the posters, there are only a few movies with several posters included.

To test out this algorithm, use "The Shawshank Redemption".

If The Shawshank Redemption shows Morgan Freeman, do a quick search for Dark Waters which has Tim Robbins. All you have to do to add to the watch history is click on the movie. After clicking on Dark Waters several times, The Shawshank Redemption will now show a poster with Tim Robbins on it.

If The Shawshank Redemption shows Tim Robbins, search for Seven, or Oblivion, and "watch" the movie by clicking on it. After clicking on it several times, The Shawshank Redemption poster will switch to a Morgan Freeman poster.

### Levenshtein Search

In the search bar, if you search for a title, genre, or actor, and mispell something slightly. For example if you search for Adam Sandler, but spell it "Adsm Sandler", All the Adam Sandler movies will come up.

### Recommend movies

Movies will be recommended to you based on your watch history, so if you search for Adam Sandler in the search bar, and click on a bunch of different movies several times, then refresh your page, you will start to see a lot more adam sandler movies, being recommended to you, along with movies that include similar genres such as comedy.

## Check it out here

_Important Note_
I removed React Router, because a React-Router + Vite configuration does not work properly. To get around this, I added a state holding the path and am conditionally rendering the pages based on the path.
This solution is not ideal, however since this site is just a demo, this will work fine.

Try out the website! https://jordanlandry.github.io/netflix-redesign/

## Built With

- [React](https://reactjs.org/docs/getting-started.html) - A JavaScript library for building user interfaces
- [TypeScript](https://reactjs.org/docs/getting-started.html) - A typed superset of JavaScript that scales
