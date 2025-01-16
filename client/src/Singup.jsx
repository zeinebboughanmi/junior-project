import React, { useState } from "react";
import axios from "axios";

const Signup = ({ changeView }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:3001/api/user/add",
        {
          Email: credentials.email,
          Password: credentials.password,
        }
      );
      if (response.status === 200 || response.status === 201) {
        console.log("User registered successfully:", response.data);
        alert("Registration successful!");
        changeView("login"); 
      }
    } catch (error) {
      
      if (error.response) {
        console.error("Registration failed:", error.response.data);
        alert(`Registration failed: ${error.response.data.message || "Unknown error"}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response from the server. Please try again.");
      } else {
        console.error("Error during registration:", error.message);
        alert("An error occurred during registration. Please try again.");
      }
    }
  };

  return (
    <div className="auth-form">
      <h1>Signup</h1>
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
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={credentials.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account?{" "}
        <button onClick={() => changeView("login")}>Login</button>
      </p>
    </div>
  );
};

export default Signup;