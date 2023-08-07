import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const handleGoogleLogin = () => {
    // Implement Google login logic here
    console.log("Logging in with Google...");
  };

  const handleFacebookLogin = () => {
    // Implement Facebook login logic here
    console.log("Logging in with Facebook...");
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");
    // Implement email login logic here using 'username' and 'password'
    console.log("Logging in with email:", username, password);
  };

  return (
    <div className="auth">
      <h1>Welcome to Our ShoppingPage</h1>
      <h3>Please Login</h3>
      <form onSubmit={handleEmailLogin}>
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <div className="button-container">
          <button type="submit" className="email-button">
            Login with Email
          </button>
          <div className="social-buttons">
            <button onClick={handleGoogleLogin} className="google-button">
              Login with Google
            </button>
            <button onClick={handleFacebookLogin} className="facebook-button">
              Login with Facebook
            </button>
          </div>
        </div>
        <p>This is an error!!!</p>
        <span>
          If you don't have an Account <Link to="/Register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
