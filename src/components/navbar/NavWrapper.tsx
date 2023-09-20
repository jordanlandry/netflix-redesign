import useWidth from "../../hooks/useWidth";
import properties from "../../properties";
import NavMobile from "./NavMobile";
import NavWindow from "./NavWindow";

type Props = {};

export default function NavWrapper({}: Props) {
  const width = useWidth();

  return <nav className="navbar">{width < properties.MOBILE_BREAKPOINT ? <NavMobile /> : <NavWindow />}</nav>;
}
