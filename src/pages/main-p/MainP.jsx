import React from "react";
import "./MainP.scss";

import HeaderC from "../../components/header-c/HeaderC";
import BoardC from "../../components/board-c/BoardC";
import ScoreBoardC from "../../components/score-board-c/ScoreBoardC";

const MainP = () => {
  return (
    <div className="main-p">
      <HeaderC />

      <div className="main-p__c1">
        <BoardC className="main-p__board" />
        <ScoreBoardC />
      </div>
    </div>
  );
};

export default MainP;
