import { useContext, useEffect, useState } from "react";
import { SetUserDataContext, UserContext } from "../../App";
import selectPoster from "../../helpers/movie/selectPoster";
import updateHabits from "../../helpers/update/updateHabits";
import properties from "../../properties";
import { SetMovieInViewContext } from "./MovieSelectPage";

type Props = {
  id: string;
  title: string;
  posters: { id: number; url: string; actor: string }[];
  link: string;
};

export default function MovieSelect({ title, posters, link, id }: Props) {
  const user = useContext(UserContext)!;

  const setMovieInView = useContext(SetMovieInViewContext);
  const setUserData = useContext(SetUserDataContext);

  const [poster, setPoster] = useState<{ id: number; url: string; actor: string }>(selectPoster(user, posters));

  useEffect(() => {
    setPoster(selectPoster(user, posters));
  }, [user, posters]);

  const onClick = () => {
    // Handle user data

    // Add to recently watched
    const newUser = updateHabits(id, { ...user });

    // TODO - Make this a set
    if (newUser.recentlyWatched === undefined) newUser.recentlyWatched = [];

    // Add to front
    // newUser.recentlyWatched.unshift(id);

    // Remove last item if more than max
    if (newUser.recentlyWatched.length > properties.MAX_WATCH_HISTORY) newUser.recentlyWatched.pop();

    setUserData((prev: any) => {
      const newUserData = [...prev];
      const index = newUserData.findIndex((user: any) => user.id === newUser.id);
      newUserData[index] = newUser;

      return newUserData;
    });

    // Open movie modal
    setMovieInView(id);
  };

  return (
    <div className="movie-select__poster pointer" onClick={onClick} style={{ display: "block" }}>
      <img src={poster.url} alt={title} loading="lazy" style={{ margin: "0" }} />
    </div>
  );
}
