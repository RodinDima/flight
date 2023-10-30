import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../Title/Title";
import Link from "../Link/Link";
import "./style.css";

const Holiday = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const DataAsync = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        if (Array.isArray(response.data.products)) {
          setData(response.data.products.slice(1,4));
          console.log(data);
        } else {
          console.log("Дані не є масивом.");
        }
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    };
    DataAsync();
    console.log(data);
  }, []);

  console.log("data", data);

  return (
    <section className="holiday">
      <div className="holiday__container">
        <Title textTitle="Рекомендовані канікули" />
        <Link linkText="Переглянути всі напрямки" />
        <div className="holiday__items">
          {data.map((item, index) => (
            <div className="holiday__item" key={index}>
              <div className="holiday__img">
                <img src={item.images[1]} alt="" />
              </div>
              <div className="holiday__content">
                <div className="holiday__text-left">
                  <p className="holiday__title">{item.title}</p>
                  <p className="holiday__text">{item.description}</p>
                </div>
                <p className="holiday__price">{item.price}$</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Holiday;
