import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const isFormValid =
    formData.username.trim() !== "" && formData.password.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      textAlign: 'center'
    }}>
      <form onSubmit={handleSubmit}>
        <p>React Question 9</p>
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <br /><br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />
        <button type="submit" disabled={!isFormValid}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
