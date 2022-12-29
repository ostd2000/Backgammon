import React from "react";
import "./BoardC.scss";

const BoardC = ({ className }) => {
  return (
    <div className={`board-c ${className}`}>
      <canvas id="board-c" width="900" height="600"></canvas>
    </div>
  );
};

export default BoardC;
