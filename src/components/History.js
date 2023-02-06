import React from "react";

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
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
  );
};

export default History;
