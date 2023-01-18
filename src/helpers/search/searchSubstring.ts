import properties from "../../properties";
import levenshteinDistance from "./getDistance";

export default function searchSubstring(str: string, substr: string) {
  str = str.toLowerCase();
  substr = substr.toLowerCase();

  if (substr.length > str.length) return -1;
  if (substr.length === str.length) return substr === str ? 0 : -1;

  for (let i = 0; i < str.length - substr.length + 1; i++) {
    if (levenshteinDistance(str.substring(i, substr.length), substr) <= properties.LEVENSHTEIN_DISTANCE)
      return properties.LEVENSHTEIN_DISTANCE;
  }

  return -1;
}
