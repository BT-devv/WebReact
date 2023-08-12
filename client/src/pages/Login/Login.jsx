import React, { useState } from "react";
import axios from "axios";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Sử dụng useNavigate thay cho useHistory

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api-user/login",
        {
          username,
          password,
        }
      );
      if (response.status === 200) {
        const token = response.data.token;

        // Lưu token vào local storage
        localStorage.setItem("token", token);

        // Thực hiện chuyển hướng sau khi đăng nhập thành công
        navigate("/"); // Chuyển hướng đến trang chủ (homepage)
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="auth">
      <h1>Welcome to Our ShoppingPage</h1>
      <h3>Please Login</h3>
      <form onSubmit={handleEmailLogin}>
        <div className="mb-2 input-container">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className="mb-2 input-container">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="button-container">
          <button type="submit" className="email-button">
            Login
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <span>
          If you don't have an Account <Link to="/Register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
