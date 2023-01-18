import React, { useEffect, useRef, useState } from "react";
import { ChevronCompactLeft, ChevronCompactRight } from "react-bootstrap-icons";
import getBreakpoint from "../../helpers/format/getBreakpoint";
import useWidth from "../../hooks/useWidth";
import properties from "../../properties";
import "./styles.css";

type Props = {
  children: React.ReactNode;
  gap?: number;
  itemsToShow?: { s: number; m: number; l: number; xl: number; xxl: number; max: number } | number;
  extraButtonStyles?: React.CSSProperties;
  aspectRatio: number;
  infinite?: boolean;
};

export default function Carousel({
  children,
  itemsToShow = 3,
  gap = 10,
  extraButtonStyles,
  aspectRatio,
  infinite = false,
}: Props) {
  const width = useWidth();

  const outsidePadding = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--outside-padding").replace("px", "")
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [scrollBarWidth, setScrollBarWidth] = useState(window.innerWidth - window.visualViewport!.width);

  let numberOfItemsToShow = 0;
  if (typeof itemsToShow === "number") numberOfItemsToShow = itemsToShow;
  else numberOfItemsToShow = itemsToShow[getBreakpoint(width)];

  const [loading, setLoading] = useState(true);

  const updateSizes = (w: number) => {
    setScrollBarWidth(window.innerWidth - window.visualViewport!.width);
    setButtonHeight(Math.ceil(w / aspectRatio));
  };

  useEffect(() => {
    const update = async () => {
      if (!wrapperRef.current) return;

      let w = (width - outsidePadding * 2 - gap * (numberOfItemsToShow - 1) - scrollBarWidth) / numberOfItemsToShow;
      for (let i = 0; i < wrapperRef.current.children.length; i++) {
        const child = wrapperRef.current.children[i];
        child.children[0].setAttribute("width", w + "px");
      }

      updateSizes(w);
      setLoading(false);
    };

    update();
  }, [width, wrapperRef, scrollBarWidth, children]);

  useEffect(() => {
    if (scrollIndex < 0) setScrollIndex(0);

    // @ts-ignore
    if (scrollIndex > (children!.length - numberOfItemsToShow) / numberOfItemsToShow)
      // @ts-ignore
      setScrollIndex((children.length - numberOfItemsToShow) / numberOfItemsToShow);
  }, [scrollIndex, children, numberOfItemsToShow]);

  // -4 everywhere because for some reason the height of the a tag is 4px larger than the image inside it, there is no padding or margin on the a tag so I don't know why this is happening
  const BUTTON_STYLES: React.CSSProperties = {
    ...extraButtonStyles,
    cursor: "pointer",
    height: buttonHeight,
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: `0.5s font-size`,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    zIndex: 2,
    width: outsidePadding - gap,
  };

  // @ts-ignore
  const availableElements = children.length;

  return (
    <div>
      {availableElements > numberOfItemsToShow ? (
        <div
          className="carousel__button"
          style={{ ...BUTTON_STYLES, left: 0 }}
          onClick={() => setScrollIndex((prev) => prev - 1)}
        >
          <ChevronCompactLeft />
        </div>
      ) : null}
      <div
        ref={wrapperRef}
        style={{
          display: loading ? "none" : "flex",
          gap: `${gap}px`,
          transform: `translateX(calc(${scrollIndex * -100}% - ${scrollIndex * gap}px))`,
          transition: `0.5s`,
        }}
      >
        {children}
      </div>
      {availableElements > numberOfItemsToShow ? (
        <div
          className="carousel__button"
          style={{ ...BUTTON_STYLES, right: 0, transform: `translateY(${-buttonHeight - 4}px)` }}
          onClick={() => setScrollIndex((prev) => prev + 1)}
        >
          <ChevronCompactRight />
        </div>
      ) : null}
    </div>
  );
}
