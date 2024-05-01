import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAvatar from "../imgFiles/img_avatar2.png";
import { doSignInWithEmailAndPassword } from "../firebase/auth";
import "../Common.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit =  () => {
    // e.preventDefault();
    // await doSignInWithEmailAndPassword(formData.email, formData.password);
    navigate("/home");
  };

  const nevigateToRegistration = () => {
    navigate("/");
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
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
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
