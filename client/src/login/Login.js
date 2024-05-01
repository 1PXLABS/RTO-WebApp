import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAvatar from "../imgFiles/img_avatar2.png";
import "../Common.css";

function Login() {
  const [formData, setFormData] = useState({ uname: "", psw: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(".", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Redirect to dashboard or home page upon successful login
        navigate("/home");
      } else {
        // Handle error if login fails
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const nevigateToRegistration = () => {
    navigate("/registration");
  };

  return (
    <div className="success-page" style={{ padding: "30px 450px" }}>
      <h2>Login Form</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="imgcontainer">
            <img src={LoginAvatar} alt="Avatar" className="avatar" />
          </div>

          <div className="container_login">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              value={formData.uname}
              onChange={handleChange}
              required
            />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              value={formData.psw}
              onChange={handleChange}
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>
          </div>

          <div className="container_login">
            <span className="psw-one">
              Don't have an account yet ?{" "}
              <button type="button" onClick={nevigateToRegistration}>
                Register now
              </button>
            </span>

            <span className="psw">
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
