import React, { useContext } from "react";
import nextId from "react-id-generator";
import { StoreContext } from "../../App";
import Carousel from "../../components/carousel/Carousel";
import { UserType } from "../../data/userData";
import Avatar from "./Avatar";

type Props = {
  name: string;
  avatars: string[];
  editingUser: UserType;
  setEditingUser: any;
};

export default function AvatarCategory({ name, avatars, editingUser, setEditingUser }: Props) {
  const { setRoute, setUser, users, setUsers } = useContext(StoreContext);

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
    setEditingUser(null);
  };

  const avatarElements = avatars.map((avatar) => <Avatar key={nextId()} avatar={avatar} handleClick={handleClick} />);

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
