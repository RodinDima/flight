import React from "react";


import { TextFlight } from "../../Constants";
import Title from "../Title/Title";

import "./style.css";

const Trip = () => {
  return (
    <div className="trip__container">
      <h3 className="trip__title">{TextFlight.trip.title}</h3>
      <Title textTitle="Most Popular Destinations" />
    </div>
  );
};

export default Trip;
