import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Game } from "./pages/Game/Game";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
