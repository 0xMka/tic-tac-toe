import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Game } from "./pages/Game/Game";
import { PageNotFound } from "./pages/PageNotFound/PageNotFound";
import { GameProvider } from "./contexts/GameModeContext";
import { ScoreProvider } from "./contexts/ScoreContext";

function App() {
  return (
    <>
      <GameProvider>
        <ScoreProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ScoreProvider>
      </GameProvider>
    </>
  );
}

export default App;
