import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { UserType } from "./data/userData";
import useLocalStorage from "./hooks/useLocalStorage";
import CreateUserPage from "./pages/createUser/CreateUserPage";
import AvatarPage from "./pages/manageProfiles/AvatarPage";
import ManageProfilesPage from "./pages/manageProfiles/ManageProfilesPage";
import MovieSelectPage from "./pages/movieSelect/MovieSelectPage";
import UserSelectPage from "./pages/userSelect/UserSelectPage";

type AvailableRoutes = "" | "manage-profiles" | "create-user";
const router = {
  "": <MovieSelectPage />,
  "manage-profiles": <ManageProfilesPage />,
  "create-user": <CreateUserPage />,
} as { [key in AvailableRoutes]: JSX.Element };

export const StoreContext = createContext<any>(null);
function App() {
  const [userData, setUserData] = useLocalStorage("netflix_userData", ""); // This is just for the demo, I didn't implement a backend, so I just use local storage to store the users
  const [user, setUser] = useLocalStorage("netflix_user", null);
  const [search, setSearch] = useState("");

  // Update the user data when the user changes (This is just for the demo,
  // I didn't implement a backend, so I have to update this manually)
  // As if I update it everytime I

  // TODO - Change this to redux instead of context (I didn't want to implement redux yet to work on design and functionality first)
  const [route, setRoute] = useState("");
  const store = { userData, setUserData, user, setUser, search, setSearch, route, setRoute };

  useEffect(() => {
    // If there are no users, go to the create user page
    if (userData.length === 0) {
      setUser(null);
      setRoute("create-user");
    }

    if (!user) return;

    const userIndex = userData.findIndex((user: UserType) => user.id === user?.id);
    if (userIndex === -1 || JSON.stringify(userData[userIndex]) === JSON.stringify(user)) return;

    setUser(() => {
      const newUser = userData[userIndex];
      return newUser;
    });
  }, [route]);

  const page = router[route as AvailableRoutes];

  return (
    <StoreContext.Provider value={store}>
      <div className="App">{!user && route === "" ? <UserSelectPage onClick={setUser} /> : page}</div>
    </StoreContext.Provider>
  );
}

export default App;
