import React from "react";
import "../Common.css";
import { useNavigate } from "react-router";

const SubmissionSuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="centered-content">
      <h2>Now you can give an exam at RTO Office.</h2>
      <p>Your submission has been received. Thank you!</p>
    </div>
  );
};

export default SubmissionSuccessPage;
