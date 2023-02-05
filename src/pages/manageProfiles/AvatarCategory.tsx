import React, { useContext } from "react";
import nextId from "react-id-generator";
import { SetUserContext, SetUserDataContext, UserContext, UserDataContext } from "../../App";
import Carousel from "../../components/carousel/Carousel";
import { UserType } from "../../data/userData";

type Props = {
  name: string;
  avatars: string[];
  editingUser: UserType;
};

export default function AvatarCategory({ name, avatars, editingUser }: Props) {
  const setUser = useContext(SetUserContext)!;

  const users = useContext(UserDataContext)!;
  const setUsers = useContext(SetUserDataContext)!;

  const handleClick = (url: string) => {
    setUser((prev: any) => ({ ...prev, icon: url }));

    const hasBackend = false;

    // Update backend (This project is just a demo for frontend, so I didn't implement this, but it would be something like this)
    if (hasBackend) {
      fetch("/api/users/" + editingUser.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ icon: url }),
      });
    }

    // For this demo, I just update the local storage users variable and redirect to the homepage

    users.find((u: any) => u.id === editingUser.id)!.icon = url;
    setUsers(users);
    window.location.href = "/netflix-redesign/manage-profiles";
  };

  const avatarElements = avatars.map((avatar) => (
    <div key={nextId()}>
      <img onClick={() => handleClick(avatar)} src={`${avatar}`} loading="lazy" className="pointer" />
    </div>
  ));

  return (
    <div className="avatar-category">
      <h2>{name}</h2>
      <div className="avatar__wrapper">
        <Carousel itemsToShow={{ s: 4, m: 6, l: 8, xl: 10, xxl: 12, max: 14 }} aspectRatio={1}>
          {avatarElements}
        </Carousel>
      </div>
    </div>
  );
}
