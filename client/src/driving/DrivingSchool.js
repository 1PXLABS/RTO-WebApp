import React, { useState } from "react";
import locationlogo from "../imgFiles/License Services/CA.png";
import LicenseLogo from "../imgFiles/License Services/LL4 (1).png";
import Drivinglogo from "../imgFiles/License Services/driving-icon.png";
import Renewallogo from "../imgFiles/License Services/renewal-icon.png";
import { Input } from "reactstrap";

function DrivingSchool() {
  const [state, setState] = useState("");
  const [submitFlag, setSubmitFlag] = useState(false);
  const stateDropdown = [
    {
      label: "Andhra Pradesh",
      value: "Andhra Pradesh",
    },
    {
      label: "Arunachal Pradesh",
      value: "Arunachal Pradesh",
    },
    {
      label: "Assam",
      value: "Assam",
    },
    {
      label: "Bihar",
      value: "Bihar",
    },
    {
      label: "Chhattisgarh",
      value: "Chhattisgarh",
    },
    {
      label: "Goa",
      value: "Goa",
    },
    {
      label: "Gujarat",
      value: "Gujarat",
    },
    {
      label: "Haryana",
      value: "Haryana",
    },
    {
      label: "Himachal Pradesh",
      value: "Himachal Pradesh",
    },
    {
      label: "Jharkhand",
      value: "Jharkhand",
    },
    {
      label: "Karnataka",
      value: "Karnataka",
    },
    {
      label: "Kerala",
      value: "Kerala",
    },
    {
      label: "Madhya Pradesh",
      value: "Madhya Pradesh",
    },
    {
      label: "Maharashtra",
      value: "Maharashtra",
    },
    {
      label: "Manipur",
      value: "Manipur",
    },
    {
      label: "Meghalaya",
      value: "Meghalaya",
    },
    {
      label: "Mizoram",
      value: "Mizoram",
    },
    {
      label: "Nagaland",
      value: "Nagaland",
    },
    {
      label: "Odisha",
      value: "Odisha",
    },
    {
      label: "Punjab",
      value: "Punjab",
    },
    {
      label: "Rajasthan",
      value: "Rajasthan",
    },
    {
      label: "Sikkim",
      value: "Sikkim",
    },
    {
      label: "Tamil Nadu",
      value: "Tamil Nadu",
    },
    {
      label: "Telangana",
      value: "Telangana",
    },
    {
      label: "Tripura",
      value: "Tripura",
    },
    {
      label: "Uttar Pradesh",
      value: "Uttar Pradesh",
    },
    {
      label: "Uttarakhand",
      value: "Uttarakhand",
    },
    {
      label: "West Bengal",
      value: "West Bengal",
    },
    {
      label: "Andaman and Nicobar Islands",
      value: "Andaman and Nicobar Islands",
    },
    {
      label: "Chandigarh",
      value: "Chandigarh",
    },
    {
      label: "Dadra and Nagar Haveli and Daman and Diu",
      value: "Dadra and Nagar Haveli and Daman and Diu",
    },
    {
      label: "Lakshadweep",
      value: "Lakshadweep",
    },
    {
      label: "Delhi",
      value: "Delhi",
    },
    {
      label: "Puducherry",
      value: "Puducherry",
    },
  ];

  return (
    <div className="license-screen-css">
      <br />
      <br />
      <br />
      <br />
      <div className="container-fluid">
        <div className="col-sm-12">
          <div className="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>License Related Services</h3>

            <div className="col-sm-12">
              <div className="well">
                <h4 className="divider">
                  Please select the State from where the service is to be taken
                </h4>
                {/* <div className="col-sm-12"> */}
                <Input
                  type="select"
                  name="state"
                  id="state"
                  placeholder="select State"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  className={`inputs
                        ${submitFlag && !state ? "is-invalid1" : ""}`}
                >
                  <option value="">Please Select State</option>
                  {stateDropdown.map((item) => (
                    <option value={item.value}>{item.label}</option>
                  ))}
                </Input>
                {submitFlag && !state && (
                  <div className="invalid-feedback1">
                    {"Category is required"}
                  </div>
                )}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="container-fluid">
        <div class="col-sm-12">
          <div class="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3 style={{ color: "#1c7eb9" }}>MOTOR VEHICLES DEPARTMENT</h3>

            <div class="col-sm-6">
              <a href="/license/test">
                <div class="well license-well">
                  <img
                    src={Renewallogo}
                    alt="Avatar"
                    className="avatar license-img"
                  />
                  <h4>Test for Driving Licence</h4>
                </div>
              </a>
            </div>

            <div class="col-sm-6">
              <div class="well license-well">
                <img
                  src={locationlogo}
                  alt="Avatar"
                  className="avatar license-img"
                />

                <h4>Apply for Driving License Renewal</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DrivingSchool;
