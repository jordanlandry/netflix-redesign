import { useEffect, useState } from "react";

export default function MovieLoading() {
  const [animationTime, setAnimationTime] = useState(Math.random() * 4000 + 1000);

  return (
    <div
      className="movie--loading"
      style={{
        width: "200px",
        height: "100px",
        animation: `movie-loading ${animationTime}ms infinite alternate`,
      }}
    ></div>
  );
}
