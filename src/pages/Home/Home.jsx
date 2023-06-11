import { Logo } from "../../components/Logo/Logo";
import s from "./style.module.css";
import logo from "../../assets/logo.svg";
import xIcon from "../../assets/icon-x-player-turn.svg";
import xIconChoice from "../../assets/icon-x-choice.svg";
import oIcon from "../../assets/icon-o-player-turn.svg";
import oIconChoice from "../../assets/icon-o-choice.svg";
import { ChoicePlayer } from "../../components/ChoicePlayer/ChoicePlayer";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../../contexts/GameModeContext";

export const Home = () => {
  const { setGameMode, xIsNext, setXIsNext } = useContext(GameContext);
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <Logo logo={logo} />
      <ChoicePlayer
        choicePlayerX={() => setXIsNext(true)}
        choicePlayerO={() => setXIsNext(false)}
        iconPlayerX={xIsNext ? xIconChoice : xIcon}
        iconPlayerO={!xIsNext ? oIconChoice : oIcon}
      />
      <ButtonHome
        onClickBtn={() => {
          navigate(`/game`);
          setGameMode("cpu");
        }}
        namePlayer="cpu"
        color="buttonHomeBlue"
      />
      <ButtonHome
        onClickBtn={() => {
          navigate(`/game`);
          setGameMode("player");
        }}
        namePlayer="player"
        color="buttonHomeOrange"
      />
    </div>
  );
};
