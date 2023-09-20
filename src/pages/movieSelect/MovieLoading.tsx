import { useEffect, useState } from "react";
import { Calculator } from "react-bootstrap-icons";
import useWidth from "../../hooks/useWidth";
import properties from "../../properties";

type Props = {
  elementsCount: number;
};

export default function MovieLoading({ elementsCount }: Props) {
  const [animationTime, setAnimationTime] = useState(Math.random() * 4000 + 1000);

  const width =
    window.innerWidth / elementsCount - parseInt(getComputedStyle(document.documentElement).getPropertyValue("--outside-padding").replace("px", ""));

  const height = width / properties.POSTER_ASPECT_RATIO;

  return (
    <div
      className="movie--loading"
      style={{
        width: width + "px",
        height: height + "px",
        animation: `movie-loading ${animationTime}ms infinite alternate`,
      }}
    ></div>
  );
}
