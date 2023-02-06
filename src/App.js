import "./App.css";
import Board from "./components/Board";
import "./styles/root.scss";
import { useState } from "react";
import { calculateWinner } from "./helpers";
import History from "./components/History";

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
      // if(currentMove < prev.length - 1)
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) return last.isXNext ? "X" : "O";
        return square;
      });
      return history.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  console.log(history);

  const moveTo = (move) => {
    setCurrentMove(move);
  };
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <h2>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
