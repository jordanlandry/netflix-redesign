import { createContext, useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavWrapper from "./components/navbar/NavWrapper";
import { UserType } from "./data/userData";
import useLocalStorage from "./hooks/useLocalStorage";
import MovieSelectPage from "./pages/movieSelect/MovieSelectPage";
import UserSelectPage from "./pages/userSelect/UserSelectPage";

export const UserContext = createContext<UserType | null>(null);
export const SetUserContext = createContext<React.Dispatch<React.SetStateAction<UserType | null>> | null>(null);
function App() {
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <div className="App">
      {user ? (
        <UserContext.Provider value={user}>
          <SetUserContext.Provider value={setUser}>
            <NavWrapper />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MovieSelectPage />} />
              </Routes>
            </BrowserRouter>
          </SetUserContext.Provider>
        </UserContext.Provider>
      ) : (
        <UserSelectPage onClick={setUser} />
      )}
    </div>
  );
}

export default App;
