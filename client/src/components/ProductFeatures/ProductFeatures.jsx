import {React, useState, useEffect} from "react";
import "./ProductFeatures.scss";
import Card from "../Card/Card.jsx";
import axios from "axios";
const ProductFeatures = ({ type }) => {
  const [productDetailData, setProductDetailData] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dữ liệu sản phẩm từ máy chủ
    axios.get("http://localhost:3001/api-detail")
      .then(response => {
        if (Array.isArray(response.data)) {
          setProductDetailData(response.data); // Cập nhật dữ liệu sản phẩm
        } else {
          console.error("Dữ liệu không phải là mảng:", response.data);
        }
      })
      .catch(error => {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      });
  }, []);
  // const data = [
  //   {
  //     id: 1,
  //     img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
  //     img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
  //     decription: "AirSense Quan dai",
  //     oldPrice: 999.0,
  //     newPrice: 777.0,
  //   },
  //   {
  //     id: 2,
  //     img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
  //     img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
  //     decription: "AirSense Quan dai",
  //     oldPrice: 999.0,
  //     newPrice: 777.0,
  //   },
  //   {
  //     id: 3,
  //     img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
  //     img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
  //     decription: "AirSense Quan dai",
  //     oldPrice: 999.0,
  //     newPrice: 777.0,
  //   },
  //   {
  //     id: 4,
  //     img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
  //     img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
  //     decription: "AirSense Quan dai",
  //     oldPrice: 999.0,
  //     newPrice: 777.0,
  //   },
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
  // ];

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
      {productDetailData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductFeatures;
