import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss";
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
      img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      title: "Quan Dai",
      desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit.",
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 667.0,
    },
    {
      id: 1,
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/462618/item/goods_07_462618.jpg?width=320",
      img2: "https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/457612/item/vngoods_09_457612.jpg?width=320",
      title: "Quan Dai",
      desc: "Lorem ipsum dolor sit amet conse ctetur adipisicing elit.",
      decription: "AirSense Quan dai",
      oldPrice: 999.0,
      newPrice: 667.0,
    },
  ];
  return (
    <div className="Cart">
      <h1>Prodcuts in your Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x {item.newPrice} </div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
