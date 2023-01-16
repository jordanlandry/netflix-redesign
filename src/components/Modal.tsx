import { createPortal } from "react-dom";
import useKeybind from "../hooks/useKeybind";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: any;
  className?: string;
};

export default function Modal({ children, open, onClose, className }: Props) {
  useKeybind("Escape", () => (open ? onClose() : null));

  const MODAL_STYLES: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "50px",
    zIndex: 1000,
  };

  const OVERLAY_STYLES: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, .2)",
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
