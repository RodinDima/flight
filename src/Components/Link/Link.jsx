import React from "react";

import "./style.css";

const Link = (props) => {
  const { linkText } = props;
  return (
    <div className="link">
      <div className="link__inner">
        <a href="#">
          {linkText}
          <span></span>
        </a>
      </div>
    </div>
  );
};

export default Link;
