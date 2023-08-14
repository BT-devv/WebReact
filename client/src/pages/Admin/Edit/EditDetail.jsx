import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import axios from "axios";

const EditDetail = () => {
  const { id } = useParams();
  const [file, setFile] = useState(null);
  const [detail, setDetail] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api-detail/${id}`)
      .then((response) => {
        setDetail(response.data.data.detail);
        setName(response.data.data.detail.name);
      })
      .catch((error) => {
        console.error("Error fetching detail:", error);
      });
  }, [id]);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api-detail/${id}`, { name })
      .then((response) => {
        // Handle successful update, redirect, or show a success message
      })
      .catch((error) => {
        console.error("Error updating category:", error);
      });
  };

  return (
    <div className="new">
      <SidebarAdmin />
      <div className="newContainer">
        <NavbarAdmin />
        <div className="top">
         
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
            <form onSubmit={handleUpdate}>
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
                  placeholder="Tên chi tiết sản phẩm"
                  name="name"
                  
                />
              </div>
              <div className="formInput">
                <label>Price</label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  type="text"
                  placeholder="Mô tả"
                  name="description"
                
                />
              </div>

              <div className="formInput">
                <label>Sizes</label>
                <input
                  type="text"
                  placeholder="Sizes"
                  name="sizes"
                 
                />
              </div>

              {/* Thêm trường colors input */}
              <div className="formInput">
                <label>Colors</label>
                <input
                  type="text"
                  placeholder="Colors"
                  name="colors"
                  
                />
              </div>

              {/* Thêm trường quantity input */}
              <div className="formInput">
                <label>Quantity</label>
                <input
                  type="number"
                  placeholder="Quantity"
                  name="quantity"
                  
                />
              </div>

              {/* Thêm trường product_id input */}
              <div className="formInput">
                <label>Product ID</label>
                <input
                  type="number"
                  placeholder="Product ID"
                  name="product_id"
                  
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

export default EditDetail;
