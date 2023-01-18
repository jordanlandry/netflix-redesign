import { useEffect, useState } from "react";

export default function useScrollY() {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return y;
}
