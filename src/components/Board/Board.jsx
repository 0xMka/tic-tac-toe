import { useState } from "react";
import { Square } from "../Square/Square";
import s from "./style.module.css";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: [a, b, c],
      };
    }
  }
  return null;
}

export const Board = ({ xIsNext, onPlay, squares }) => {
  const [winningSquares, setWinningSquares] = useState([]);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);

    const winner = calculateWinner(nextSquares);
    if (winner) {
      setWinningSquares(winner.line);
    } else {
      setWinningSquares([]);
    }
  }

  return (
    <div className={s.container}>
      {Array(3)
        .fill(null)
        .map((_, row) => (
          <div key={row} className={s.board_row}>
            {Array(3)
              .fill(null)
              .map((_, col) => {
                const squareIndex = row * 3 + col;
                return (
                  <Square
                    key={squareIndex}
                    onClickSquare={() => handleClick(squareIndex)}
                    value={squares[squareIndex]}
                    winningSquares={winningSquares.includes(squareIndex)}
                  />
                );
              })}
          </div>
        ))}
    </div>
  );
};
