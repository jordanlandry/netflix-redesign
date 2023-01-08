import { UserType } from "./userData";

export default function UserSelect({ id, name, icon, birthday, recentlyWatched, genres }: UserType) {
  return (
    <div className="user-select__user">
      <img src={icon} alt={name} />
      <span>{name}</span>
    </div>
  );
}
