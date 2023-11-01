import React, { useEffect, useState } from "react";

import axios from "axios";

import { TextFlight } from "../../Constants";

import Title from "../Title/Title";
import Link from "../Link/Link";

import "./style.css";

const Trip = () => {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const AsyncFetch = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/1");
        if (response.data && typeof response.data === "object") {
          setData(response.data);
        } else {
          console.log("Дані не було отримано або не є об'єктом.");
        }
      } catch (error) {
        console.error("Помилка під час отримання даних:", error);
      }
    };

    AsyncFetch();
  }, []);

  useEffect(() => {
    const AsyncFetchTwo = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/2");
        console.log(response)
        if (response.data && typeof response.data === "object") {
          console.log("before", data);
          data.push(response.data);
          console.log("after", data)
        } else {
          console.log("Дані не було отримано або не є об'єктом.");
        }
      } catch (error) {
        console.error("Помилка під час отримання даних:", error);
      }
    };

    AsyncFetchTwo();
  }, []);

  

  return (
    <section className="trip">
      <div className="trip__container">
        <h3 className="trip__title">{TextFlight.trip.title}</h3>
        <Title textTitle="Most Popular Destinations" />
        <Link linkText="View all destinations" />
        <a href="#" className="trip__items">
          <div
            className="trip__item"
            style={{ backgroundImage: `url(${data.thumbnail})` }}
          >
            <div className="trip__inner">
              <p className="trip__country">{data.title}</p>
              <p className="trip__text">{data.description}</p>
            </div>
            <p className="trip__price">{data.price}</p>
          </div>
          <div
            className="trip__item"
            style={{ backgroundImage: `url(${data.thumbnail})` }}
          >
            <div className="trip__inner">
              <p className="trip__country">{data.title}</p>
              <p className="trip__text">{data.description}</p>
            </div>
            <p className="trip__price">{data.price}</p>
          </div>
          <div
            className="trip__item"
            style={{ backgroundImage: `url(${data.thumbnail})` }}
          >
            <div className="trip__inner">
              <p className="trip__country">{data.title}</p>
              <p className="trip__text">{data.description}</p>
            </div>
            <p className="trip__price">{data.price}</p>
          </div>
          <div
            className="trip__item"
            style={{ backgroundImage: `url(${data.thumbnail})` }}
          >
            <div className="trip__inner">
              <p className="trip__country">{data.title}</p>
              <p className="trip__text">{data.description}</p>
            </div>
            <p className="trip__price">{data.price}</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Trip;
