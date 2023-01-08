import React from "react";
import { useLocation } from "react-router-dom";
import UserTab from "../userTab/UserTab";
import "./navbar.css";
import NavLink from "./NavLink";

type Props = {};

export default function NavWindow({}: Props) {
  // const location = useLocation();

  // console.log(location);
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
      <UserTab />
    </div>
  );
}
