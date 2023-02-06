import { useContext } from "react";
import avatarData from "../../data/avatars/avatarData";
import AvatarCategory from "./AvatarCategory";
import { EditingUserContext, SetEditingUserContext } from "./ManageProfilesPage";

import "./styles.css";

export default function AvatarPage() {
  const editingUser = useContext(EditingUserContext)!;
  const setEditingUser = useContext(SetEditingUserContext)!;

  const avatarCategoryElements = avatarData.map((cat) => (
    <AvatarCategory
      key={cat.category}
      name={cat.category}
      avatars={cat.avatars}
      editingUser={editingUser}
      setEditingUser={setEditingUser}
    />
  ));

  return (
    <div>
      <a
        onClick={() => setEditingUser(false)}
        href="#"
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
