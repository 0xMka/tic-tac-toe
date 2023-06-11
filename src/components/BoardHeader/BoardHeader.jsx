import { ButtonRestart } from "../ButtonRestart/ButtonRestart";
import { Logo } from "../Logo/Logo";
import { PlayerTurnDisplay } from "../PlayerTurnDisplay/PlayerTurnDisplay";
import s from "./style.module.css";

export const BoardHeader = ({ xIsNext, logo, onClickBtn }) => {
  return (
    <div className={s.container}>
      <Logo logo={logo} />
      <PlayerTurnDisplay xIsNext={xIsNext} />
      <ButtonRestart onClickBtn={onClickBtn} />
    </div>
  );
};
