import React from "react";

import Title from "../Title/Title";

import { day } from "../../ConstantsOb";
import Link from "../Link/Link";

import "./style.css";

const Stays = () => {
  return (
    <section className="stays">
      <div className="stays__container">
        <Title textTitle="Popular stays" />
        <Link linkText="View all stays" />
        <a href="#" className="stays__items">
          {day.map((item, index) => (
            <div className="stays__item" key={index}>
              <div className="stays__img">
                <img src={item.img} alt="" />
              </div>
              <div className="stays__content">
                <div className="stays__text-left">
                  <p className="stays__country">{item.country}</p>
                  <p className="stays__text">{item.text}</p>
                </div>
                <p className="stays__price">{item.price}</p>
              </div>
              </div>
          ))}
        </a>
      </div>
    </section>
  );
};

export default Stays;
