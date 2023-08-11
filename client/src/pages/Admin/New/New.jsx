import React, { useState } from "react";
import "./New.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";


const New = ({title, inputs}) => {
  const [file, setFile] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    sizes: [],
    images: [],
    colors: [],
    quantity: 0,
    product_id: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const handleSizesChange = (e) => {
    const sizesInput = e.target.value;
    const sizesArray = sizesInput.split(",").map((size) => size.trim());
    setNewProduct({
      ...newProduct,
      sizes: sizesArray,
    });
  };

  const handleColorsChange = (e) => {
    const colorsInput = e.target.value;
    const colorsArray = colorsInput.split(",").map((color) => {
      const [colorName, codeColor] = color
        .split("(")
        .map((item) => item.replace(/[()]/g, "").trim());
      return { color: colorName, code_color: codeColor };
    });
    setNewProduct({
      ...newProduct,
      colors: colorsArray,
    });
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("detail", JSON.stringify(newProduct));

    try {
      const response = await axios.post(
        "http://localhost:3001/api-detail",
        formData
      );
      console.log("Sản phẩm đã được tạo thành công:", response.data);
      // Thực hiện các thao tác cần thiết sau khi tạo sản phẩm thành công,
      // ví dụ: chuyển hướng người dùng đến trang hiển thị danh sách sản phẩm.
    } catch (error) {
      console.error("Lỗi khi tạo sản phẩm:", error);
    }
  };

  return (
    <div className="new">
      <SidebarAdmin />
      <div className="newContainer">
        <NavbarAdmin />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                <label>Category:</label>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
              <option value="3">Category 3</option>
        {/* Thêm các tùy chọn khác tại đây */}
      </select>
              </div>

              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Tên sản phẩm"
                  name="name"
                  value={newProduct.name}
                  onChange={handleChange}
                />
              </div>
              {/* Thêm trường sizes input */}
              <div className="formInput">
                <label>Sizes</label>
                <input
                  type="text"
                  placeholder="Sizes"
                  name="sizes"
                  value={newProduct.sizes.join(", ")}
                  onChange={handleSizesChange}
                />
              </div>

              {/* Thêm trường colors input */}
              <div className="formInput">
                <label>Colors</label>
                <input
                  type="text"
                  placeholder="Colors"
                  name="colors"
                  value={newProduct.colors
                    .map((color) => `${color.color} (${color.code_color})`)
                    .join(", ")}
                  onChange={handleColorsChange}
                />
              </div>

              {/* Thêm trường quantity input */}
              <div className="formInput">
                <label>Quantity</label>
                <input
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  value={newProduct.quantity}
                  onChange={handleChange}
                />
              </div>

              {/* Thêm trường product_id input */}
              <div className="formInput">
                <label>Product ID</label>
                <input
                  type="number"
                  placeholder="Product ID"
                  name="product_id"
                  value={newProduct.product_id}
                  onChange={handleChange}
                />
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
