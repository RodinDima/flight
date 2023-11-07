import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextFlight } from "../../Constants";
import Title from "../Title/Title";

import { RotatingLines } from "react-loader-spinner";

import "./style.css";

const Trip = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

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
      } finally {
        setIsLoading(false)
      }
      
    };

    asyncFetch();
  }, []);

  

  return (
    <section className="trip">
      <div className="trip__container">
        <h3 className="trip__title">{TextFlight.trip.title}</h3>
        <Title textTitle="Найпопулярніші напрямки" />
        <a href="#" className="trip__items">
          
          {isLoading ? (
            <div className="loader">
            <RotatingLines
              strokeColor="grey"
              strokeWidth={5}
              animationDuration={750}
              width={96}
              visible={true}
            />
          </div>
          ):(
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
         
          )}
        
        </a>
      </div>
    </section>
  );
};

export default Trip;
