import React, { useState } from "react";
import "./UpdateProfile.scss"; // Import tệp SCSS cho component này
import axios from "axios";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    gender: "", // Giới tính
    birthdate: "",
    id: "",  // Ngày sinh
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Gửi yêu cầu cập nhật thông tin người dùng đến API
      const response = await axios.put(
        `http://localhost:3001/api-user/${formData.id}`, // Thay đổi đường dẫn API tùy theo tên API của bạn
        formData
      );
  
      // Kiểm tra xem cập nhật có thành công hay không
      if (response.status === 200) {
        // TODO: Hiển thị thông báo cập nhật thành công
        alert("Profile updated successfully!");
      } else {
        // TODO: Xử lý khi cập nhật thất bại, ví dụ hiển thị thông báo lỗi
        alert("Failed to update profile. Please try again later.");
      }
    } catch (error) {
      // Xử lý khi gặp lỗi trong quá trình gọi API
      console.error("Error updating profile:", error);
      // TODO: Xử lý lỗi, ví dụ hiển thị thông báo lỗi
      alert("An error occurred while updating profile. Please try again later.");
    }
  };
  

  return (
    <div className="update-profile">
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        {/* Các trường thông tin */}
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        {/* Trường giới tính */}
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Trường ngày sinh */}
        <div className="form-group">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>Save Changes</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
