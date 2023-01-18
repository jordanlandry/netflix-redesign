import React from "react";
import { InfoCircle } from "react-bootstrap-icons";
import "./styles.css";

type Props = { movieId: string; setMovieInView: any };

export default function InfoButton({ movieId, setMovieInView }: Props) {
  return (
    <button className="btn-unstyled billboard-button info-button" onClick={() => setMovieInView(movieId)}>
      <InfoCircle size={32} />
      More Info
    </button>
  );
}
