import React from "react";

const StatusMessage = ({ winner, current }) => {
  //   const message = winner
  //     ? `Winner is ${winner}`
  //     : `Next turn by ${current.isXNext ? "X" : "O"}`;
  const noMovesLeft = current.board.every((el) => el != null);
  return (
    <div className="status-message">
      {(noMovesLeft && (
        <>
          No moves left <span className="text-green">X</span> and{" "}
          <span className="text-orange">O</span>
        </>
      )) ||
        (winner && (
          <>
            Winner is{" "}
            <span className={winner === "X" ? "text-green" : "text-orange"}>
              {winner}
            </span>
          </>
        )) || (
          <>
            Next player is{" "}
            <span className={current.isXNext ? "text-green" : "text-orange"}>
              {current.isXNext ? "X" : "O"}
            </span>
          </>
        )}
    </div>
  );
};

export default StatusMessage;
