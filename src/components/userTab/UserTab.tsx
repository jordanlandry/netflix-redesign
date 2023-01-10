import React, { useContext, useRef, useState } from "react";
import { SetUserContext, UserContext } from "../../App";
import users from "../../data/userData";
import "./usertab.css";

type Props = {};

export default function UserTab({}: Props) {
  // State
  const [hover, setHover] = useState(false);

  // Context
  const { id, name, icon, birthday, recentlyWatched, genres } = useContext(UserContext)!;
  const setUser = useContext(SetUserContext)!;

  // Functions
  const handleMouseLeave = () => setHover(false);
  const handleSwitchUser = (id: number) => {
    users.find((user: any) => {
      if (user.id === id) {
        user.lastLoggedIn = Date.now();
        setUser(user);
        return true;
      }
      return false;
    });
  };

  // Elements
  const filteredUsers = users.filter((user) => user.id !== id);
  const userElements = filteredUsers.map((user) => (
    <li key={user.id} className="user-tab__user" onClick={() => handleSwitchUser(user.id)}>
      <img src={user.icon}></img>
      <span>{user.name}</span>
    </li>
  ));

  // Render
  return (
    <div className="user-tab" onMouseEnter={() => setHover(true)} onMouseLeave={handleMouseLeave}>
      <img src={icon}></img>
      {hover ? (
        <ul className="user-tab__list">
          {userElements}
          <li>
            <a href="/manage-profiles">Manage Profiles</a>
          </li>
          <li>
            <a href="">Transfer Profile</a>
          </li>
          <li>
            <a href="">Account</a>
          </li>
          <li>
            <a href="">Help Center</a>
          </li>
          <hr />
          <li>Sign out</li>
        </ul>
      ) : null}
    </div>
  );
}
