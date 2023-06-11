import { useContext, useEffect, useState } from "react";
import s from "./style.module.css";
import logo from "../../assets/logo.svg";
import { calculateWinner } from "../../calculateWinner";
import { Board } from "../../components/Board/Board";
import { BoardHeader } from "../../components/BoardHeader/BoardHeader";
import { RestartModal } from "../../components/RestartModal/RestartModal";
import { BoardFooter } from "../../components/BoardFooter/BoardFooter";
import { GameContext } from "../../contexts/GameModeContext";
import { ScoreContext } from "../../contexts/ScoreContext";
import { NextRoundModal } from "../../components/NextRoundModal/NextRoundModal";
import { useNavigate } from "react-router-dom";

export const Game = () => {
  const navigate = useNavigate();
  const { gameMode, xIsNext, setXIsNext } = useContext(GameContext);
  const { setPlayerScores } = useContext(ScoreContext);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [toggleRestart, setToggleRestart] = useState(false);
  const [toggleNextRound, setToggleNextRound] = useState(false);
  const [winningSquares, setWinningSquares] = useState([]);
  const cpuSymbol = xIsNext ? "X" : "O";
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    const winner = calculateWinner(nextSquares);
    if (winner) {
      setWinningSquares(winner.line);
      setTimeout(() => {
        setToggleNextRound(!toggleNextRound);
      }, 200);

      if (winner.winner === "X") {
        setPlayerScores((prevScores) => ({
          ...prevScores,
          player1: prevScores.player1 + 1,
        }));
      } else if (winner.winner === "O") {
        setPlayerScores((prevScores) => ({
          ...prevScores,
          player2: prevScores.player2 + 1,
        }));
      } else {
        if (gameMode === "cpu") {
          setPlayerScores((prevScores) => ({
            ...prevScores,
            ties: prevScores.ties + 1,
          }));
        }
      }
    } else {
      const isGameTied = nextSquares.every((square) => square !== null);

      if (isGameTied && !winner) {
        setTimeout(() => {
          setToggleNextRound(!toggleNextRound);
        }, 200);
        setPlayerScores((prevScores) => ({
          ...prevScores,
          ties: prevScores.ties + 1,
        }));
      }
      setXIsNext(!xIsNext);
      setWinningSquares([]);
    }
  };

  const handleCpuTurn = () => {
    if (calculateWinner(currentSquares)) {
      return;
    }
    setTimeout(() => {
      const emptySquares = currentSquares.reduce(
        (acc, square, index) => (square === null ? [...acc, index] : acc),
        []
      );
      const randomIndex = Math.floor(Math.random() * emptySquares.length);
      const cpuNextSquares = [...currentSquares];
      cpuNextSquares[emptySquares[randomIndex]] = cpuSymbol;

      const isGameTied = cpuNextSquares.every((square) => square !== null);
      if (!isGameTied) {
        handlePlay(cpuNextSquares);
      }
    }, 1000);
    setXIsNext(!xIsNext);
  };

  const restart = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setToggleRestart(!toggleRestart);
  };

  const nextRound = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setToggleNextRound(!toggleNextRound);
  };

  const quitGame = () => {
    setPlayerScores({ player1: 0, player2: 0, ties: 0 });
    navigate("/");
  };

  useEffect(() => {
    if (gameMode === "cpu" && currentMove % 2 !== 0) {
      handleCpuTurn();
    }
  }, [currentMove, gameMode]);

  return (
    <div className={s.container}>
      {toggleRestart && (
        <RestartModal
          onClickYesRestart={() => restart()}
          onClickBtn={() => setToggleRestart(!toggleRestart)}
        />
      )}
      {toggleNextRound && (
        <NextRoundModal
          onClickYesRestart={() => nextRound()}
          onClickBtn={() => {
            setToggleNextRound(!toggleNextRound), quitGame();
          }}
        />
      )}
      <BoardHeader
        xIsNext={xIsNext}
        logo={logo}
        onClickBtn={() => setToggleRestart(!toggleRestart)}
      />
      <Board
        squares={currentSquares}
        onPlay={handlePlay}
        xIsNext={xIsNext}
        winningSquares={winningSquares}
        setPlayerScores={setPlayerScores}
      />
      <BoardFooter />
    </div>
  );
};
