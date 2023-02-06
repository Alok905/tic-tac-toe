import "./App.css";
import Board from "./components/Board";
import "./styles/root.scss";
import { useState } from "react";
import { calculateWinner } from "./helpers";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winningSquares } = calculateWinner(current.board);

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) return;
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) return last.isXNext ? "X" : "O";
        return square;
      });
      return history.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };
  const onNewGame = () => {
    setCurrentMove(0);
    setHistory([{ board: Array(9).fill(null), isXNext: true }]);
  };
  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span> TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        className={`btn-reset ${winner ? "active" : ""}`}
        onClick={onNewGame}
      >
        Start new game
      </button>
      <h2 style={{ fontWeight: "normal" }}>Current Game History</h2>
      <History
        history={history}
        moveTo={moveTo}
        currentMove={currentMove}
        current={current}
      />
      <div className="bg-balls" />
    </div>
  );
}

export default App;
