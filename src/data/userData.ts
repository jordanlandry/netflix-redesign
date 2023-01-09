export type UserType = {
  id: number;
  name: string;
  icon: string;
  birthday: {
    day: number;
    month: number;
    year: number;
  };

  recentlyWatched: {
    id: number;
    time: number;
  }[];

  genres: string[];
  directors: string[];
  actors: string[];
};

const users = [
  {
    id: 1,
    name: "Jordan",
    icon: "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_960_720.png",
    birthday: {
      day: 6,
      month: 2,
      year: 2001,
    },

    recentlyWatched: [
      { id: 1, time: 20 },
      { id: 2, time: 10 },
      { id: 3, time: 5 },
    ],

    genres: ["Action", "Comedy", "Drama"],
    directors: ["Steven Spielberg"],
    actors: ["Brad Pitt"],
  },
  {
    id: 2,
    name: "Sebastian",
    icon: "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_960_720.png",
    birthday: {
      day: 26,
      month: 1,
      year: 2003,
    },

    recentlyWatched: [
      { id: 1, time: 20 },
      { id: 2, time: 10 },
      { id: 3, time: 5 },
    ],

    genres: ["Drama"],
    directors: ["Steven Spielberg"],
    actors: ["Brad Pitt"],
  },
  {
    id: 3,
    name: "John",
    icon: "https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081_960_720.png",
    birthday: {
      day: 10,
      month: 18,
      year: 2009,
    },

    recentlyWatched: [
      { id: 1, time: 20 },
      { id: 2, time: 10 },
      { id: 4, time: 5 },
    ],

    genres: ["Comedy"],
    directors: ["Steven Spielberg"],
    actors: ["Brad Pitt"],
  },
];

export default users;
