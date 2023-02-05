import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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

export const SetRouteContext = createContext<any>(null);

function App() {
  const [userData, setUserData] = useLocalStorage("userData", ""); // This is just for the demo, I didn't implement a backend, so I just use local storage to store the users
  const [user, setUser] = useLocalStorage("user", null);
  const [search, setSearch] = useState("");

  // Update the user data when the user changes (This is just for the demo,
  // I didn't implement a backend, so I have to update this manually)
  // As if I update it everytime I

  // TODO - Change this to redux instead of context (I didn't want to implement redux yet to work on design and functionality first)
  const [route, setRoute] = useState("");

  useEffect(() => {
    if (!user) return;

    const userIndex = userData.findIndex((user: UserType) => user.id === user?.id);
    if (userIndex === -1 || JSON.stringify(userData[userIndex]) === JSON.stringify(user)) return;

    setUser(() => {
      const newUser = userData[userIndex];
      return newUser;
    });
  }, [route]);

  return (
    <div className="App">
      {user ? (
        <SetRouteContext.Provider value={setRoute}>
          <UserDataContext.Provider value={userData}>
            <SetUserDataContext.Provider value={setUserData}>
              <UserContext.Provider value={user}>
                <SetUserContext.Provider value={setUser}>
                  <SearchContext.Provider value={search}>
                    <SetSearchContext.Provider value={setSearch}>
                      {/* <BrowserRouter> */}
                      {/* <Routes> */}
                      {/* <Route path="/netflix-redesign/" element={<MovieSelectPage />} />
                          <Route path="/netflix-redesign/manage-profiles/" element={<ManageProfilesPage />} />
                          <Route path="/netflix-redesign/create-user/" element={<CreateUserPage />} /> */}

                      {route === "" ? (
                        <MovieSelectPage />
                      ) : route === "manage-profiles" ? (
                        <ManageProfilesPage />
                      ) : route === "create-user" ? (
                        <CreateUserPage />
                      ) : null}

                      {/* </Routes> */}
                      {/* </BrowserRouter/> */}
                    </SetSearchContext.Provider>
                  </SearchContext.Provider>
                </SetUserContext.Provider>
              </UserContext.Provider>
            </SetUserDataContext.Provider>
          </UserDataContext.Provider>
        </SetRouteContext.Provider>
      ) : (
        <SetRouteContext.Provider value={setRoute}>
          <SetUserDataContext.Provider value={setUserData}>
            <UserDataContext.Provider value={userData}>
              <UserSelectPage onClick={setUser} />
            </UserDataContext.Provider>
          </SetUserDataContext.Provider>
        </SetRouteContext.Provider>
      )}
    </div>
  );
}

export default App;
