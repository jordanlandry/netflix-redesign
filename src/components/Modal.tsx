import { createPortal } from "react-dom";
import getBreakpoint from "../helpers/format/getBreakpoint";
import useKeybind from "../hooks/useKeybind";
import useWidth from "../hooks/useWidth";
import { BreakpointsType } from "../properties";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: any;
  className?: string;
};

export default function Modal({ children, open, onClose, className }: Props) {
  useKeybind("Escape", () => (open ? onClose() : null));
  const width = useWidth();

  const sizes = {
    s: "85%",
    m: "80%",
    l: "70%",
    xl: "60%",
    xxl: "50%",
    max: "40%",
  };

  const MODAL_STYLES: React.CSSProperties = {
    position: "absolute",
    top: "3%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    padding: "25px",
    width: sizes[getBreakpoint(width)],
    zIndex: 1000,
  };

  const OVERLAY_STYLES: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .7)",
    zIndex: 1000,
  };

  if (!open) return null;
  return createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose}></div>
      <div style={MODAL_STYLES}>{children}</div>
    </>,
    document.getElementById("portal")!
  );
}
