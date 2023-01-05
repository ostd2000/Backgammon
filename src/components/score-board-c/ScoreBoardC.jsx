import React from "react";
import "./ScoreBoardC.scss";

import LineC from "../line-c/LineC";
import BtnC from "../btn-c/BtnC";

const ScoreBoardC = ({ className }) => {
  return (
    <div className={`score-board-c ${className}`}>
      <div className="score-board-c__title">جدول امتیازات</div>

      <LineC
        className="score-board__line"
        len="25rem"
        col="rgba(255, 255, 255, 0.1)"
      />

      <div className="score-board-c__game-format">
        <span className="score-board-c__to-be-won">3</span>
        <span className="score-board-c__from">از</span>
        <span className="score-board-c__to-be-won-from">5</span>
      </div>

      <LineC
        className="score-board-c__line"
        len="25rem"
        col="rgba(255, 255, 255, 0.1)"
      />

      <div className="score-board-c__c1">
        <div className="score-board-c__c1-1">
          <span className="score-board-c__username">ostd2000</span>

          <span className="score-board-c__user-score">1</span>
        </div>

        <LineC len="7rem" col="rgba(255, 255, 255, 0.1)" vert />

        <div className="score-board-c__c1-2">
          <span className="score-board-c__opponent-username">bazarghan80</span>
          <span className="score-board-c__opponent-score">0</span>
        </div>
      </div>

      <LineC
        className="score-board-c__line"
        len="25rem"
        col="rgba(255, 255, 255, 0.1)"
      />

      <div className="score-board-c__c2">
        <BtnC className="score-board-c--btn-finish">اتمام بازی</BtnC>

        <BtnC className="score-board-c--btn-restart">شروع مجدد</BtnC>
      </div>
    </div>
  );
};

export default ScoreBoardC;
