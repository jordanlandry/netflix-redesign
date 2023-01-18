export interface BreakpointsType {
  [key: string]: number;
}

const properties = {
  MOBILE_BREAKPOINT: 768,

  // SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutes
  SESSION_TIMEOUT: 30 * 1000, // 30 seconds TODO (for testing, will change to 30 minutes)

  MIN_AGE: 8,
  MAX_WATCH_HISTORY: 50,

  SIMULATE_FETCH_DELAY: 1000, // ms, since we don't have a real backend, this is used to simulate a fetch delay

  BREAKPOINTS: { m: 768, l: 1024, xl: 1280, xxl: 1536, max: 1920 },

  POSTER_ASPECT_RATIO: 73 / 41,

  LEVENSHTEIN_DISTANCE: 2,
};

export default properties;

// https://media.licdn.com/dms/image/C4D03AQGighgSMuJaxA/profile-displayphoto-shrink_100_100/0/1516264401193?e=1679529600&v=beta&t=sn_1rc-bVjFhPy7rO2wvdiSiNDa7PSNTPLgj7kPUCi0
