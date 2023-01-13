import { useEffect } from "react";

export default function useKeybind(
  key: string,
  callback: () => void,
  shiftKey = false,
  ctrlKey = false,
  altKey = false,
  metaKey = false
) {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (
        e.key === key &&
        shiftKey === e.shiftKey &&
        ctrlKey === e.ctrlKey &&
        altKey === e.altKey &&
        metaKey === e.metaKey
      )
        callback();
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [key, callback]);
}
