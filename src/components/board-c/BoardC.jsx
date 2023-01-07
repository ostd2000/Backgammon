import React, { useEffect, useRef } from "react";
import "./BoardC.scss";

import { boardWidth, boardHeight } from "../../game/constants";
import Board from "../../game/board";

const BoardC = ({ className }) => {
  const boardCanvas = useRef();

  useEffect(() => {
    const ctx = boardCanvas.current.getContext("2d");

    const board = new Board(boardWidth, boardHeight);
    board.draw(ctx);
  });

  return (
    <div className={`board-c ${className}`}>
      <canvas
        id="board-canvas"
        ref={boardCanvas}
        width="900"
        height="600"
      ></canvas>
    </div>
  );
};

export default BoardC;
