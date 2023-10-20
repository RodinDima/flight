import React from "react";

import "./style.css";

import { Prep } from "../../ConstantsOb";

const Prepare = () => {
  return (
    <>
      <section className="prepare">
        <div className="prepare__container">
          <h2 className="prepare__title">Prepare for your trip</h2>
          <div className="prepare__items">
            {Prep.map((item, index) => (
              <div className="prepare__item" key={index}>
                <div className="prepare__item-img">
						<img src={item.img} alt="" />
					 </div>
                <p className="prepare__item-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Prepare;
