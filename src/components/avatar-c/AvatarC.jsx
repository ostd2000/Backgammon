import React from "react";
import "./AvatarC.scss";

const AvatarC = ({ className, src, alt }) => {
  return (
    <div className={`avatar-c ${className}`}>
      <img className="avatar-c__img" src={src} alt={alt} />
    </div>
  );
};

export default AvatarC;
