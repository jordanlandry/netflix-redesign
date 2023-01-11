import { useContext } from "react";
import { UserDataContext } from "../../App";
import CreateUserPage from "../createUser/CreateUserPage";
import "./styles.css";
import UserSelect from "./UserSelect";

type Props = {
  onClick: any;
};

export default function UserSelectPage({ onClick }: Props) {
  const userData = useContext(UserDataContext)!;

  // const userElements = userData.map((user) => <UserSelect key={user.id} {...user} onClick={onClick} />);

  // const userElements = userData.map((user) => <div key={nextId()}></div>);

  const userElements = userData
    ? userData.map((user: any) => <UserSelect key={user.id} {...user} onClick={onClick} />)
    : null;

  const handleManageProfiles = () => {
    console.error("Manage profiles not implemented yet");
  };

  const handleAddUser = () => {
    console.error("Add user not implemented yet");
  };

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
