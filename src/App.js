import "./App.css";
import Board from "./components/Board";
import "./styles/root.scss";
import { useEffect, useState } from "react";
import { calculateWinner } from "./helpers";

function App() {
  // const [history, setHistory] = useState([
  //   { board: Array(9).fill(null), isXNext: true },
  // ]);
  // const [currentMove, setCurrentMove] = useState(0);

  // const current = history[currentMove];

  // const winner = calculateWinner(current.board);

  // const message = winner
  //   ? `Winner is ${winner}`
  //   : `Next player is ${current.isXNext ? "X" : "O"}`;

  // const handleSquareClick = (position) => {
  //   if (current.board[position] || winner) return;

  //   setHistory((prev) => {
  //     const last = prev[prev.length - 1];

  //     const newBoard = last.board.map((square, pos) => {
  //       if (pos === position) return last.isXNext ? "X" : "O";
  //       return square;
  //     });
  //     return prev.concat({ board: newBoard, isXNext: !last.isXNext });
  //   });

  //   setCurrentMove((prev) => prev + 1);
  // };

  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next turn by ${current.isXNext ? "X" : "O"}`;

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) return;
    setHistory((prev) => {
      const last = history[history.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) return last.isXNext ? "X" : "O";
        return square;
      });
      return history.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  console.log(history);
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <h2>Current Game History</h2>
      {/* <div>
        {moves.map((move) => (
          <button type="button" onClick={() => handleMove(move)}>
            Go to move #{move.moveNo}
          </button>
        ))}
      </div> */}
    </div>
  );
}

export default App;
