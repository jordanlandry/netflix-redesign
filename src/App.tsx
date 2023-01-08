import { useState } from "react";
import UserSelectPage from "./pages/userSelect/UserSelectPage";

function App() {
  const [page, setPage] = useState(0);

  return <div className="App">{page === 0 ? <UserSelectPage /> : null}</div>;
}

export default App;
