import { UserType } from "../../data/userData";

// TODO Fix this type
export default function selectPoster(user: UserType, posters: any) {
  if (!posters) return "";

  // Go through posters
  let result: number[] = [];

  posters.forEach((poster: any) => {
    if (user.habits.actors[poster.actor]) result.push(user.habits.actors[poster.actor]);
  });

  let maxIdx = 0;
  result.forEach((value, i) => {
    if (value > result[maxIdx]) maxIdx = i;
  });

  return posters[maxIdx];
}
