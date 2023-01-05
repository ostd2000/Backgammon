import React from "react";
import "./BtnC.scss";

const BtnC = ({ className, children, ...otherProps }) => {
  return (
    <button className={`btn-c ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default BtnC;
