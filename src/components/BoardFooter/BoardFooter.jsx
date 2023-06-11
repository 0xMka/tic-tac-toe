import { useContext } from "react";
import { ScoreContext } from "../../contexts/ScoreContext";
import { ScoreDisplay } from "../ScoreDisplay/ScoreDisplay";
import s from "./style.module.css";

export const BoardFooter = () => {
  const { playerScores } = useContext(ScoreContext);

  return (
    <div className={s.container}>
      <ScoreDisplay
        bgColor="#31C3BD"
        playerName="X (P1)"
        playerScore={playerScores.player1}
      />
      <ScoreDisplay
        bgColor="#A8BFC9"
        playerName="TIES"
        playerScore={playerScores.ties}
      />
      <ScoreDisplay
        bgColor="#F2B137"
        playerName="O (P2)"
        playerScore={playerScores.player2}
      />
    </div>
  );
};
