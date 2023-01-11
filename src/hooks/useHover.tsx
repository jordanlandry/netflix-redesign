import { useState } from "react";

// Return a div that has a default element and a hover element
export default function useHover(defaultElement: JSX.Element, hoverElement: JSX.Element) {
  const [hover, setHover] = useState(false);

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{ display: "inline-block" }}>
      {hover ? hoverElement : defaultElement}
    </div>
  );
}
