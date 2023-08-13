import React, { useEffect } from "react";
import "./ProductFeatures.scss";
import Card from "../Card/Card.jsx";

const ProductFeatures = ({ type }) => {
  const data = [
    {
      id: 1,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 777.0,
    },
    {
      id: 1,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 777.0,
    },
    {
      id: 1,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 777.0,
    },
    {
      id: 1,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 777.0,
    },
  ];

  useEffect(() => {});
  return (
    <div className="productFeature">
      <div className="top">
        <h1>{type} product</h1>
        <p>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut
          labore etdolore.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
