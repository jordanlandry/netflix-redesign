export type MovieType = {
  id: number;
  title: string;
  year: number;
  runtime: number;
  genres: string[];
  directors: string[];
  actors: string[];
  plot: string;
  posters: {
    id: number;
    url: string;
    actor: string;
  }[];
};

const movieData: MovieType[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    runtime: 142,
    genres: ["Crime", "Drama"],
    directors: ["Frank Darabont"],
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
    plot: "Two imprisoned...",
    posters: [
      {
        id: 1,
        url: "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaT19MAP0NDJ6LphiqxjuXTRkVGVjuRfvtzbk38v9BnmV58R6lb4DoA-J-x4BTHDoBZIjeYqOnpu00FUAc1EuxCKFpbreCy4hVQ.webp?r=d45",
        actor: "Tim Robbins",
      },
      { id: 2, url: "https://images-na.ssl-images-amazon.com/images/I/51j8Y9Z7QWL._AC_.jpg", actor: "Morgan Freeman" },
      { id: 3, url: "https://images-na.ssl-images-amazon.com/images/I/51j8Y9Z7QWL._AC_.jpg", actor: "Bob Gunton" },
      { id: 4, url: "https://images-na.ssl-images-amazon.com/images/I/51j8Y9Z7QWL._AC_.jpg", actor: "William Sadler" },
    ],
  },
  {
    id: 2,
    title: "The Spongebob Movie",
    year: 2004,
    runtime: 87,
    genres: ["Comedy", "Adventure"],
    directors: ["Stephen Hillenburg", "Mark Osborne"],
    actors: ["Tom Kenny", "Bill Fagerbakke", "Rodger Bumpass", "Clancy Brown"],
    plot: "SpongeBob SquarePants and his friends go on a quest to retrieve King Neptune's stolen crown.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUfefspsij4-seOUjnvKkYYHt9Hhmth0PybQK19HeER7nx9ukdvuVF4ePp_Y-dwPYirGtDjgUjqlJgX2jvSv2dEeKvMyITXYV2c.webp?r=6cc",
        actor: "Spongebob",
      },
    ],
  },
  {
    id: 3,
    title: "Happy Gilmore",
    year: 1996,
    runtime: 92,
    genres: ["Comedy", "Sport"],
    directors: ["Dennis Dugan"],
    actors: ["Adam Sandler", "Julie Bowen", " Christopher McDonald", "Allen Covert"],
    plot: "A rejected hockey player puts his skills to the golf course to save his grandmother's house.",
    posters: [
      {
        id: 1,
        url: "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX44ZtVrp4r1YIvCbtBfZELoKwuRvhRpR3gHvr3nAkEUN5IhxB_mf7t9epL9UijrnRnDPw-4Dh7JoU54DQzSvIgqI9yEz3D2IM8.webp?r=107",
        actor: "Adam Sandler",
      },
    ],
  },
  {
    id: 4,
    title: "Moneyball",
    year: 2011,
    runtime: 133,
    genres: ["Biography", "Drama", "Sport"],
    directors: ["Bennett Miller"],
    actors: ["Brad Pitt", "Robin Wright", "Jonah Hill", "Philip Seymour Hoffman"],
    plot: "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUPci5GkCY-lE-mgoZHg1Ki2yiwvPKsz6HQcbD_1HnCJlcF6TtgM2bCv6-BrD6wZPLWUi-L7KM6NXvJIaZtS5d4rCXqrlyGIxyk.webp?r=0dd",
        actor: "Brad Pitt",
      },
    ],
  },
  {
    id: 5,
    title: "Despicable Me",
    year: 2010,
    runtime: 95,
    genres: ["Animation", "Comedy", "Family"],
    directors: ["Pierre Coffin", "Chris Renaud"],
    actors: ["Steve Carell", "Jason Segel", "Russell Brand", "Julie Andrews"],
    plot: "When a criminal mastermind uses a trio of orphans as pawns for a grand scheme, he finds their love is profoundly changing him for the better.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX3SmVQNyJaYhcfHLWKGtVjakppI1DYU2rBogYGw0FBhXMXtXfrleOCZTFM0j_JQaOgD8-frcEJ8yVOBtNjGXyVmvxuGNYwdP5U.webp?r=5fc",
        actor: "Steve Carell",
      },
    ],
  },
  {
    id: 6,
    title: "Shrek",
    year: 2001,
    runtime: 90,
    genres: ["Animation", "Adventure", "Comedy"],
    directors: ["Andrew Adamson", "Vicky Jenson"],
    actors: ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow"],
    plot: "After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfdDWikRUebcDD7xFdaeMl2PZTM0b3GwV3BQu4Xhds-Wo-KuaTl0V9MAB8VqEjMvMRgurmiu8eUgKvU80u9NPpCJpIoBGYEwp5s.webp?r=718",
        actor: "Shrek",
      },
    ],
  },
];

export default movieData;
