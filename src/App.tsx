import { createContext, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavWrapper from "./components/navbar/NavWrapper";
import { UserType } from "./data/userData";
import useLocalStorage from "./hooks/useLocalStorage";
import MovieSelectPage from "./pages/movieSelect/MovieSelectPage";
import UserSelectPage from "./pages/userSelect/UserSelectPage";

export const UserContext = createContext<UserType | null>(null);
function App() {
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <div className="App">
      {user ? (
        <>
          <UserContext.Provider value={user}>
            <NavWrapper />
            <MovieSelectPage />
          </UserContext.Provider>
        </>
      ) : (
        <UserSelectPage onClick={setUser} />
      )}
    </div>
  );
}

export default App;
