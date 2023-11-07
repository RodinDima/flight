import React, { useEffect, useState } from "react";
import axios from "axios";
import Title from "../Title/Title";
import Link from "../Link/Link";
import { RotatingLines } from "react-loader-spinner";
import "./style.css";

const Holiday = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products/");
        if (Array.isArray(response.data.products)) {
          const slicedData = response.data.products.slice(4, 8);
          setData(slicedData);
        } else {
          console.log("Дані не є масивом.");
        }
      } catch (error) {
        console.error("Помилка при завантаженні даних:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="holiday">
      <div className="holiday__container">
        <Title textTitle="Рекомендовані канікули" />
        <Link linkText="Переглянути всі напрямки" />
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
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default Holiday;
