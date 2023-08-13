import React from "react";
import "./Account.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { loginSuccess, loginFailed } from "../../redux/authSlice"; // Import action creators
import store from "../../redux/store";

const Account = () => {
  const user = useSelector((state) => state.auth.login.currenUser);
  const token = localStorage.getItem("token");

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
    // TODO: Xử lý logic cập nhật thông tin người dùng
    // Ví dụ: mở một modal hoặc trang cập nhật thông tin
  };

  return (
    <div className="account">
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
        <Link to="/login">Login</Link>
      )}
    </div>
  );
};

export default Account;
