import { useState } from "react";
import { Pencil, X, XLg } from "react-bootstrap-icons";

// interface Props extends UserType {
//   onClick: any;
// }

export default function UserSelect({
  id,
  name,
  icon,
  birthday,
  recentlyWatched,
  habits,
  onClick,
  isEditing,
  isDeleting,
}: any) {
  // I have this instead of css hover because I only want to outline the icon when the user is hovering over the entire div
  const [hoveredClassName, setHoveredClassName] = useState("");

  const handleOnClick = () => {
    onClick({ id, name, icon, birthday, recentlyWatched, habits, lastLoggedIn: Date.now() });
  };

  return (
    <div
      className="user-select__user"
      onMouseEnter={() => setHoveredClassName("user-select__user-icon-hover")}
      onMouseLeave={() => setHoveredClassName("user-select__user-icon")}
      onClick={handleOnClick}
    >
      {isEditing ? <div className="avatar-edit">{isDeleting ? <XLg size={50} /> : <Pencil size={50} />}</div> : null}
      <img className={`${hoveredClassName} ${isEditing ? "avatar-low-opacity" : ""}`} src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
}
