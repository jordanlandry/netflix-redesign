export type MovieType = {
  [key: string]: {
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
};

// Movie data is a key value pair of movie id and movie data so we can instantly access the movie data by id
// without having to loop through the array, as in a real world scenario, we would probably have millions of movies,
// so looping through the array would be very inefficient.. We would also use a database like MongoDB to store the data,
// which would handle all this but for the sake of this project, we will use a key value pair of movie id and movie data

const movieData: MovieType = {
  "1": {
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
        actor: "Morgan Freeman",
      },
      {
        id: 2,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe8AZTnXYGyeS-RqLtSaj7WEhvsLaf8lRTFOMCnmP1-P1zwuFR7HogIyYTMJbwpgIc8buuXNpmQwy_rgU-J4q-D-hc9S9n-3cM4.webp?r=cc1",
        actor: "Tim Robbins",
      },
    ],
  },
  "2": {
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
        actor: "NULL",
      },
    ],
  },
  "3": {
    title: "Happy Gilmore",
    year: 1996,
    runtime: 92,
    genres: ["Comedy", "Sport"],
    directors: ["Dennis Dugan"],
    actors: ["Adam Sandler", "Julie Bowen", "Carl Weathers", "Allen Covert"],
    plot: "Happy Gilmore has a magical hockey stick and a magical temper. He's a struggling young golfer with anger management issues. When his grandmother and her house are threatened with foreclosure, Happy decides to try to win a PGA Tour event to save her home.",
    posters: [
      {
        id: 1,
        url: "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX44ZtVrp4r1YIvCbtBfZELoKwuRvhRpR3gHvr3nAkEUN5IhxB_mf7t9epL9UijrnRnDPw-4Dh7JoU54DQzSvIgqI9yEz3D2IM8.webp?r=107",
        actor: "Adam Sandler",
      },
    ],
  },
  "4": {
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
      {
        id: 2,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYWktoJ11xQET_OQMZ2ltwSob_DNvfOlxR-_vVJc6RXz09BEozxBo0RDQ3K9mHyZ4vQYktVviaSMQqaivEx6AvoIoZ69qZyrzTU.webp?r=5a9",
        actor: "Jonah Hill",
      },
      {
        id: 3,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRZohwYg8_guDWqTpNZpV27hZ6EMl_dOId6IpgHKaVJsHLdVB5_lgE6YrDmvPdBpTWJjDtbIVqNzYD9qqos6vfFzCFjN-zGGtHY.webp?r=09b",
        actor: "Chris Pratt",
      },
    ],
  },
  "5": {
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
  "6": {
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
  "7": {
    title: "American Psycho",
    year: 2000,
    runtime: 102,
    genres: ["Crime", "Drama", "Thriller"],
    directors: ["Mary Harron"],
    actors: ["Christian Bale", "Justin Theroux", "Josh Lucas", "Samantha Mathis"],
    plot: "A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.",
    posters: [
      {
        id: 1,
        url: "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRY4lgCLdYswgukE9UDneOJwGpAU5766GwohvqchRd0n7YYsFFmGUz3wtIkDk3YFkTnl3KvDM3PqhlDBbzksiTHtkP8fSpKheWw.webp?r=aa0",
        actor: "Christian Bale",
      },
    ],
  },
  "8": {
    title: "Billy Madison",
    year: 1995,
    runtime: 89,
    genres: ["Comedy"],
    directors: ["Tamra Davis"],
    actors: ["Adam Sandler", "Bradley Whitford", "Rachel Ticotin", "Luis Armand Garcia"],
    plot: "The spoiled son of a wealthy businessman must repeat the 6th grade at a public school in order to inherit his father's fortune.",
    posters: [
      {
        id: 1,
        url: "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbXM7qX-1oOzyd9-RKL9xEA1a4v4PJP3rDI6uz1WTFRa8K53Yq2jy5oMvkWQyQkFkGyQAijBf1ahZABnXvawNa4x_f4g-WiviTE.webp?r=1b8",
        actor: "Adam Sandler",
      },
    ],
  },
  "9": {
    title: "El Camino: A Breaking Bad Movie",
    year: 2019,
    runtime: 123,
    genres: ["Action", "Crime", "Drama"],
    directors: ["Vince Gilligan"],
    actors: ["Aaron Paul", "Charles Baker", "Matt Jones", "Charles Baker", "Bryan Cranston"],
    plot: "In the wake of his dramatic escape from captivity, Jesse must come to terms with his past in order to forge some kind of future.",
    posters: [
      {
        id: 1,
        url: "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdixjq6T9KMGrnnpxJxbJ4ZuJNTMQF10Z7sG4JjTtzEcHjMr1Pxl1Nk2BLiEob4BB8EEtAFdKD2NsuYdxebkx9EoOK9kBdo1BbpjRYYpdP_VB4NNoD22uyRdMebYr_Ijl9kN.jpg?r=076",
        actor: "Aaron Paul",
      },
    ],
  },
  "10": {
    title: "Paul Blart: Mall Cop",
    year: 2009,
    runtime: 91,
    genres: ["Action", "Comedy", "Crime"],
    directors: ["Steve Carr"],
    actors: ["Kevin James", "Jayma Mays", "Raini Rodriguez", "David Henrie"],
    plot: "Security guard Paul Blart is headed to Las Vegas to attend a Security Guard Expo with his teenage daughter Maya before she departs for college. While at the convention, he inadvertently discovers a heist - and it's up to Blart to apprehend the criminals.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU27T4t8SB10VBYGIFG6gq0hCfA0jSVHbppkPvFHR0PoqIohmF_nbCdhPfO2X5fHVidwxqOHyjSJ3ImXZw75qsNZueU2VoN8mjs.webp?r=00a",
        actor: "Kevin James",
      },
    ],
  },
  "11": {
    title: "John Wick",
    year: 2014,
    runtime: 101,
    genres: ["Action", "Crime", "Thriller"],
    directors: ["Chad Stahelski"],
    actors: ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Willem Dafoe"],
    plot: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdSebCGNXuFB9Dd3-aAZvMDxr8U7Y6ekw2hX6yzcHa4f6qcXCGdfb9GC1cHcCCHwiK5_d4aA7brtMzwKHeaqDsqTGr3UZhQTdlo.webp?r=de5",
        actor: "Keanu Reeves",
      },
    ],
  },
  "12": {
    title: "Top Gun",
    year: 1986,
    runtime: 110,
    genres: ["Action", "Adventure", "Romance"],
    directors: ["Tony Scott"],
    actors: ["Tom Cruise", "Kelly McGillis", "Val Kilmer", "Anthony Edwards"],
    plot: "As students at the United States Navy's elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABagetP_gx3ZVWUP12TYW977SKDFc18RrxM9uV73YIVKsLUfQhw52DVa3axgbWwSCglj_vyck3Tmm9_CQhQn2-vMO9tmLdvG8Fg2eu_TSYAf1ZtLVvdqBWRzZf_nAGDiRlvwgeCIpJ20AWVqxRTNOcEcc7DvBqjFeDW0.webp?r=931",
        actor: "Tom Cruise",
      },
    ],
  },
  "13": {
    title: "The Big Short",
    year: 2015,
    runtime: 130,
    genres: ["Biography", "Comedy", "Drama"],
    directors: ["Adam McKay"],
    actors: ["Ryan Gosling", "Finn Wittrock", "Melanie Lynskey", "John Magaro"],
    plot: "Four denizens in the world of high-finance predict the credit and housing bubble collapse of the mid-2000s, and decide to take on the big banks for their greed and lack of foresight.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdhOp1xfEwPwkTAeSvTkxUHWP8RvghcQBgO0qXHvWHxQ19-NWE1ylVSIPmX2xgZh_M0Rm4w6J2i_ly1g83IrEq-v-g3J9qRJCD4.webp?r=bfa",
        actor: "Ryan Gosling",
      },
    ],
  },
  "14": {
    title: "Big Daddy",
    year: 1999,
    runtime: 93,
    genres: ["Comedy"],
    directors: ["Dennis Dugan"],
    actors: ["Adam Sandler", "Joey Lauren Adams", "Jon Stewart", "Cole Sprouse"],
    plot: "A lazy law school grad adopts a kid to impress his girlfriend, but everything doesn't go as planned and he becomes the unlikely foster father.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeEPdp4_bsFQpxbgqPp1v2OY-4UzMbg1GAvt-hLiL56fKIep3qaebTjzQl0Ff5qND5xxkAG_r6Hrw8qCCk_w4g2IKs7tBd6fjFE.webp?r=50c",
        actor: "Adam Sandler",
      },
    ],
  },
  "15": {
    title: "Spiderman",
    year: 2002,
    runtime: 121,
    genres: ["Action", "Adventure", "Fantasy"],
    directors: ["Sam Raimi"],
    actors: ["Tobey Maguire", "Willem Dafoe", "Kirsten Dunst", "James Franco"],
    plot: "When bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcn0HsWOFtXyP2gPr5ffQ9ZRXUL49J_2bxkHI39j-_eJ9rB6ir8zk0oFUvRs4o3zszggFHWFEBVDpl9ZAYxO_j6DSJQzvKkj-vA.webp?r=426",
        actor: "Tobey Maguire",
      },
    ],
  },
  "16": {
    title: "Kung Fu Panda",
    year: 2008,
    runtime: 92,
    genres: ["Animation", "Action", "Adventure"],
    directors: ["Mark Osborne", "John Stevenson"],
    actors: ["Jack Black", "Ian McShane", "Angelina Jolie", "Dustin Hoffman"],
    plot: "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance: However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a novice in martial arts.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR0zP17rVQgLccmVxlLJst0pNcoHEVloRMK2kHiFdEGavJLr68Z-dUUKTKT_bPdqadvqHasPqlVhLGCG1ttyGj4CTOFj4x3287k.webp?r=9f0",
        actor: "Jack Black",
      },
    ],
  },
  "17": {
    title: "Seven",
    year: 1999,
    runtime: 127,
    genres: ["Crime", "Drama", "Mystery"],
    directors: ["David Fincher"],
    actors: ["Morgan Freeman", "Brad Pitt", "Kevin Spacey", "Andrew Kevin Walker"],
    plot: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZJ8lmqMU5dBENWnvHDbHQp1g0aM7Cl0ZTdYx5Ru6z9hOdoWhggIFX2arLDeCn0wXDK3pKl09H1ekIdPCou27jKG87Oae5uCfmc.webp?r=813",
        actor: "Morgan Freeman",
      },
    ],
  },
  "18": {
    title: "Django Unchained",
    year: 2012,
    runtime: 165,
    genres: ["Drama", "Western"],
    directors: ["Quentin Tarantino"],
    actors: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio", "Kerry Washington"],
    plot: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUnba8j1hq1OVKLDiA6sgUeb-psIlVxS30S-fGmEcc1gJ6xixTlfkod7KPIj6RN5CemZqU-5ZSUySHm2YGIbJM7Sb6mHDbSkcIU.webp?r=1be",
        actor: "Jamie Foxx",
      },
    ],
  },
  "19": {
    title: "50 First Dates",
    year: 2004,
    runtime: 99,
    genres: ["Comedy", "Romance"],
    directors: ["Peter Segal"],
    actors: ["Adam Sandler", "Drew Barrymore", "Rob Schneider", "Sean Astin"],
    plot: "A woman suffers from short-term memory loss and has no idea who her boyfriend is every day when she wakes up.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe5vaIK5Cf2Zq-43vNXEWVpHzkw11D_GWKDWOjl8kqiOrvMyfi-dbIuVfC5aZhmGF5GGik-IE5C6WFxAglt0Xxh_IMCmWkk9EFk.webp?r=45a",
        actor: "Adam Sandler",
      },
    ],
  },
  "20": {
    title: "30 Minutes or Less",
    year: 2011,
    runtime: 83,
    genres: ["Action", "Comedy", "Crime"],
    directors: ["Ruben Fleischer"],
    actors: ["Jesse Eisenberg", "Danny McBride", "Aziz Ansari", "Nick Swardson"],
    plot: "A pizza delivery guy finds himself in the middle of a hostage situation when he is asked to rob a bank.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZhG4zMf3fcNJsL3ROcdggXXvCVEw1TFFPh-aDMBPgcClELvgyeKblk9pDwFmGNdI2gcH_3a2SR12cLsLwsqqDQcHE1SNQhTt-w.webp?r=a4e",
        actor: "Jesse Eisenberg",
      },
    ],
  },
  "21": {
    title: "Limitless",
    year: 2011,
    runtime: 105,
    genres: ["Mystery", "Sci-Fi", "Thriller"],
    directors: ["Neil Burger"],
    actors: ["Bradley Cooper", "Anna Friel", "Abbie Cornish", "Robert De Niro"],
    plot: "With the help of a mysterious pill that enables the user to access 100 percent of his brain abilities, a struggling writer becomes a financial wizard, but it also puts him in a new world with lots of dangers.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRPykFk3YWv8wT03-oA-3K3-vbytruFNKcvt34hSEqbJiifCeQJNI6UJdz-UpaokcreMGiAigTeA17L4a1UEKwl5lZeI4w52Xyk.webp?r=d32",
        actor: "Bradley Cooper",
      },
    ],
  },
  "22": {
    title: "Dark Waters",
    year: 2019,
    runtime: 127,
    genres: ["Drama", "Thriller"],
    directors: ["Todd Haynes"],
    actors: ["Mark Ruffalo", "Anne Hathaway", "Tim Robbins", "Bill Pullman"],
    plot: "A corporate defense attorney takes on an environmental lawsuit against a chemical company that exposes a lengthy history of pollution.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeJTr6-4LGNZLVQRUC-RoMuHkh9Oos8E4wicwH5-DeK5yb8_mtG8sHmukawOkKKWkP7yFhwuKQIN-vAkHn7Hvi2nERflyCfWjH0.webp?r=cb4",
        actor: "Mark Ruffalo",
      },
    ],
  },
  "23": {
    title: "Oblivion",
    year: 2013,
    runtime: 124,
    genres: ["Action", "Adventure", "Mystery"],
    directors: ["Joseph Kosinski"],
    actors: ["Tom Cruise", "Morgan Freeman", "Olga Kurylenko", "Andrea Riseborough"],
    plot: "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTA7KCCT3NayyCZZk5FomF10MdJZYNeCCpE4beLQx3ZkBpGNBlj-Wag1QAoUBpzxwmtdWhF5mJL_CFh7qCXfgwb6YkPq7lHpEVQ.webp?r=23b",
        actor: "Tom Cruise",
      },
    ],
  },
};

export default movieData;
