import React from "react";
import "./HeaderC.scss";

import AvatarC from "../avatar-c/AvatarC";

import userImage from "../../assets/pics/User.jpg";

const HeaderC = () => {
  return (
    <div className="header-c">
      <div className="header-c__c1">
        <span className="header-c__username">ostd2000</span>

        <AvatarC src={userImage} alt="User Image" />
      </div>
    </div>
  );
};

export default HeaderC;
