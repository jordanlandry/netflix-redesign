import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavWrapper from "./components/navbar/NavWrapper";
import { UserType } from "./data/userData";
import useLocalStorage from "./hooks/useLocalStorage";
import MovieSelectPage from "./pages/movieSelect/MovieSelectPage";
import UserSelectPage from "./pages/userSelect/UserSelectPage";
import properties from "./properties";

export const UserContext = createContext<UserType | null>(null);
export const SetUserContext = createContext<React.Dispatch<React.SetStateAction<UserType | null>> | null>(null);
export const SearchContext = createContext<string | null>(null);
export const SetSearchContext = createContext<any>(null);

function App() {
  // const [user, setUser] = useLocalStorage("user", null);
  const [user, setUser] = useState<any>(null); // TODO: Change this back to useLocalStorage when I'm done testing
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      {user ? (
        <UserContext.Provider value={user}>
          <SetUserContext.Provider value={setUser}>
            <SearchContext.Provider value={search}>
              <SetSearchContext.Provider value={setSearch}>
                <NavWrapper />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<MovieSelectPage />} />
                  </Routes>
                </BrowserRouter>
              </SetSearchContext.Provider>
            </SearchContext.Provider>
          </SetUserContext.Provider>
        </UserContext.Provider>
      ) : (
        <UserSelectPage onClick={setUser} />
      )}
    </div>
  );
}

export default App;
