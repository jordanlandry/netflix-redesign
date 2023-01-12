import React, { useEffect, useRef, useState } from "react";
import {
  ChevronBarContract,
  ChevronCompactLeft,
  ChevronCompactRight,
  ChevronLeft,
  ChevronRight,
  Translate,
} from "react-bootstrap-icons";
import useWidth from "../../hooks/useWidth";

type Props = {
  children: React.ReactNode;
  gap?: number;
  itemsToShow?: { s: number; m: number; l: number; xl: number; xxl: number; max: number } | number;
  extraButtonStyles?: React.CSSProperties;
};

export default function Carousel({ children, itemsToShow = 3, gap = 10, extraButtonStyles }: Props) {
  const width = useWidth();
  const breakPoints = { m: 768, l: 1024, xl: 1280, xxl: 1536, max: 1920 };

  const outsidePadding = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--outside-padding").replace("px", "")
  );

  const [scrollIndex, setScrollIndex] = useState(0);

  const wrapperRef = useRef<HTMLDivElement>(null);

  let numberOfItemsToShow = 0;
  if (typeof itemsToShow === "number") numberOfItemsToShow = itemsToShow;
  else {
    if (window.innerWidth < breakPoints.m + 1) numberOfItemsToShow = itemsToShow.s;
    else if (window.innerWidth < breakPoints.l + 1) numberOfItemsToShow = itemsToShow.m;
    else if (window.innerWidth < breakPoints.xl + 1) numberOfItemsToShow = itemsToShow.l;
    else if (window.innerWidth < breakPoints.xxl + 1) numberOfItemsToShow = itemsToShow.xl;
    else if (window.innerWidth < breakPoints.max + 1) numberOfItemsToShow = itemsToShow.xxl;
    else numberOfItemsToShow = itemsToShow.max;
  }

  const [itemWidth, setItemWidth] = useState(width - outsidePadding * 2 - gap * (numberOfItemsToShow - 1));
  const [buttonHeight, setButtonHeight] = useState(wrapperRef.current?.children[0].getBoundingClientRect().height!);

  useEffect(() => {
    if (!wrapperRef.current) return;

    let w = (width - outsidePadding * 2 - gap * (numberOfItemsToShow - 1)) / numberOfItemsToShow;

    for (let i = 0; i < wrapperRef.current.children.length; i++) {
      const child = wrapperRef.current.children[i];
      // Set the width of the children
      child.children[0].setAttribute("width", w + "px");
    }

    setButtonHeight(Math.ceil(wrapperRef.current.children[0].getBoundingClientRect().height!));
  }, [width]);

  // -4 everywhere because for some reason the height of the a tag is 4px larger than the image inside it, there is no padding or margin on the a tag so I don't know why this is happening
  const BUTTON_STYLES: React.CSSProperties = {
    ...extraButtonStyles,
    cursor: "pointer",
    height: buttonHeight! - 4 + "px",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 2,
    width: outsidePadding - gap,
    fontSize: "2rem",
  };

  return (
    <div>
      <div className="" style={{ ...BUTTON_STYLES, left: 0 }} onClick={() => setScrollIndex((prev) => prev - 1)}>
        <ChevronCompactLeft />
      </div>
      <div
        ref={wrapperRef}
        style={{
          display: "flex",
          gap: `${gap}px`,
          transform: `translateX(calc(${scrollIndex * -100}% - ${scrollIndex * gap}px))`,
          transition: `0.5s`,
        }}
      >
        {children}
      </div>
      <div
        style={{ ...BUTTON_STYLES, right: 0, transform: `translateY(${-buttonHeight}px)` }}
        onClick={() => setScrollIndex((prev) => prev + 1)}
      >
        <ChevronCompactRight />
      </div>
    </div>
  );
}
