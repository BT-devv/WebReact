import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link className="link" to={`/product/${item.id}`}>
        <div className="image">
          <img src={item.img[0]} className="mainImg" alt="" />
          <img src={item.img[1]} className="secondImg" alt="" />
        </div>
        <h2>{item.decription}</h2>
        <div className="prices">
          <h3 className="oldPrice">${item.oldPrice}</h3>
          <h3>${item.newPrice}</h3>
        </div>
      </Link>
      <div className="icon">
        <LocalGroceryStoreOutlinedIcon />
        <FavoriteBorderOutlinedIcon />
      </div>
    </div>
  );
};

export default Card;
