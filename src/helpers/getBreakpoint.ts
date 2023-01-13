import properties from "../properties";

export default function getBreakpoint(width: number) {
  const breakPoints = properties.BREAKPOINTS;
  if (window.innerWidth < breakPoints.m + 1) return "s";
  else if (window.innerWidth < breakPoints.l + 1) return "m";
  else if (window.innerWidth < breakPoints.xl + 1) return "l";
  else if (window.innerWidth < breakPoints.xxl + 1) return "xl";
  else if (window.innerWidth < breakPoints.max + 1) return "xxl";
  else return "max";
}
