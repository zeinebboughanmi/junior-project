import React, { useState } from "react";
import axios from "axios";

const Login = ({ changeView, handleLogin }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:3001/api/user/login", {
        Email: credentials.email,
        Password: credentials.password,
      });

      const userData = response.data;

      handleLogin(userData);

      console.log("Login successful:", userData);
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="auth-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <button onClick={() => changeView("signup")}>Signup</button>
      </p>
    </div>
  );
};

export default Login;