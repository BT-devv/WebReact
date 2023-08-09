import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { Button, Grid, TextField, MenuItem } from "@mui/material";
const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [selecQuantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const img = [
    "	https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455492/item/vngoods_69_455492.jpg?",
    "	https://image.uniqlo.com/UQ/ST3/vn/imagesgoods/455492/sub/vngoods_455492_sub7.jpg?",
  ];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const colors = [
    { name: "Brown", code: "#440000" },
    { name: "Navy", code: "#006400" },
    { name: "Gray", code: "#828282" },
    { name: "Black", code: "#333333" },
    { name: "White", code: "#FFFFFF" },
  ];

  return (
    <div className="productDetails">
      <div className="left">
        <div className="images">
          <img src={img[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={img[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>
        <div className="mainImg">
          <img src={img[selectImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Title</h2>
        <span className="price">$999</span>
        <p>
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
          amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt ut
          labore etdolore.
        </p>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <TextField
              select
              label="Size"
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              fullWidth
            >
              {sizes.map((size) => (
                <MenuItem key={size} value={size}>
                  {size}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={6}>
            <div className="color-buttons">
              {colors.map((color) => (
                <Button
                  key={color.name}
                  className={`color-button ${selectedColor === color.name ? "active" : ""}`}
                  style={{ backgroundColor: color.code }}
                  onClick={() => setSelectedColor(color.name)}
                ></Button>
              ))}
            </div>
            <div className="color-name">
              {selectedColor && `Selected: ${selectedColor}`}
            </div>
          </Grid>
        </Grid>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 0 ? 0 : prev - 1))}
          >
            -
          </button>
          {selecQuantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CARD
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon />
            ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>

      </div>
    </div>
  );
};

export default Product;
