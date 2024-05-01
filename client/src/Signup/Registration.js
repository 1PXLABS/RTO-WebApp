import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Common.css";

function Registration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const signUp = async () => {
    try {
      const response = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 201) {
        navigate("/home");
        console.log("Registration successful");
      } else {
        // Handle errors
        console.log(response.statusText);
        console.error("Registration failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const backToLogIn = () => {
    navigate("/");
  };

  return (
    <div className="success-page" style={{ padding: "30px 450px" }}>
      <h1>Sign Up</h1>
      <div className="form">
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
          />

          <label>
            <input
              type="checkbox"
              checked={formData.remember}
              name="remember"
              onChange={handleChange}
            />
            Remember me
          </label>

          <p>
            By creating an account you agree to our{" "}
            <a href="#">Terms & Privacy</a>.
          </p>

          <div className="clearfix">
            <button type="button" className="cancelbtn" onClick={backToLogIn}>
              Cancel
            </button>
            <button type="button" className="signupbtn" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
