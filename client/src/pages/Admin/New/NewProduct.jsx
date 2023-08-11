import React, { useState } from "react";
import "./New.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";


const New = ({title}) => {
  const [file, setFile] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    gender: "",
    price: [],
    description: "",
    category_id: 1,
  });
  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    // Thêm các category khác
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const handleCategoryChange = (e) => {
    const selectedCategoryId = parseInt(e.target.value);
    setNewProduct({
      ...newProduct,
      category_id: selectedCategoryId,
    });
  };

  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("product", JSON.stringify(newProduct));

    try {
      const response = await axios.post(
        "http://localhost:3001/api-product",
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
                
              </div>
              <div className="formInput">
                <label>Category ID</label>
                <select
                    name="category_id"
                    value={newProduct.category_id}
                    onChange={handleCategoryChange}
                >
                {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
                ))}
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
              <div className="formInput">
                <label>Gender</label>
                <input
                  type="text"
                  placeholder="Gender"
                  name="gender"
                  value={newProduct.gender}
                  onChange={handleChange}
                />
              </div>

              <div className="formInput">
                <label>Price</label>
                <input
                  type="number"
                  placeholder="Colors"
                  name="colors"
                  value={newProduct.price}
                  onChange={handleChange}
                />
              </div>

              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={newProduct.description}
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

export default New;
