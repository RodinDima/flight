import React, { useEffect, useState } from "react";

import axios from "axios";

import "./style.css";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchAsync = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/posts");
        if (Array.isArray(response.data.posts)) {
          setData(response.data.posts.slice(1, 5));
        } else {
          console.log("Дані не є масивом.");
        }
      } catch (error) {
        console.log("error", error);
        throw error;
      }
    };
    FetchAsync();
  }, []);

  return (
    <div className="posts__container">
      <div className="inner">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <h2 className="post__title">{item.title}</h2>
            <div className="post__body">{item.body}</div>
            <div className="post__tags">{item.tags}</div>
            <div className="post__reaction">{item.reactions}</div>
            <div className="post__tags">{item.tags}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
