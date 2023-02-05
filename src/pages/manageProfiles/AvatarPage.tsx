import { useContext } from "react";
import avatarData from "../../data/avatars/avatarData";
import { UserType } from "../../data/userData";
import AvatarCategory from "./AvatarCategory";
import { EditingUserContext } from "./ManageProfilesPage";

import "./styles.css";

export default function AvatarPage() {
  const editingUser = useContext(EditingUserContext)!;

  const avatarCategoryElements = avatarData.map((cat) => (
    <AvatarCategory key={cat.category} name={cat.category} avatars={cat.avatars} editingUser={editingUser} />
  ));

  return (
    <div>
      <a
        href="/manage-profiles"
        style={{
          color: "white",
          textDecoration: "none",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Go Back
      </a>
      <h1>Change Avatar</h1>
      {avatarCategoryElements}
    </div>
  );
}
