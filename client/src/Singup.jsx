import React, { useState } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    
    changeView("login");
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