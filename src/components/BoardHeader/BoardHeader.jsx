import { Logo } from "../Logo/Logo";
import { PlayerTurn } from "../PlayerTurn/PlayerTurn";
import { RestartButton } from "../RestartButton/RestartButton";
import s from "./style.module.css";

export const BoardHeader = ({ xIsNext, logo, onClickBtn }) => {
  return (
    <div className={s.container}>
      <Logo logo={logo} />
      <PlayerTurn xIsNext={xIsNext} />
      <RestartButton onClickBtn={onClickBtn} />
    </div>
  );
};
