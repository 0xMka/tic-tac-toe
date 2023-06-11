import { createContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [gameMode, setGameMode] = useState("player");
  const [xIsNext, setXIsNext] = useState(true);

  return (
    <GameContext.Provider
      value={{
        gameMode,
        setGameMode,
        xIsNext,
        setXIsNext,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export { GameContext, GameProvider };
