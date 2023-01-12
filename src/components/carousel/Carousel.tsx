import React, { useEffect, useRef, useState } from "react";
import { ChevronBarContract, ChevronLeft, ChevronRight, Translate } from "react-bootstrap-icons";
import useWidth from "../../hooks/useWidth";

type Props = {
  children: React.ReactNode;
  gap?: number;
  itemsToShow?: { s: number; m: number; l: number } | number;
  outsidePadding?: number;
};

export default function Carousel({ children, itemsToShow = 3, gap = 10, outsidePadding = 40 }: Props) {
  const width = useWidth();
  const breakPoints = { s: 0, m: 768, l: 1024 };

  const [scrollIndex, setScrollIndex] = useState(0);
  const [widthToScroll, setWidthToScroll] = useState(width / 3);

  const wrapperRef = useRef<HTMLDivElement>(null);

  let numberOfItemsToShow = 0;
  if (typeof itemsToShow === "number") numberOfItemsToShow = itemsToShow;
  else {
    if (window.innerWidth < breakPoints.m + 1) numberOfItemsToShow = itemsToShow.s;
    else if (window.innerWidth < breakPoints.l + 1) numberOfItemsToShow = itemsToShow.m;
    else numberOfItemsToShow = itemsToShow.l;
  }

  const height = wrapperRef.current?.children[0].getBoundingClientRect().height!;

  const BUTTON_STYLES: React.CSSProperties = {
    height: height! - 4 + "px",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    zIndex: 2,
  };

  console.log(scrollIndex);

  return (
    <div>
      <div style={{ ...BUTTON_STYLES, left: 0 }} onClick={() => setScrollIndex((prev) => prev - 1)}>
        <ChevronLeft />
      </div>
      <div
        ref={wrapperRef}
        style={{
          display: "flex",
          gap: `${gap}px`,
          transform: `translateX(${widthToScroll * -scrollIndex}px)`,
          transition: `0.5s`,
        }}
      >
        {children}
      </div>
      <div
        style={{ ...BUTTON_STYLES, right: 0, transform: `translateY(${-height}px)` }}
        onClick={() => setScrollIndex((prev) => prev + 1)}
      >
        <ChevronRight />
      </div>
    </div>
  );
}
