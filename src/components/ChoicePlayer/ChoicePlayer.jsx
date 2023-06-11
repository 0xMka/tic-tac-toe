import { useContext } from "react";
import s from "./style.module.css";
import { GameContext } from "../../contexts/GameModeContext";

export const ChoicePlayer = ({
  iconPlayerX,
  iconPlayerO,
  choicePlayerX,
  choicePlayerO,
}) => {
  const { xIsNext } = useContext(GameContext);
  return (
    <div className={s.container}>
      <p className={s.title}>Pick player 1'S mark</p>
      <div className={s.container_choicePlayer}>
        <div
          onClick={choicePlayerX}
          className={`${s.content_choicePlayer} ${
            xIsNext ? s.background_choicePlayer : ""
          } `}
        >
          <div className={s.choicePlayer}>
            <img className={s.img} src={iconPlayerX} alt="X" />
          </div>
        </div>
        <div
          onClick={choicePlayerO}
          className={`${s.content_choicePlayer} ${
            !xIsNext ? s.background_choicePlayer : ""
          } `}
        >
          <div className={s.choicePlayer}>
            <img className={s.img} src={iconPlayerO} alt="O" />
          </div>
        </div>
      </div>
      <p className={s.detail}>Remember : {xIsNext ? "X" : "O"} goes first</p>
    </div>
  );
};
