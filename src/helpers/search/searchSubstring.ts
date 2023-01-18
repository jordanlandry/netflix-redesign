import properties from "../../properties";
import levenshteinDistance from "./getDistance";

export default function searchSubstring(str: string, substr: string) {
  str = str.toLowerCase();
  substr = substr.toLowerCase();

  if (substr.length > str.length) return levenshteinDistance(substr, str);
  if (substr.length === str.length) return levenshteinDistance(str, substr);

  // Need to do some sort of sliding window algorithm of the length of the substring, shifting ovcer by 1 each time
  let distance = Infinity;
  for (let i = 0; i < substr.length; i++) {
    const newDistance = levenshteinDistance(str.substring(i, substr.length + i), substr);
    if (newDistance === 0) return 0;

    distance = Math.max(distance, newDistance);
  }

  return distance;
}
