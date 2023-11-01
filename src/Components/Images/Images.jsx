import React, { useEffect, useState } from "react";

import axios from "axios";

import "./style.css";

const Images = () => {
  const [imageURL, setImageURL] = useState("");
  console.log(imageURL);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get("https://image.dummyjson.com/300");
        console.log(response);

        const imageUrl = response.request.responseURL;

        setImageURL(imageUrl);
      } catch (error) {
        console.error("Помилка при отриманні зображення:", error);
      }
    };
    fetchImage();
  }, []);

  return (
    <>
      <div className="img__container">
        <div className="image__container">{<img src={imageURL} alt="" />}</div>
        <div className="image__container">{<img src={imageURL} alt="" />}</div>
        <div className="image__container">{<img src={imageURL} alt="" />}</div>
        <div className="image__container">{<img src={imageURL} alt="" />}</div>
      </div>
    </>
  );
};

export default Images;
