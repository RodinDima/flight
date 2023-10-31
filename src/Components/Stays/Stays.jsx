import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import Link from "../Link/Link";
import axios from "axios";
import "./style.css";

const Stays = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const DataFetch = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/carts/");
        if (Array.isArray(response.data.carts)) {
          setData(response.data.carts.slice(0, 4));
        } else {
          console.log("Дані не є масивом.");
        }
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    };
    DataFetch();
  }, []);

  console.log("data", data);

  return (
    <section className="stays">
      <div className="stays__container">
        <Title textTitle="Popular stays" />
        <Link linkText="View all stays" />
        <div className="stays__items">
          {data.map((cart, index) => (
            <div className="stays__item" key={index}>
              <div className="stays__img">
                <img src={cart.products[1].thumbnail} />
              </div>
              <div className="stays__content">
                <div className="stays__text-left">
                  <p className="stays__text">{cart.products[1].title}</p>
                </div>
                <p className="stays__price">{cart.products[1].price}$</p>
                <p className="stays__price">{cart.products[1].id}</p>
              </div>
              <div className="stays__product-photos"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stays;
