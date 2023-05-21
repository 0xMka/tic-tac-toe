import s from "./style.module.css";
import restartIcon from "../../assets/icon-restart.svg";

export const RestartButton = ({ onClickBtn }) => {
  return (
    <button onClick={onClickBtn} className={s.btn}>
      <img src={restartIcon} alt="restart" />
    </button>
  );
};
