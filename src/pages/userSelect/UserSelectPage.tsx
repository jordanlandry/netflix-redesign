import { useContext, useEffect } from "react";
import { StoreContext } from "../../App";
import CreateUserPage from "../createUser/CreateUserPage";
import "./styles.css";
import UserSelect from "./UserSelect";

type Props = {
  onClick: any;
};

export default function UserSelectPage({ onClick }: Props) {
  const { userData, setUser, setRoute } = useContext(StoreContext);

  const userElements = userData ? userData.map((user: any) => <UserSelect key={user.id} {...user} onClick={onClick} />) : null;

  const handleManageProfiles = () => {
    setRoute("manage-profiles");
  };

  if (userData.length === 0) {
    setUser(null);
    return <CreateUserPage />;
  }

  return (
    <>
      {userData ? (
        <div className="user-select__flex">
          <div className="user-select">
            <h1>Who's watching?</h1>
            <div className="user-select__container">{userElements}</div>
            <button onClick={handleManageProfiles}>Manage profiles</button>
          </div>
        </div>
      ) : (
        <CreateUserPage />
      )}
    </>
  );
}
