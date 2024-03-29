import { useContext, useEffect, useRef, useState } from "react";
import { XLg } from "react-bootstrap-icons";
import { StoreContext } from "../../App";
import SearchIcon from "../icons/SearchIcon";
import UserTab from "../userTab/UserTab";
import "./navbar.css";
import NavLink from "./NavLink";

type Props = {};

export default function NavWindow({}: Props) {
  // const search = useContext(SearchContext);
  // const setSearch = useContext(SetSearchContext);
  const { search, setSearch } = useContext(StoreContext);

  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearching) inputRef.current!.focus();
  }, [inputRef.current, isSearching]);

  const unsearch = () => {
    setSearch("");
    setIsSearching(false);
  };

  return (
    <div className="navbar__window">
      <ul className="navbar__window-wrapper">
        <NavLink to="/netflix-redesign/">
          <img alt="logo" src="https://cdn.worldvectorlogo.com/logos/netflix-3.svg" width={100} />
        </NavLink>
        {/* <NavLink to="/tv-shows">TV Shows</NavLink> */}
        {/* <NavLink to="/movies">Movies</NavLink> */}
        {/* <NavLink to="/new">New and Popular</NavLink> */}
      </ul>
      <div className="navbar__window-secondary flex-center">
        <div className={`flex-center navbar__window-search ${isSearching ? "navbar__window-search--active" : ""}`}>
          {isSearching ? null : (
            <button onClick={() => setIsSearching(true)} className="pointer btn-unstyled">
              <SearchIcon />
            </button>
          )}
        </div>
        {isSearching ? (
          <div className="navbar__search">
            <div>
              <XLg onClick={unsearch} />
            </div>
            <input ref={inputRef} type="text" value={search!} onChange={(e) => setSearch(e.target.value)} placeholder="Titles, people, genres" />
          </div>
        ) : null}
        <UserTab />
      </div>
    </div>
  );
}
