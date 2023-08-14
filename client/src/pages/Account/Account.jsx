import React from "react";
import "./Account.scss";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginSuccess, loginFailed } from "../../redux/authSlice"; // Import action creators
import store from "../../redux/store";
const Account = () => {
  const user = useSelector((state) => state.auth.login.currenUser);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    // id người dùng được lưu trong JWT token dưới dạng payload.userId
    const userId = JSON.parse(atob(token.split(".")[1])).id;

    // Gửi token lên máy chủ để xác thực và lấy thông tin người dùng
    axios
      .get(`http://localhost:3001/api-user/${userId}`)
      .then((response) => {
        // Cập nhật thông tin người dùng và vai trò vào Redux store
        store.dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        console.error("Failed to authenticate user:", error);
        // Xóa token và thông tin người dùng nếu xác thực thất bại
        localStorage.removeItem("token");
        store.dispatch(loginFailed());
      });
  }

  const handleUpdateUserInfo = () => {
    navigate("/update-profile");
  };

  return (
    <div className="account">
      <div className="profile-header">
        <h1>Your Profile</h1>
      </div>
      <div className="profile-details">
        {user ? (
          <>
            <p>
              <span>Fullname:</span> {user.fullname}
            </p>
            <p>
              <span>Email:</span> {user.email}
            </p>
            <p>
              <span>Phone:</span> {user.phone}
            </p>
            <p>
              <span>Address:</span> {user.adress}
            </p>
            <button onClick={handleUpdateUserInfo}>Update Info</button>
          </>
        ) : (
          <Link to="/login" className="link">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Account;
