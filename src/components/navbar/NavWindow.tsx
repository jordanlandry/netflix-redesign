import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { SearchContext, SetSearchContext } from "../../App";
import SearchIcon from "../icons/SearchIcon";
import UserTab from "../userTab/UserTab";
import "./navbar.css";
import NavLink from "./NavLink";

type Props = {};

export default function NavWindow({}: Props) {
  const search = useContext(SearchContext);
  const setSearch = useContext(SetSearchContext);

  const [isSearching, setIsSearching] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearching) inputRef.current!.focus();
  }, [inputRef.current, isSearching]);

  return (
    <div className="navbar__window">
      <ul className="navbar__window-wrapper">
        <NavLink to="/">
          <img alt="logo"></img>
        </NavLink>
        <NavLink to="/tv-shows">TV Shows</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/new">New and Popular</NavLink>
      </ul>
      <div className="navbar__window-secondary flex-center">
        <div className={`flex-center navbar__window-search ${isSearching ? "navbar__window-search--active" : ""}`}>
          {isSearching ? (
            <div>
              <SearchIcon />
            </div>
          ) : (
            <button onClick={() => setIsSearching(true)} className="pointer btn-unstyled">
              <SearchIcon />
            </button>
          )}
          {isSearching ? (
            <input
              ref={inputRef}
              type="text"
              value={search!}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Titles, people, genres"
            />
          ) : null}
        </div>

        <UserTab />
      </div>
    </div>
  );
}
