import s from "./style.module.css";
import xIcon from "../../assets/icon-x.svg";
import xIconWin from "../../assets/icon-x-win.svg";
import oIcon from "../../assets/icon-o.svg";
import oIconWin from "../../assets/icon-o-win.svg";

export const Square = ({ value, onClickSquare, winningSquares }) => {
  const colorBg = () => {
    if (winningSquares) {
      if (value === "X") {
        return s.xWinner;
      } else if (value === "O") {
        return s.oWinner;
      } else {
        return;
      }
    }
  };

  const styleIcon = () => {
    if (winningSquares) {
      if (value === "X") {
        return xIconWin;
      } else if (value === "O") {
        return oIconWin;
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
    <button className={`${s.btn} ${colorBg()}`} onClick={onClickSquare}>
      {value && <img className={s.img} src={styleIcon()} alt={value} />}
    </button>
  );
};
