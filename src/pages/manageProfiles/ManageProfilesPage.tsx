import { useContext, useState } from "react";
import { UserDataContext } from "../../App";
import UserSelect from "../userSelect/UserSelect";
import UserSelectPage from "../userSelect/UserSelectPage";
import AvatarPage from "./AvatarPage";

export default function ManageProfilesPage() {
  const [editingUser, setEditingUser] = useState(null);
  const userData = useContext(UserDataContext)!;

  // return <div>{editingUser ? <AvatarPage /> : <UserSelectPage onClick={setEditingUser} />}</div>;

  // Users from local storage
  const userElements = userData
    ? userData.map((user: any) => <UserSelect key={user.id} {...user} onClick={setEditingUser} />)
    : null;

  const finishButton = () => {
    window.location.href = "/";
  };

  return (
    <div>
      {editingUser ? (
        <AvatarPage />
      ) : (
        <div>
          <>
            <div className="user-select__flex">
              <div className="user-select">
                <h1>Managing Users</h1>
                <div className="user-select__container">{userElements}</div>
                <button onClick={finishButton}>Finish</button>
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  );
}
