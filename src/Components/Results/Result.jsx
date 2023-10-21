import React from "react";

import ResultLeft from "../ResultLeft/ResultLeft";
import ResultRight from "../ResultRight/ResultRight";

import "./style.css";

const Result = () => {
  return (
    <section className="result">
      <div className="result__container">
        <h3 className="result__title">Recent Searches</h3>
        <div className="result__search">
          <ResultLeft />
          <ResultRight />
        </div>
      </div>
    </section>
  );
};
export default Result;
