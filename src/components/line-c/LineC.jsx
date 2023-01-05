import React from "react";
import "./LineC.scss";

const LineC = ({ className, len, col, vert }) => {
  const styles = {
    width: vert ? "1px" : len,
    height: vert ? len : "1px",
    backgroundColor: col,
  };

  return <div className={`line-c ${className}`} style={styles} />;
};

export default LineC;
