import React from "react";

import { TextFlight } from "../../Constants";

import Profile from "./Image/profile.png";

import { ReactComponent as Bell } from "./Image/bell.svg";

import { ReactComponent as Logo } from "./Image/Logo.svg";

import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="#">
            <Logo />
          </a>
        </div>
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
            <div className="header__notification">
              <a href="#" className="header__notification-link">
                <Bell />
              </a>
            </div>
            <div className="header__user">
              <a href="#">
                <img src={Profile} alt="myPhoto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
