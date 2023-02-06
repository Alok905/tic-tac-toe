import React from "react";

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, move) => {
          return (
            <li key={move}>
              <button
                className={`btn-move ${move === currentMove ? "active" : ""}`}
                style={{ fontWeight: move === currentMove ? "bold" : "normal" }}
                type="buttoon"
                onClick={() => {
                  moveTo(move);
                }}
              >
                Go to {move === 0 ? "game start" : `move #${move}`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default History;
