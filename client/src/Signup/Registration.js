import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import "../Common.css";
import { db } from "../firebase/firebase";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const backToLogIn = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password === "" || formData.repeatPassword === "") {
      alert("Please fill in both password fields");
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      alert("Passwords do not match");
      return;
    }

    const colRef = collection(db, "Signup");

    try {
      await addDoc(colRef, {
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        conpass: formData.repeatPassword,
        number: formData.number,
      });
      console.log("Signup successful");
      window.location.href = "/home"; // Redirect after signup
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="success-page" style={{ padding: "30px 450px" }}>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} id="signup-form">
        <div className="container_login">
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="fullName">
            <b>Full Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            id="name"
          />

          <label htmlFor="number">
            <b>Number</b>
          </label>
          <input
            type="text"
            placeholder="Enter Number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
            id="number"
          />

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
            id="email"
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
            id="password"
          />

          <label htmlFor="repeatPassword">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            required
            id="conpass"
          />

          <p style={{ color: "white" }}>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <div className="clearfix">
            <button type="button" className="cancelbtn" onClick={backToLogIn}>
              Cancel
            </button>
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Registration;