import properties from "../../properties";
import levenshteinDistance from "./getDistance";

export default function searchSubstring(str: string, substr: string) {
  if (substr.length > str.length) return false;
  if (substr.length === str.length) return substr === str;

  for (let i = 0; i < str.length - substr.length + 1; i++) {
    if (levenshteinDistance(str.substring(i, substr.length), substr) <= properties.LEVENSHTEIN_DISTANCE) return true;
  }

  return false;
}
