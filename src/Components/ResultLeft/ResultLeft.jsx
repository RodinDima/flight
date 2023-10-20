import React from "react";

import "./style.css"
import Decor from "../Decor/Decor";

const ResultLeft = () => {
	return (
    <>
      <div className="result__inner">
      	<div className="result__block">
					<div className="result__from">SIN</div>
					<Decor/>
	        <div className="result__to">LAX</div>
	      </div>
	      <div className="result__depart">
	        <p>Depart on:</p>
	        <div className="result__depart-date">7 Sep 2021</div>
	      </div>
      </div>
    </>
  );
};

export default ResultLeft;