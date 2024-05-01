import React, { useState } from "react";
import './Common.css';

function InputPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    gender: "",
    dateOfBirth: "",
    rto: "",
    pincode: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform further actions like validation, API calls, etc.
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Input Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
          placeholder="Enter Full Name"
            type="text"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            placeholder="Enter Username"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>RTO:</label>
          <input
          placeholder="Enter RTO"
            type="text"
            name="rto"
            value={formData.rto}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Pincode:</label>
          <input
            placeholder="Enter Pincode"
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="main-card">
          <div className="card">
          <h2>Learner Licence Certificate</h2>
          <p><strong>Full Name:</strong> {formData.fullname}</p>
          <p><strong>Gender:</strong> {formData.gender}</p>
          <p><strong>Date of Birth:</strong> {formData.dateOfBirth}</p>
          <p><strong>RTO:</strong> {formData.rto}</p>
          <p><strong>Pincode:</strong> {formData.pincode}</p>
          <p><strong>LLnumber : </strong> MH/2024 </p>
        </div>
        </div>
        
      )}
    </div>
  );
}

export default InputPage;
