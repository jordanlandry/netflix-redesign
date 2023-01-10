import avatarData from "../../data/avatars/avatarData";
import AvatarCategory from "./AvatarCategory";

import "./avatars.css";

export default function AvatarPage() {
  const avatarCategoryElements = avatarData.map((cat) => (
    <AvatarCategory key={cat.category} name={cat.category} avatars={cat.avatars} />
  ));

  return (
    <div>
      <h1>Avatars</h1>
      {avatarCategoryElements}
    </div>
  );
}
