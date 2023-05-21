import { Logo } from "../../components/Logo/Logo";
import s from "./style.module.css";
import logo from "../../assets/logo.svg";
import xIcon from "../../assets/icon-x-player-turn.svg";
import oIcon from "../../assets/icon-o-player-turn.svg";
import { ChoicePlayer } from "../../components/ChoicePlayer/ChoicePlayer";
import { ButtonHome } from "../../components/ButtonHome/ButtonHome";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className={s.container}>
      <Logo logo={logo} />
      <ChoicePlayer iconPlayerX={xIcon} iconPlayerO={oIcon} />
      <ButtonHome namePlayer="cpu" color="buttonHomeBlue" />
      <ButtonHome
        onClickBtn={() => navigate("/game")}
        namePlayer="player"
        color="buttonHomeOrange"
      />
    </div>
  );
};
