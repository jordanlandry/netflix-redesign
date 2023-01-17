export type UserType = {
  id: string;
  name: string;
  icon: string;
  birthday: {
    day: number;
    month: string;
    year: string;
  };

  recentlyWatched: {
    id: string;
    time: number;
  }[];

  habits: {
    genres: { [key: string]: number };
    directors: { [key: string]: number };
    actors: { [key: string]: number };
  };

  lastLoggedIn: number;
};

// The genres, directors and actors are stored as an object with the name as the key and the value is the number of times they have been watched,
// as a percentage of the total number of the movie watched. For example, if the user has watched 50% of the movies with Brad Pitt in them,
// then the value for Brad Pitt will increase by 0.5. This will be used to order the recommendations to give the user the most relevant recommendations.

const users = [
  {},
  // {
  //   id: 1,
  //   name: "Jordan",
  //   icon: "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_960_720.png",
  //   birthday: { day: 6, month: 2, year: 2001 },
  //   recentlyWatched: [
  //     { id: 1, time: 20 },
  //     { id: 2, time: 10 },
  //     { id: 3, time: 5 },
  //   ],
  //   genres: { Action: 1, Comedy: 1, Drama: 1 },
  //   directors: { "Steven Spielberg": 1 },
  //   actors: { "Brad Pitt": 1, "Jonah Hill": 3, "Morgan Freeman": 0.2, "Tim Robbins": 0.9 },
  //   lastLoggedIn: 0,
  // },
  // {
  //   id: 2,
  //   name: "Sebastian",
  //   icon: "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_960_720.png",
  //   birthday: { day: 26, month: 1, year: 2003 },
  //   recentlyWatched: [
  //     { id: 1, time: 20 },
  //     { id: 2, time: 10 },
  //     { id: 3, time: 5 },
  //   ],
  //   genres: { Action: 1, Comedy: 1, Drama: 1 },
  //   directors: { "Steven Spielberg": 1 },
  //   actors: { "Brad Pitt": 1 },
  //   lastLoggedIn: 0,
  // },
  // {
  //   id: 3,
  //   name: "John",
  //   icon: "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_960_720.png",
  //   birthday: { day: 10, month: 18, year: 2009 },
  //   recentlyWatched: [
  //     { id: 1, time: 20 },
  //     { id: 2, time: 10 },
  //     { id: 4, time: 5 },
  //   ],
  //   genres: { Action: 1, Comedy: 1, Drama: 1 },
  //   directors: { "Steven Spielberg": 1 },
  //   actors: { "Brad Pitt": 1 },
  //   lastLoggedIn: 0,
  // },
];

export default users;
