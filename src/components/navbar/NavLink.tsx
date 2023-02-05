import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { SetRouteContext } from "../../App";

type Props = { children: React.ReactNode; to: string; className?: string };

export default function NavLink({ children, to, className }: Props) {
  const [active, setActive] = useState(window.location.pathname === to);

  const setRoute = useContext(SetRouteContext)!;

  return (
    <li className={className ? className : ""}>
      <a href="#" onClick={() => to} className={active ? "navlink__active" : ""}>
        {children}
      </a>
    </li>
  );
}
