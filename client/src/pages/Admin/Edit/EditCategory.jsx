import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../../../components/NavbarAdmin/NavbarAdmin";
import axios from "axios";

const EditCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState({});
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api-category/${id}`)
      .then((response) => {
        setCategory(response.data.data.category);
        setName(response.data.data.category.name);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/api-category/${id}`, { name })
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
          
          <div className="right">
            <form onSubmit={handleUpdate}>

              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Tên loại sản phẩm"
                  name="name"
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              

              
              <button type="submit">Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
