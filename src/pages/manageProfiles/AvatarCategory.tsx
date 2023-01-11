import React, { useContext } from "react";
import nextId from "react-id-generator";
import { SetUserContext, UserContext } from "../../App";
import users from "../../data/userData";

type Props = {
  name: string;
  avatars: string[];
};

export default function AvatarCategory({ name, avatars }: Props) {
  const user = useContext(UserContext)!;
  const setUser = useContext(SetUserContext)!;

  const handleClick = (url: string) => {
    setUser((prev: any) => ({ ...prev, icon: url }));

    // Update backend (This project is just a demo for frontend, so I didn't implement this, but it would be something like this)
    // fetch("/api/users/" + user.id, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ icon: url + "png" }),
    // });

    // For this demo, I just update the local storage users variable and redirect to the homepage
    // users.find((u) => u.id === user.id)!.icon = url + "png"
  };

  const avatarElements = avatars.map((avatar) => (
    <img onClick={() => handleClick(avatar)} key={nextId()} src={`${avatar}`} loading="lazy" className="pointer" />
  ));

  return (
    <div className="avatar-category">
      <h2>{name}</h2>
      <div className="avatar__wrapper">{avatarElements}</div>
    </div>
  );
}
