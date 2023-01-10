import { useState } from "react";
import UserSelectPage from "../userSelect/UserSelectPage";
import AvatarPage from "./AvatarPage";

export default function ManageProfilesPage() {
  const [editingUser, setEditingUser] = useState(null);

  return <div>{editingUser ? <AvatarPage /> : <UserSelectPage onClick={setEditingUser} />}</div>;
}
