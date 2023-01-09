import React from "react";
import useWidth from "../hooks/useWidth";
import "./colorGradient.css";

export default function ColorGradient() {
  useWidth();
  const colors = [
    "#550000",
    "#525700",
    "#790000",
    "#83000d",
    "#9f271b",
    "#8e0203",
    "#c56a5c",
    "#bd7c75",
    "#d8a7a7",
    "#85625f",
    "#c67f73",
    "#caa198",
    "#67302a",
    "#715937",
    "#7b4441",
    "#8f5f62",
    "#7b013c",
    "#5b3649",
    "#503d5f",
    "#2a5797",
    "#545f8a",
    "#123783",
    "#2171b3",
    "#1d4a87",
    "#4ab5a5",
    "#7ca383",
  ];
  const lines = colors.map((color, i) => <Line key={i} color={color} size={colors.length} />);

  return <div className="color-gradient">{lines}</div>;
  // return <div className="color-gradient"></div>;
}

function Line({ color, size }: { color: string; size: number }) {
  return (
    <span
      style={{ display: "flex", height: "50vh", width: `${window.innerWidth / size - 3}px`, backgroundColor: color }}
    ></span>
  );
}
