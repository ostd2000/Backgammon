import React from "react";
import "./OverallScoreC.scss";

import LineC from "../line-c/LineC";

const OverallScoreC = ({ className }) => {
  return (
    <div className={`overall-score-c ${className}`}>
      <div className="overall-score-c__title">نتیجه کلی</div>

      <LineC
        className="overall-score-c__line"
        len="25rem"
        col="rgba(255, 255, 255, 0.1)"
      />

      <div className="overall-score-c__c1">
        <div className="overall-score-c__c1-1">
          <span className="overall-score-c__username">ostd2000</span>

          <span className="overall-score-c__user-score">20</span>
        </div>

        <LineC len="7rem" col="rgba(255, 255, 255, 0.1)" vert />

        <div className="overall-score-c__c1-2">
          <span className="overall-score-c__opponent-username">
            bazarghan80
          </span>
          <span className="overall-score-c__opponent-score">0</span>
        </div>
      </div>
    </div>
  );
};

export default OverallScoreC;
