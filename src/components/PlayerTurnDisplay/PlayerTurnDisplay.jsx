import s from "./style.module.css";
import x from "../../assets/icon-x-player-turn.svg";
import o from "../../assets/icon-o-player-turn.svg";

export const PlayerTurnDisplay = ({ xIsNext }) => {
  return (
    <div className={s.container}>
      <img className={s.img} src={xIsNext ? x : o} alt="" />
      <p className={s.text}>turn</p>
    </div>
  );
};
