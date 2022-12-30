import React, { useEffect, useRef } from "react";
import "./BoardC.scss";

import { drawBoard } from "../../utils";

const BoardC = ({ className }) => {
  const boardCanvas = useRef();

  useEffect(() => {
    const ctx = boardCanvas.current.getContext("2d");

    drawBoard(ctx);
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
