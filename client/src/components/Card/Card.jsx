import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import "./Card.scss";
const Card = ({ item }) => {
  return (
    <div className="card">
      <Link className="link" to={`/detail/${item.id}`}>
        <div className="image">
        <img src={item.data.images[0]} className="mainImg" alt="" />
        </div>
        <h2>{item.data.productDetail_name}</h2>
        <div className="prices">
          <h3 className="oldPrice">${item.data.product_price}</h3>
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
