import s from "./style.module.css";

export const ButtonHome = ({ namePlayer, color, onClickBtn }) => {
  return (
    <button onClick={onClickBtn} className={`${s.container} ${color}`}>
      new game (vs {namePlayer})
    </button>
  );
};
