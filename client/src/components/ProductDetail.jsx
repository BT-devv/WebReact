import React from "react";
import Card from "./Card.jsx";
const ProductDetail = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
      img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 777.0,
    },
    {
      id: 2,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
      img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 777.0,
    },
    {
      id: 3,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
      img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 777.0,
    },
    {
      id: 4,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
      img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 777.0,
    },
    // {
    //   id: 5,
    //   img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
    //   img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
    //   decription: "AirSense Quan dai",
    //   oldPrice: 999.0,
    //   newPrice: 777.0,
    // },
    // {
    //   id: 6,
    //   img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
    //   img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
    //   decription: "AirSense Quan dai",
    //   oldPrice: 999.0,
    //   newPrice: 777.0,
    // },
    // {
    //   id: 7,
    //   img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
    //   img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
    //   decription: "AirSense Quan dai",
    //   oldPrice: 999.0,
    //   newPrice: 777.0,
    // },
  ];

  return (
    <div className="productDetail">
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

export default ProductDetail;