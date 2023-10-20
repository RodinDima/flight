import React from "react";
import { TextFlight } from "../../Constants";
import Title from "../Title/Title";

import { Dest } from "../../ConstantsOb";
import Link from "../Link/Link";

import "./style.css";

const Holiday = () => {
  return (
    <section className="holiday">
      <div className="holiday__container">
        <Title textTitle="Recommended Holidays" />
        <Link linkText="View all destinations" />
        <a href="#" className="holiday__items">
          {Dest.map((item, index) => (
            <div className="holiday__item" key={index}>
              <div className="holiday__img">
                <img src={item.img} alt="" />
              </div>
              <p className="holiday__country">{item.country}</p>
              <p className="holiday__text">{item.text}</p>

              <p className="holiday__price">{item.price}</p>
            </div>
          ))}
        </a>
      </div>
    </section>
  );
};

export default Holiday;
