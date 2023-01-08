import { useState } from "react";
import { UserType } from "../../data/userData";
export default function UserSelect({ id, name, icon, birthday, recentlyWatched, genres }: UserType) {
  // I have this instead of css hover because I only want to outline the icon when the user is hovering over the entire div
  const [hoveredClassName, setHoveredClassName] = useState("");

  return (
    <div
      className="user-select__user"
      onMouseEnter={() => setHoveredClassName("user-select__user-icon-hover")}
      onMouseLeave={() => setHoveredClassName("user-select__user-icon")}
    >
      <img className={hoveredClassName} src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
}
