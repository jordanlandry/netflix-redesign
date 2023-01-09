import { useState } from "react";
import { UserType } from "../../data/userData";

// interface Props extends UserType {
//   onClick: any;
// }

export default function UserSelect({
  id,
  name,
  icon,
  birthday,
  recentlyWatched,
  genres,
  onClick,
  actors,
  directors,
}: any) {
  // I have this instead of css hover because I only want to outline the icon when the user is hovering over the entire div
  const [hoveredClassName, setHoveredClassName] = useState("");

  const handleOnClick = () => {
    onClick({ id, name, icon, birthday, recentlyWatched, genres, actors, directors, lastLoggedIn: Date.now() });
  };

  return (
    <div
      className="user-select__user"
      onMouseEnter={() => setHoveredClassName("user-select__user-icon-hover")}
      onMouseLeave={() => setHoveredClassName("user-select__user-icon")}
      onClick={handleOnClick}
    >
      <img className={`${hoveredClassName}`} src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
}
