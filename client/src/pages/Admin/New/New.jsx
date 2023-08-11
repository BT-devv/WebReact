import React, { useState } from "react";
import "./New.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";


const New = ({title, inputs}) => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [file, setFile] = useState(null);
  const [newProduct, setNewProduct] = useState({
    // Khởi tạo các giá trị mặc định cho sản phẩm mới
    name: "",
    description: "",
    price: 0,
    imageCover: "",
    sizeCover: "",
    colorCover: "",
    quantity: 0,
    status: "",
    CategoryId: 1,
    // ... và các thông tin khác của sản phẩm
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Gửi yêu cầu POST để tạo sản phẩm mới
    const formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);
    formData.append("price", newProduct.price);
    formData.append("imageCover", file);
    formData.append("sizeCover", newProduct.sizeCover);
    formData.append("colorCover", newProduct.colorCover);
    formData.append("quantity", newProduct.quantity);
    formData.append("status", newProduct.status);
    formData.append("CategoryId", newProduct.CategoryId);

    axios
      .post("http://localhost:3001/api-product", formData)
      .then((response) => {
        console.log("Sản phẩm đã được tạo thành công:", response.data);
        // Thực hiện các thao tác cần thiết sau khi tạo sản phẩm thành công,
        // ví dụ: chuyển hướng người dùng đến trang hiển thị danh sách sản phẩm.
      })
      .catch((error) => {
        console.error("Lỗi khi tạo sản phẩm:", error);
      });
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

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name}
                    value={newProduct[input.name]}
                    onChange={handleChange}
                  />
                </div>
              ))}

              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
