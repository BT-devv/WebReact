import React, { useState } from "react";
import "./New.scss";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "axios";


const New = ({title}) => {
  const [file, setFile] = useState(null);
  const [newProductCategory, setNewProductCategory] = useState({
    name: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProductCategory({
      ...newProductCategory,
      [name]: value,
    });
  };

  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("category", JSON.stringify(newProductCategory));

    try {
      const response = await axios.post(
        "http://localhost:3001/api-category",
        formData
      );
      console.log("Loại sản phẩm đã được tạo thành công:", response.data);
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
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Tên loại sản phẩm"
                  name="name"
                  value={newProductCategory.name}
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
