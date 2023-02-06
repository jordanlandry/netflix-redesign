import { createContext, useContext, useState } from "react";
import { SetRouteContext, SetUserDataContext, UserContext, UserDataContext } from "../../App";
import UserSelect from "../userSelect/UserSelect";
import AvatarPage from "./AvatarPage";

import "../userSelect/styles.css";
import { UserType } from "../../data/userData";
import { Check, XLg } from "react-bootstrap-icons";
import { isMobile } from "react-device-detect";

export const EditingUserContext = createContext<UserType | null>(null);
export const SetEditingUserContext = createContext<any>(null);

export default function ManageProfilesPage() {
  const setRoute = useContext(SetRouteContext)!;

  const [editingUser, setEditingUser] = useState<UserType | null>(null);
  const userData = useContext(UserDataContext)!;
  const setUserData = useContext(SetUserDataContext)!;

  const [isHoveringAddUser, setIsHoveringAddUser] = useState(false);
  const [isHoveringDeleteUser, setIsHoveringDeleteUser] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteUser = (user: UserType) => {
    const newUserData = userData.filter((curr: any) => curr.id !== user.id);
    setUserData(newUserData);
  };

  // Users from local storage
  const userElements = userData
    ? userData.map((user: any) => (
        <UserSelect
          key={user.id}
          {...user}
          onClick={isDeleting ? handleDeleteUser : setEditingUser}
          isEditing={true}
          isDeleting={isDeleting}
        />
      ))
    : null;

  const finishButton = () => {
    if (userData.length === 0) setRoute("create-user");
    else setRoute("");
  };

  const handleAddUser = () => {
    setRoute("create-user");
  };

  return (
    <div>
      {editingUser ? (
        <SetEditingUserContext.Provider value={setEditingUser}>
          <EditingUserContext.Provider value={editingUser}>
            <AvatarPage />
          </EditingUserContext.Provider>
        </SetEditingUserContext.Provider>
      ) : (
        <div>
          <>
            <div className="user-select__flex">
              <div className="user-select">
                <h1>{isMobile ? "Tap" : "Click"} user to change avatar </h1>
                <div className="user-select__container">
                  {userElements}
                  <div
                    className="user-select__user"
                    onClick={handleAddUser}
                    onMouseEnter={() => setIsHoveringAddUser(true)}
                    onMouseLeave={() => setIsHoveringAddUser(false)}
                  >
                    <div className={`add-button ${isHoveringAddUser ? "add-button-hover" : ""}`}></div>
                    <span>Add Profile</span>
                  </div>
                  <div
                    className="user-select__user"
                    onClick={() => setIsDeleting((prev) => !prev)}
                    onMouseEnter={() => setIsHoveringDeleteUser(true)}
                    onMouseLeave={() => setIsHoveringDeleteUser(false)}
                  >
                    <div>
                      {isDeleting ? (
                        <Check size={100} className={isHoveringDeleteUser ? "delete-button-hover" : ""} />
                      ) : (
                        <div className={`delete-button ${isHoveringDeleteUser ? "delete-button-hover" : ""}`}>
                          <div className="delete-button-1"></div>
                          <div className="delete-button-2"></div>
                        </div>
                      )}
                    </div>
                    <span>{isDeleting ? "End Delete" : "Delete"}</span>
                  </div>
                </div>
                <button onClick={finishButton}>Finish Managing Profiles</button>
              </div>
            </div>
          </>
        </div>
      )}
    </div>
  );
}
