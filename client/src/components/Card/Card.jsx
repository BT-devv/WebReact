import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link className="link" to={`/male/${item.id}`}>
        <div className="image">
          <img src={item.img} className="mainImg" alt="" />
          <img src={item.img2} className="secondImg" alt="" />
        </div>
        <h2>{item.decription}</h2>
        <div className="prices">
          <h3 className="oldPrice">${item.oldPrice}</h3>
          <h3>${item.newPrice}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Card;
