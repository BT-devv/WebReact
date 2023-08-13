import React from "react";
import Card from "../Card/Card";
import "./List.scss";
const List = () => {
  const data = [
    {
      id: 2,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 667.0,
    },
    {
      id: 2,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 667.0,
    },
    {
      id: 2,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 667.0,
    },
    {
      id: 2,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 667.0,
    },
    {
      id: 2,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 667.0,
    },
    {
      id: 2,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 667.0,
    },
    {
      id: 2,
      img: [
        "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
        "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      ],
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 667.0,
    },
  ];
  return (
    <div className="list">
      <div className="imgage">
        <img
          src="	https://im.uniqlo.com/global-cms/spa/res8585f0e5286b4d55b085bba5e74c6635fr.jpg"
          alt=""
        />
      </div>
      <div className="case">
        {data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
