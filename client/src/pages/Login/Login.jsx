import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>
          <Link className="link" to="/">
            Login
          </Link>
        </button>
        <p>This is erro!!!</p>
        <span>
          If you don't have Account <Link to="/Register">Regrister</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
