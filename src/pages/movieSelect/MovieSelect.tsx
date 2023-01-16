import { useContext, useState } from "react";
import { SetUserContext, SetUserDataContext, UserContext } from "../../App";
import movieData, { MovieType } from "../../data/movie/movieData";
import selectPoster from "../../helpers/selectPoster";
import updateHabits from "../../helpers/updateHabits";
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
  const setUser = useContext(SetUserContext);

  const poster = selectPoster(user, posters);

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
    <div className="movie-select__poster" onClick={onClick} style={{ display: "block" }}>
      <img src={poster.url} alt={title} loading="lazy" style={{ margin: "0" }} />
    </div>
  );
}
