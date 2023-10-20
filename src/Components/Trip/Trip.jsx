import React from "react";
import { TextFlight } from "../../Constants";
import Title from "../Title/Title";

import { Dest } from "../../ConstantsOb";
import Link from "../Link/Link";

import "./style.css";

const Trip = () => {
  return (
    <section className="trip">
      <div className="trip__container">
        <h3 className="trip__title">{TextFlight.trip.title}</h3>
        <Title textTitle="Most Popular Destinations" />
        <Link linkText="View all destinations" />
        <a href="#" className="trip__items">
          {Dest.map((item, index) => (
            <div
              className="trip__item"
              key={index}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="trip__inner">
                <p className="trip__country">{item.country}</p>
                <p className="trip__text">{item.text}</p>
              </div>

              <p className="trip__price">{item.price}</p>
            </div>
          ))}
        </a>
      </div>
    </section>
  );
};

export default Trip;
