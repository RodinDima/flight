import React from "react";

import "./style.css"
import { TextFlight } from "../../Constants";

const Header = () => {
	return (
    <div className="header__container">
      <div className="header__logo"></div>
      <div className="header__side">
        <nav className="header__menu menu">
          <ul className="menu">
            <li className="menu__item">
              <a href="" className="menu__link">
                {TextFlight.header.linkOne}
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                {TextFlight.header.linkTwo}
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                {TextFlight.header.linkThree}
              </a>
            </li>
            <li className="menu__item">
              <a href="" className="menu__link">
                {TextFlight.header.linkFour}
              </a>
            </li>
          </ul>
        </nav>
				<div className="header__profile">
					<div className="header__notification"></div>
					<div className="header__user"></div>
		  </div>
      </div>
    </div>
  );
};

export default Header;