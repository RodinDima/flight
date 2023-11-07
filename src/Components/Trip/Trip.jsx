import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextFlight } from "../../Constants";
import Title from "../Title/Title";

import "./style.css";

const Trip = () => {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    const asyncFetch = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/1");
        if (response.data && typeof response.data === "object") {
          setData({ items: [response.data] });
          console.log("data", response.data);
        } else {
          console.log("Дані не було отримано або не є об'єктом.");
        }
      } catch (error) {
        console.error("Помилка під час отримання даних:", error);
      }
    };

    asyncFetch();
  }, []);

  useEffect(() => {
    const asyncFetchTwo = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/3");
        console.log(response);
        if (response.data && typeof response.data === "object") {
          setData({ items: [...data.items, response.data] });
          console.log("data after", data);
        } else {
          console.log("Дані не було отримано або не є об'єктом.");
        }
      } catch (error) {
        console.error("Помилка під час отримання даних:", error);
      }
    };

    asyncFetchTwo();
  }, []);

  return (
    <section className="trip">
      <div className="trip__container">
        <h3 className="trip__title">{TextFlight.trip.title}</h3>
        <Title textTitle="Найпопулярніші напрямки" />
        <a href="#" className="trip__items">
          {data.items.slice(1, 2).map((item, index) => (
            <div
              className="trip__item"
              style={{ backgroundImage: `url(${item.thumbnail})` }}
              key={index}
            >
              <div className="trip__inner">
                <p className="trip__country">{item.title}</p>
                <p className="trip__text">{item.description}</p>
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
