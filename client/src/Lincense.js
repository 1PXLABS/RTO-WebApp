import React, { useState } from "react";
import locationlogo from "./imgFiles/License Services/CA.png";
import LicenseLogo from "./imgFiles/License Services/LL4 (1).png";
import Drivinglogo from "./imgFiles/License Services/driving-icon.png";
import Renewallogo from "./imgFiles/License Services/renewal-icon.png";
import { Input } from "reactstrap";

function License() {
  const [state, setState] = useState("");
  const [submitFlag, setSubmitFlag] = useState(false);
  const stateDropdown = [
   
    {
      label: "Maharashtra",
      value: "Maharashtra",
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
                  <div className="invalid-feedback1">{"State is required"}</div>
                )}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>

      </div>
      <br />
      <div>
        <div className="container-fluid">
          <div className="col-sm-12">
            <div className="row" style={{ border: "3px solid #f1f1f1" }}>
              <h3 style={{ color: "#1c7eb9" }}>MOTOR VEHICLES DEPARTMENT</h3>

              <div className="col-sm-6">
                <a href="create/learner/license">
                  <div
                    className={`well license-well ${!state && "disabled-card"}`}
                  >
                    <img
                      src={LicenseLogo}
                      alt="Avatar"
                      className="avatar license-img"
                    />
                    <h4>Apply for Learner Licence</h4>
                  </div>
                </a>
              </div>

              <div className="col-sm-6">
                <a href="create/license">
                  <div
                    className={`well license-well ${!state && "disabled-card"}`}
                  >
                    <img
                      src={Drivinglogo}
                      alt="Avatar"
                      className="avatar license-img"
                    />

                    <h4>Apply For Driving License</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default License;
