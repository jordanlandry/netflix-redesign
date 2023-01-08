import userData from "./userData";
import UserSelect from "./UserSelect";
import "./styles.css";

export default function UserSelectPage() {
  const userElements = userData.map((user) => <UserSelect key={user.id} {...user} />);

  const handleManageProfiles = () => {
    console.error("Manage profiles not implemented yet");
  };

  return (
    <div className="user-select__flex">
      <div className="user-select">
        <h1>Who's watching?</h1>
        <div className="user-select__container">{userElements}</div>
        <button onClick={handleManageProfiles}>Manage profiles</button>
      </div>
    </div>
  );
}
