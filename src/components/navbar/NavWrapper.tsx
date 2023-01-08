import React, { useState } from "react";
import useWidth from "../../hooks/useWidth";
import properties from "../../properties";
import UserTab from "../userTab/UserTab";
import NavMobile from "./NavMobile";
import NavWindow from "./NavWindow";

type Props = {};

export default function NavWrapper({}: Props) {
  const width = useWidth();
  const [isMobile, setIsMobile] = useState(width < properties.MOBILE_BREAKPOINT);

  return (
    <nav>
      {isMobile ? <NavMobile /> : <NavWindow />}
      <UserTab />
    </nav>
  );
}
