import { ScoreDisplay } from "../ScoreDisplay/ScoreDisplay";
import s from "./style.module.css";

export const BoardFooter = () => {
  return (
    <div className={s.container}>
      <ScoreDisplay bgColor="#31C3BD" playerName="X (P1)" playerScore="14" />
      <ScoreDisplay bgColor="#A8BFC9" playerName="TIES" playerScore="32" />
      <ScoreDisplay bgColor="#F2B137" playerName="O (P2)" playerScore="11" />
    </div>
  );
};
