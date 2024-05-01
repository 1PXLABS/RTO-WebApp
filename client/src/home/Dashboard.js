// import { useNavigate } from "react-router-dom";
import "../Common.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import LicenseServices from "../LicenseServices";
import VehicleServices from "../vehicle/VehicleServices";

function Dashboard() {
  return (
    <div className="dashboard">
      <br />
      <br />
      <br />
      <br />
      {/* <br /> */}
      <div>
        <LicenseServices />
      </div>
      <br></br>
      <div>
        <VehicleServices />
      </div>
    </div>
  );
}

export default Dashboard;
