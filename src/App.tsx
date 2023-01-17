import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavWrapper from "./components/navbar/NavWrapper";
import { UserType } from "./data/userData";
import useLocalStorage from "./hooks/useLocalStorage";
import CreateUserPage from "./pages/createUser/CreateUserPage";
import AvatarPage from "./pages/manageProfiles/AvatarPage";
import ManageProfilesPage from "./pages/manageProfiles/ManageProfilesPage";
import MovieSelectPage from "./pages/movieSelect/MovieSelectPage";
import UserSelectPage from "./pages/userSelect/UserSelectPage";

export const UserDataContext = createContext<any>(null);
export const SetUserDataContext = createContext<any>(null);

export const UserContext = createContext<UserType | null>(null);
export const SetUserContext = createContext<any>(null);

export const SearchContext = createContext<string | null>(null);
export const SetSearchContext = createContext<any>(null);

function App() {
  const [userData, setUserData] = useLocalStorage("userData", ""); // This is just for the demo, I didn't implement a backend, so I just use local storage to store the users
  const [user, setUser] = useLocalStorage("user", null);
  const [search, setSearch] = useState("");

  // Update the user data when the user changes (This is just for the demo,
  // I didn't implement a backend, so I have to update this manually)
  // As if I update it everytime I
  useEffect(() => {
    const userIndex = userData.findIndex((user: UserType) => user.id === user?.id);
    if (userIndex !== -1 || JSON.stringify(userData[userIndex]) === JSON.stringify(user)) return;

    setUserData((prev: any) => {
      const newUserData = [...prev];
      newUserData[userIndex] = user;

      return newUserData;
    });
  }, [window.location.pathname]);

  // TODO - Add a loading screen
  // TODO - Add a 404 page
  // TODO - Change this to redux instead of context (I didn't want to implement redux yet to work on design and functionality first

  return (
    <div className="App">
      {user ? (
        <UserDataContext.Provider value={userData}>
          <SetUserDataContext.Provider value={setUserData}>
            <UserContext.Provider value={user}>
              <SetUserContext.Provider value={setUser}>
                <SearchContext.Provider value={search}>
                  <SetSearchContext.Provider value={setSearch}>
                    <NavWrapper />
                    <BrowserRouter>
                      <Routes>
                        <Route path="/" element={<MovieSelectPage />} />
                        <Route path="/manage-profiles" element={<ManageProfilesPage />} />
                        <Route path="/manage-profiles/change-avatar/:id" element={<AvatarPage />} />
                        <Route path="/create-user" element={<CreateUserPage />} />
                      </Routes>
                    </BrowserRouter>
                  </SetSearchContext.Provider>
                </SearchContext.Provider>
              </SetUserContext.Provider>
            </UserContext.Provider>
          </SetUserDataContext.Provider>
        </UserDataContext.Provider>
      ) : (
        <SetUserDataContext.Provider value={setUserData}>
          <UserDataContext.Provider value={userData}>
            <UserSelectPage onClick={setUser} />
          </UserDataContext.Provider>
        </SetUserDataContext.Provider>
      )}
    </div>
  );
}

export default App;
