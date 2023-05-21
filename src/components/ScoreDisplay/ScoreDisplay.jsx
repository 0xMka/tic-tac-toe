import s from "./style.module.css";

export const ScoreDisplay = ({ playerName, playerScore, bgColor }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className={s.container}>
      <p className={s.player_name}>{playerName}</p>
      <p className={s.player_score}>{playerScore}</p>
    </div>
  );
};
