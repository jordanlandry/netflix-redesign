import { PlayFill } from "react-bootstrap-icons";
import "./styles.css";

type Props = { movieId: string };

export default function PlayButton({ movieId }: Props) {
  return (
    <button
      className="btn-unstyled billboard-button play-button"
      onClick={() => alert("Cannot play video. This is just a demo and I do not own the rights to play this movie")}
    >
      <PlayFill size={48} />
      Play
    </button>
  );
}
