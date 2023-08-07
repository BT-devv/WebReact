import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [inputs, setInputs] = useState({
    Username: "",
    Email: "",
    Password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Fix typo: use e.preventDefault() instead of e.prevenDefault()

    try {
      setIsSubmitting(true);
      const res = await axios.post(
        "http://localhost:3001/api-user/signup",
        inputs
      );
      console.log(res);
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Username"
          name="Username"
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="Email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="Password"
          onChange={handleChange}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>
        <p>This is an error!!!</p>
        <span>
          If you have an Account <Link to="/Login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
