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
  "24": {
    title: "Grown Ups 2",
    year: 2013,
    runtime: 101,
    genres: ["Comedy"],
    directors: ["Dennis Dugan"],
    actors: ["Adam Sandler", "Kevin James", "Chris Rock", "David Spade"],
    plot: "After moving his family back to his hometown to be with his friends and their kids, Lenny finds out that between old bullies, new bullies, schizo bus drivers, drunk cops on skis, and 400 costumed party crashers sometimes crazy follows you.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYQNBqgGTt8uNAGMNCbQPN8r-MZWdQGL1mRRXMy2z6wkDhd8kK2QVdQdnh5kTKVN669YTyzEvi7Ce8B2US_vIbzj6E50D0_fN9A.webp?r=c1d",
        actor: "Adam Sandler",
      },
    ],
  },
  "25": {
    title: "21",
    year: 2008,
    runtime: 123,
    genres: ["Crime", "Drama"],
    directors: ["Robert Luketic"],
    actors: ["Jim Sturgess", "Kevin Spacey", "Kate Bosworth", "Aaron Yoo"],
    plot: "A brilliant group of students become card-counting experts with the intent of swindling millions out of Las Vegas casinos by playing blackjack.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABccc5VFect0fVfwBFpv3H8ohg7LrJdrIpTGki48SCXeeFdc0OPwFruSqP73b9xI_lBrn4XBrailXyUyXtCV0c6Mkxsn8VRbH6K4.webp?r=e73",
        actor: "Jim Sturgess",
      },
    ],
  },
  "26": {
    title: "John Wick 2",
    year: 2017,
    runtime: 122,
    genres: ["Action", "Crime", "Thriller"],
    directors: ["Chad Stahelski"],
    actors: ["Keanu Reeves", "Riccardo Scamarcio", "Ian McShane", "Ruby Rose"],
    plot: "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins' guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world's most dangerous killers.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbYi8g7ckeBJ-Q1M1b-8Is5semc_B8e5wk1JncLckOdd6KWw2tcuZ0zS3EoLfmFhToKXQ34dDCy3EsdA3PoEf897OwG0CimJ-6c.webp?r=664",
        actor: "Keanu Reeves",
      },
    ],
  },
  "27": {
    title: "Spiderman into the Spiderverse",
    year: 2018,
    runtime: 117,
    genres: ["Animation", "Action", "Adventure"],
    directors: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
    actors: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld", "Mahershala Ali"],
    plot: "Miles Morales is juggling his life between being a high school student and being a...",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQwkjYc8x8wmkNzKOXChJUIhL1KDTvTZYIvixvN9MtiKro4lP5iew1D-Cho3w5JW2SSeZ05hIsVzUjIr4ZSLG2Pl2J2PR02mKio.webp?r=764,",
        actor: "Shameik Moore",
      },
    ],
  },
  "28": {
    title: "The Blind Side",
    year: 2009,
    runtime: 129,
    genres: ["Biography", "Drama", "Sport"],
    directors: ["John Lee Hancock"],
    actors: ["Sandra Bullock", "Tim McGraw", "Quinton Aaron", "Kathy Bates"],
    plot: "The story of Michael Oher, a homeless and traumatizing...",
    posters: [
      {
        id: 1,
        url: "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeV7gT0SSdQ2vkO9Rau_9GGDApKyg3SH1pPE-sJ_IrB27oGndkGZzkEysE4JCn9Gcr8HtJ26on-4GPbjFqBf4T4AWXEduCqsj5M.webp?r=c5f",
        actor: "Sandra Bullock",
      },
    ],
  },
  "29": {
    title: "The Breakfast Club",
    year: 1985,
    runtime: 97,
    genres: ["Comedy", "Drama"],
    directors: ["John Hughes"],
    actors: ["Emilio Estevez", "Judd Nelson", "Molly Ringwald", "Ally Sheedy"],
    plot: "Five high school students, all different stereotypes, meet in detention, where they pour their hearts out to each other, and discover how they have a lot more in common than they thought.",
    posters: [
      {
        id: 1,
        url: "http://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABe5Kczlq3rRMr8dXn_0HYFldiuVJmuXTs-4GdIFYnU92fnYsxIuf2FIZi3-wLzSnyi8p3A4oWz8RaBA29o2DaIQ6rPpQkoKGwmQ.webp?r=79e",
        actor: "Molly Ringwald",
      },
    ],
  },
  "30": {
    title: "Back to the Future",
    year: 1985,
    runtime: 116,
    genres: ["Adventure", "Comedy", "Sci-Fi"],
    directors: ["Robert Zemeckis"],
    actors: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson", "Crispin Glover"],
    plot: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU7BURHhsuRHceg0J_BYL3AhbGAgKZBQK02JQtr_VHfmcr2sQeV_oHWxovZL0TZ8SK4GBv7nizR0cRUFwIEEm87xaIcdA1Bmav0.webp?r=929",
        actor: "Michael J. Fox",
      },
    ],
  },
  "31": {
    title: "The Hangover",
    year: 2009,
    runtime: 100,
    genres: ["Comedy"],
    directors: ["Todd Phillips"],
    actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis", "Justin Bartha"],
    plot: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa3SokHnUFIeRr4e52Q9cJGudcrihayLNDTFBWX-etQjvsdVSyofMnOxQhOrxVQHQXw0Zb6CWdFzypQZwtAz82Hl0qDFASoS4m8.webp?r=0f8",
        actor: "Bradley Cooper",
      },
    ],
  },
  "32": {
    title: "Inception",
    year: 2010,
    runtime: 148,
    genres: ["Action", "Adventure", "Sci-Fi"],
    directors: ["Christopher Nolan"],
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    plot: "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSKgYXgCLuCXTBG_tW3FcM7z3tQL5NynOXsG02rEzOihVuaZtQfO9EL76AucYb94pDJc3VUERSwbahUdUDiCR2pU5GRVoYBeWPI.webp?r=c15",
        actor: "Leonardo DiCaprio",
      },
    ],
  },
  "33": {
    title: "GoodFellas",
    year: 1990,
    runtime: 146,
    actors: ["Robert De Niro", "Ray Liotta", "Joe Pesci", "Lorraine Bracco"],
    genres: ["Biography", "Crime", "Drama"],
    directors: ["Martin Scorsese"],
    plot: "The story of Henry Hill and his life through the teen years into the years of mafia, covering his relationship with his wife Karen Hill and his Mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABX37qgg9JP9rLJv2xoaUqcG718o3ydPeb8jE_UDF9YwIm4Vqyf2MXAsairsubTmrCAHPxqDCLRjf_J4CYMvUo7HDbheS6PuLrog.webp?r=22f",
        actor: "Robert De Niro",
      },
    ],
  },
  "34": {
    title: "22 Jump Street",
    year: 2014,
    runtime: 112,
    genres: ["Action", "Comedy", "Crime"],
    directors: ["Phil Lord", "Christopher Miller"],
    actors: ["Channing Tatum", "Jonah Hill", "Ice Cube", "Dave Franco"],
    plot: "After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college. But when Jenko meets a kindred spirit on the football team, and Schmidt infiltrates the bohemian art major scene, they begin to question their partnership. Now they don't have to just crack the case - they have to figure out if they can have a mature relationship. If these two overgrown adolescents can grow from freshmen into real men",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa9KFk7N4Lp2tZ07fYkqDAoMVdNo60F9CMaxmdcva9XmKBahS_BPzBFEV-IFeG5TY1vOqh3J3Ao4rMu_ckIxXL9Na0Fu6bNsjyE.webp?r=aa1",
        actor: "Channing Tatum",
      },
    ],
  },
  "35": {
    title: "Charlie and the Chocolate Factory",
    year: 2005,
    runtime: 115,
    genres: ["Adventure", "Family", "Fantasy"],
    directors: ["Tim Burton"],
    actors: ["Johnny Depp", "Freddie Highmore", "Helena Bonham Carter", "Noah Taylor"],
    plot: "",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcdbTGvbqcm2S3vYgGcDp_or1q27frCPFzZeEQKlJjuen0LqZfqD1W6RaDgY61DaFz3xYwScEBpz7uii8rgX1OGsKEVkqT3CHU4.webp?r=6bc",
        actor: "Johnny Depp",
      },
    ],
  },
  "36": {
    title: "Kung Fu Panda 3",
    year: 2016,
    runtime: 95,
    genres: ["Animation", "Action", "Adventure"],
    directors: ["Alessandro Carloni", "Jennifer Yuh Nelson"],
    actors: ["Jack Black", "Dustin Hoffman", "Angelina Jolie", "Lucy Liu"],
    plot: `Continuing his "legendary adventures of awesomeness", Po must face two hugely epic, but different threats: one supernatural and the other a little closer to his home.`,
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcTAiQkIFBgaKW9VsBfODraRDgYb9etsArxLsbD8nYl7cQSkC8M9zwnf-jK3zdevulvPhF_XFgEDCLlnoeM8Ck8cWaASmAIZv18.webp?r=3bd",
        actor: "Jack Black",
      },
    ],
  },
  "37": {
    title: "Step Brothers",
    year: 2008,
    runtime: 98,
    genres: ["Comedy"],
    directors: ["Adam McKay"],
    actors: ["Will Ferrell", "John C. Reilly", "Mary Steenburgen", "Richard Jenkins"],
    plot: "Two aimless middle-aged losers still living at home are forced against their will to become roommates when their parents marry.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABemeNcV3Wv06e1Q9XhVNOKKxKWwc_N-HeRWqSNp9nop6l5b47pkqSkRTWx5M9l7pWuGI4lOTiKSu-i_yg__pX8oD4HPv6w7lUDc.webp?r=a7c",
        actor: "Will Ferrell",
      },
    ],
  },
  "38": {
    title: "Taxi Driver",
    year: 1976,
    runtime: 113,
    genres: ["Crime", "Drama"],
    directors: ["Martin Scorsese"],
    actors: ["Diahnne Abbott", "Frank Adu", "Gino Ardito", "Victor Argo"],
    plot: "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY7DackpCyZhOPNmB3EJ-D2ttoTGY59bQiDUmqohyk2GGXVAGzfaMn_zcVmqQQtBAY5H6ZNApKK6ca_HI-Vor1GC7KsvIvi69X0.webp?r=f12",
        actor: "Robert De Niro",
      },
    ],
  },
  "39": {
    title: "Boyz n the Hood",
    year: 1991,
    runtime: 112,
    genres: ["Crime", "Drama"],
    directors: ["John Singleton"],
    actors: ["Cuba Gooding Jr.", "Ice Cube", "Morris Chestnut", "Larry Fishburne"],
    plot: "Tells the story of three ...",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSzVCz0_OdbWBIlUbUpmLcJ49kO6ahj81UJFGwzqi7il-JDUmuNPxZyQBRIytZOnrcz2k3CO4bicC6aoqbsIVuX9tfyXGeodZJI.webp?r=b08",
        actor: "Cuba Gooding Jr.",
      },
    ],
  },
  "40": {
    title: "Coach Carter",
    year: 2005,
    runtime: 136,
    genres: ["Drama", "Sport"],
    directors: ["Thomas Carter"],
    actors: ["Samuel L. Jackson", "Rob Brown", "Ashanti", "Robert Ri'chard"],
    plot: "After the Richmond High basketball team's coach is fired for a technical foul, he takes over the team himself.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdfiig0OJqkei771rIrOLOQlniUdDr94Hdw7cnyO3lOQlnditxg0TZbTlHiqqM3bJ74gP3chaJs3IRJwi2-h9xJSq4fOOyBRwIQ.webp?r=307",
        actor: "Samuel L. Jackson",
      },
    ],
  },
  "41": {
    title: "The Benchwarmers",
    year: 2006,
    runtime: 94,
    genres: ["Comedy", "Sport"],
    directors: ["David Mickey Evans"],
    actors: ["Rob Schneider", "David Spade", "Jon Heder", "Jon Lovitz"],
    plot: "Three clueless dads try to pose as coaches for their sons' baseball team.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdfFJKcmyxQNP9Fc7UzVcPnt49uE_ox4j9XqOglS7lHtcB7pnhoRhSUNwFxa1YTgHqPjwGff71deZJ7thMl-TaWKrIPmgsLVQYA.webp?r=d2c",
        actor: "Rob Schneider",
      },
    ],
  },
  "42": {
    title: "The pursuit of Happyness",
    year: 2006,
    runtime: 117,
    genres: ["Biography", "Drama"],
    directors: ["Gabriele Muccino"],
    actors: ["Will Smith", "Thandie Newton", "Jaden Smith", "Brian Howe"],
    plot: "A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZEv8z9IWm7DDzS-9C0AcARf1QvuUo6xW407C4bPfSOkK9M4MzE3g09yU8g7LF9v9dMop8Gfzm03gyHDsDlq56QSi_VLDk8GYD8.webp?r=c7f",
        actor: "Will Smith",
      },
    ],
  },
  "43": {
    title: "White Chicks",
    year: 2004,
    runtime: 109,
    genres: ["Comedy", "Crime"],
    directors: ["Keenen Ivory Wayans"],
    actors: ["Shawn Wayans", "Marlon Wayans", "Busy Philipps", "Jaime King"],
    plot: "Two FBI agents, posing as white supremacists, attempt to infiltrate a college sorority.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRnJoMzXGJTmndJQ-cx8S1DdV2mG1vZg24mHUZXA18EVi6WF7BHwV0OewQvXzyC3Y6gyRysIIsnYWpzBdxxGHwBQSK9DlkizBVg.webp?r=f0e",
        actor: "Shawn Wayans",
      },
    ],
  },
  "44": {
    title: "Spirited Away",
    year: 2001,
    runtime: 125,
    genres: ["Animation", "Adventure", "Family", "Fantasy", "Mystery"],
    directors: ["Hayao Miyazaki"],
    actors: ["Daveigh Chase", "Suzanne Pleshette", "Miyu Irino", "Rumi Hiiragi"],
    plot: "During her family's move to the suburbs, a sullen 10-year",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRnJoMzXGJTmndJQ-cx8S1DdV2mG1vZg24mHUZXA18EVi6WF7BHwV0OewQvXzyC3Y6gyRysIIsnYWpzBdxxGHwBQSK9DlkizBVg.webp?r=f0e",
        actor: "Daveigh Chase",
      },
    ],
  },

  "45": {
    title: "Megamind",
    year: 2010,
    runtime: 95,
    genres: ["Animation", "Action", "Adventure", "Comedy", "Family", "Sci-Fi"],
    directors: ["Tom McGrath"],
    actors: ["Will Ferrell", "Brad Pitt", "Tina Fey", "David Cross"],
    plot: "The supervillain Megamind finally defeats his nemesis, the superhero",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTSKWRRN78_w5eR1VvnCKTLjOkl0ss4Nj5ubByf9b03DKYKJEN13NrP-ZEQKGI0wMh640Ay3xh9GeAsvKYr69mTTF4uTYmmFnuQ.webp?r=509",
        actor: "Will Ferrell",
      },
    ],
  },
  "46": {
    title: "Escape From Alcatraz",
    year: 1979,
    runtime: 112,
    genres: ["Biography", "Crime", "Drama"],
    directors: ["Don Siegel"],
    actors: ["Clint Eastwood", "Patrick McGoohan", "Roberts Blossom", "Fred Ward"],
    plot: "The true story of the escape of three prisoners from Alcatraz in 1962.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV81lypIPFGEqWH_jCxEr4bNZtGtfV_c70IMi0AITa5QSiRzdebNXVq0B_cEP-OGMwTtAJlC7QKUkYvkP4qACHzwfZexWz-WC8k.webp?r=beb",
        actor: "Clint Eastwood",
      },
    ],
  },
  "47": {
    title: "The Notebook",
    year: 2004,
    runtime: 123,
    genres: ["Drama", "Romance"],
    directors: ["Nick Cassavetes"],
    actors: ["Ryan Gosling", "Rachel McAdams", "James Garner", "Gena Rowlands"],
    plot: "A poor yet passionate young man falls in love with a rich ",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZKsZrRXPb9k_DPwzAapkk8CfQ-hnOdkrwZy9k7o7R7GVQ1IwctO4qsZenK5XZ4Yt3LwI56TiMki8hJ6dP3zmHItCWS03bl2_a0.webp?r=406",
        actor: "Ryan Gosling",
      },
    ],
  },
  "48": {
    title: "A Dog's Purpose",
    year: 2017,
    runtime: 100,
    genres: ["Comedy", "Drama", "Family"],
    directors: ["Lasse Hallström"],
    actors: ["Josh Gad", "Dennis Quaid", "Britt Robertson", "Kathryn Prescott"],
    plot: "A dog goes on quest to discover his purpose in life over the course of several lifetimes with multiple owners.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSN2Ayq47edZ85io0jcScZcFmgBgSeV3jYSPSqkbXojiA8PREkbcK21otg4rbXXgZFg9HNS6DEIFXrVCPGBkamslHKdvqjhecdk.webp?r=269",
        actor: "Josh Gad",
      },
    ],
  },
  "49": {
    title: "Deck The Halls",
    year: 2006,
    runtime: 90,
    genres: ["Comedy", "Family"],
    directors: ["John Whitesell"],
    actors: ["Danny DeVito", "Matthew Broderick", "Kristin Chenoweth", "Kristin Davis"],
    plot: "Two neighbors have it out after one of them decorates his house for the holidays so brightly that it can be seen from space.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR7fatw-p349lRSjMrUqiqHuTE6EShbvFZ44TgYD9lU4Q-zbwnZ-_rgglaYiI0XK35ggdQzWMC02CijJnKyDBuP3YMENlaVHTuc.webp?r=b14",
        actor: "Danny DeVito",
      },
    ],
  },
  "50": {
    title: "Ocean's Eleven",
    year: 2001,
    runtime: 116,
    genres: ["Crime", "Thriller"],
    directors: ["Steven Soderbergh"],
    actors: ["George Clooney", "Brad Pitt", "Matt Damon", "Andy Garcia"],
    plot: "Danny Ocean and his eleven accomplices plan to rob three Las Vegas casinos simultaneously.",
    posters: [
      {
        id: 1,
        url: "https://occ-0-7167-999.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfUXx3hsDzcdw5wSicDui2-r8O5JJEq6_7puQFFTdLp1aQ8rRw4NFp5332xu9LuGXCugXDFe2_yRDp19N76WafBHkgiasCjTQV0.webp?r=2f0",
        actor: "George Clooney",
      },
    ],
  },
};

export default movieData;
