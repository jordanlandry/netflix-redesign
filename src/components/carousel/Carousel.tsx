import React, { useEffect, useRef, useState } from "react";
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";
import useWidth from "../../hooks/useWidth";

type Props = {
  children: React.ReactNode;
  gap?: number;
  itemsToShow?: { s: number; m: number; l: number; xl: number; xxl: number; max: number } | number;
  extraButtonStyles?: React.CSSProperties;
  aspectRatio: number;
};

export default function Carousel({ children, itemsToShow = 3, gap = 10, extraButtonStyles, aspectRatio }: Props) {
  const width = useWidth();
  const breakPoints = { m: 768, l: 1024, xl: 1280, xxl: 1536, max: 1920 };

  const [reRender, setReRender] = useState(0);

  const outsidePadding = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--outside-padding").replace("px", "")
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [scrollBarWidth, setScrollBarWidth] = useState(window.innerWidth - window.visualViewport!.width);

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

  const updateSizes = (w: number) => {
    // setButtonHeight(Math.ceil(wrapperRef.current!.children[0].getBoundingClientRect().height!));
    setScrollBarWidth(window.innerWidth - window.visualViewport!.width);
    setButtonHeight(Math.ceil(w / aspectRatio));
  };

  useEffect(() => {
    if (!wrapperRef.current) return;

    let w = (width - outsidePadding * 2 - gap * (numberOfItemsToShow - 1) - scrollBarWidth) / numberOfItemsToShow;

    for (let i = 0; i < wrapperRef.current.children.length; i++) {
      const child = wrapperRef.current.children[i];
      child.children[0].setAttribute("width", w + "px");
    }

    updateSizes(w);
  }, [width, wrapperRef, scrollBarWidth, reRender]);

  // setReRender((prev) => prev + 1);
  // useMountEffect(updateSizes);

  // -4 everywhere because for some reason the height of the a tag is 4px larger than the image inside it, there is no padding or margin on the a tag so I don't know why this is happening
  const BUTTON_STYLES: React.CSSProperties = {
    ...extraButtonStyles,
    cursor: "pointer",
    height: buttonHeight,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 2,
    width: outsidePadding - gap,
    fontSize: "2rem",
  };

  // @ts-ignore
  const availableElements = children.length;

  return (
    <div>
      {availableElements > numberOfItemsToShow ? (
        <div className="" style={{ ...BUTTON_STYLES, left: 0 }} onClick={() => setScrollIndex((prev) => prev - 1)}>
          <ChevronCompactLeft />
        </div>
      ) : null}
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
      {availableElements > numberOfItemsToShow ? (
        <div
          style={{ ...BUTTON_STYLES, right: 0, transform: `translateY(${-buttonHeight - 4}px)` }}
          onClick={() => setScrollIndex((prev) => prev + 1)}
        >
          <ChevronCompactRight />
        </div>
      ) : null}
    </div>
  );
}
