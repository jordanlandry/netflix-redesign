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

  LEVENSHTEIN_DISTANCE: 5,
};

export default properties;
