import s from "./style.module.css";
import xIcon from "../../assets/icon-x.svg";
import xIconOutline from "../../assets/icon-x-outline.svg";
import oIcon from "../../assets/icon-o.svg";
import oIconOutline from "../../assets/icon-o-outline.svg";

export const Square = ({ value, onClickSquare, winningSquares }) => {
  const styleWinner = (winningSquares, value) => {
    if (winningSquares) {
      if (value === "X") {
        return "s.xWinner";
      } else if (value === "O") {
        return "s.oWinner";
      }
    }
  };

  const styleIcon = () => {
    if (winningSquares) {
      if (value === "X") {
        return xIconOutline;
      } else if (value === "O") {
        return oIconOutline;
      }
    } else {
      if (value === "X") {
        return xIcon;
      } else if (value === "O") {
        return oIcon;
      }
    }
  };

  return (
    <button
      className={`${s.btn} ${styleWinner(winningSquares, value)}`}
      onClick={onClickSquare}
    >
      {value && <img className={s.img} src={styleIcon()} alt={value} />}
    </button>
  );
};
