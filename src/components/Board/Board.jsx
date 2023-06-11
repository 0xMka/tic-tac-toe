import { Square } from "../Square/Square";
import s from "./style.module.css";
import { calculateWinner } from "../../calculateWinner";

export const Board = ({ onPlay, squares, winningSquares, xIsNext }) => {
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
