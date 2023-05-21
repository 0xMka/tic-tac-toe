import { useState } from "react";
import s from "./style.module.css";
import { Board } from "../../components/Board/Board";
import { BoardHeader } from "../../components/BoardHeader/BoardHeader";
import logo from "../../assets/logo.svg";
import { RestartModal } from "../../components/RestartModal/RestartModal";
import { BoardFooter } from "../../components/BoardFooter/BoardFooter";

export const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [toggleRestart, setToggleRestart] = useState(false);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function restart() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setToggleRestart(!toggleRestart);
  }
  console.log(currentSquares);
  return (
    <div className={s.container}>
      {toggleRestart && (
        <RestartModal
          onClickYesRestart={() => restart()}
          onClickBtn={() => setToggleRestart(!toggleRestart)}
        />
      )}
      <BoardHeader
        xIsNext={xIsNext}
        logo={logo}
        onClickBtn={() => setToggleRestart(!toggleRestart)}
      />
      <Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext} />
      <BoardFooter />
    </div>
  );
};
