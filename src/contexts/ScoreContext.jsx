import { createContext, useState } from "react";

const ScoreContext = createContext();

const ScoreProvider = ({ children }) => {
  const [playerScores, setPlayerScores] = useState({
    player1: 0,
    player2: 0,
    ties: 0,
  });

  return (
    <ScoreContext.Provider value={{ playerScores, setPlayerScores }}>
      {children}
    </ScoreContext.Provider>
  );
};

export { ScoreContext, ScoreProvider };
