import React from "react";

import { ReactComponent as Elli } from "./Images/elli.svg";
import { ReactComponent as Plane } from "./Images/plane.svg";

import "./style.css"

const Decor = () => {
	return (
    <>
      <div className="decor">
        <Elli />
        <div className="line"></div>
        <Plane />
        <div className="line"></div>
        <Elli />
      </div>
    </>
  );
};

export default Decor;