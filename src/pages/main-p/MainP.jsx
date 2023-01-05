import React from "react";
import "./MainP.scss";

import HeaderC from "../../components/header-c/HeaderC";
import BoardC from "../../components/board-c/BoardC";
import ScoreBoardC from "../../components/score-board-c/ScoreBoardC";
import OverallScoreC from "../../components/overall-score-c/OverallScoreC";

const MainP = () => {
  return (
    <div className="main-p">
      <HeaderC />

      <div className="main-p__c1">
        <div className="main-p__c1-1">
          <ScoreBoardC />
          <OverallScoreC className="main-p__overall-score" />
        </div>

        <BoardC className="main-p__board" />
      </div>
    </div>
  );
};

export default MainP;
