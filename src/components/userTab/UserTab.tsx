import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../App";
import "./usertab.css";

type Props = {};

export default function UserTab({}: Props) {
  const [hover, setHover] = useState(false);
  const { id, name, icon, birthday, recentlyWatched, genres } = useContext(UserContext)!;

  // const hoverRef = useRef(hover);

  const handleMouseLeave = () => {
    // setTimeout(() => {
    //   if (!hoverRef.current) setHover(false);
    // }, 1000);
  };

  return (
    <div className="user-tab" onMouseEnter={() => setHover(true)} onMouseLeave={handleMouseLeave}>
      <img src={icon}></img>
      {hover ? (
        <ul>
          <li>{name}</li>
        </ul>
      ) : null}
    </div>
  );
}
