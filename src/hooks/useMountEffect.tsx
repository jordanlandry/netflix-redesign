import { useEffect } from "react";
export default function useMountEffect(callback: () => void) {
  useEffect(callback, []);
}
