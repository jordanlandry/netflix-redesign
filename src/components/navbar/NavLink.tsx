import React, { useState } from "react";
import { useLocation } from "react-router-dom";

type Props = { children: React.ReactNode; to: string; className?: string };

export default function NavLink({ children, to, className }: Props) {
  const [active, setActive] = useState(window.location.pathname === to);

  return (
    <li className={className ? className : ""}>
      <a href={to} className={active ? "navlink__active" : ""}>
        {children}
      </a>
    </li>
  );
}
