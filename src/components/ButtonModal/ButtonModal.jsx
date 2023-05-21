import s from "./style.module.css";

export const ButtonModal = ({ text, color, onclick }) => {
  return (
    <button onClick={onclick} className={`${s.btn} ${color}`}>
      {text}
    </button>
  );
};
