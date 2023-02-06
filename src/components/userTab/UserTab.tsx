import { useContext, useEffect, useState } from "react";
import { SetRouteContext, SetUserContext, UserContext, UserDataContext } from "../../App";
import "./usertab.css";

export default function UserTab() {
  const setRoute = useContext(SetRouteContext)!;

  // State
  const [hover, setHover] = useState(false);

  // Context
  const { id, name, icon, birthday, recentlyWatched, habits } = useContext(UserContext)!;
  const userData = useContext(UserDataContext)!;
  const setUser = useContext(SetUserContext)!;

  // Functions
  const handleMouseLeave = () => setHover(false);
  const handleSwitchUser = (id: number) => {
    userData.find((user: any) => {
      if (user.id === id) {
        user.lastLoggedIn = Date.now();
        setUser(user);
        return true;
      }

      return false;
    });
  };

  const filteredUsers = userData.filter((user: any) => user.id !== id);
  const userElements = filteredUsers.map((user: any) => (
    <li key={user.id} className="user-tab__user" onClick={() => handleSwitchUser(user.id)}>
      <img src={user.icon}></img>
      <span>{user.name}</span>
    </li>
  ));

  const handleSignOut = () => {
    setUser(null);
  };

  // Render
  return (
    <div className="user-tab" onMouseEnter={() => setHover(true)} onMouseLeave={handleMouseLeave}>
      <img src={icon}></img>
      {hover ? (
        <ul className="user-tab__list">
          {userElements}
          <li>
            <a href="#" onClick={() => setRoute("manage-profiles")}>
              Manage Profiles
            </a>
          </li>
          <hr />
          <li onClick={handleSignOut}>Sign out</li>
        </ul>
      ) : null}
    </div>
  );
}
