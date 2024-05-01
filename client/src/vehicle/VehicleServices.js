import React, { useState } from "react";
import "../Common.css";
import DrivingLicense from "../imgFiles/Vehicles Services/v-new-vehicle-registration.png";
import OnlineTestAppointemet from "../imgFiles/Vehicles Services/v-permit-services.png";
import OtherServices from "../imgFiles/Vehicles Services/v-vehicle-registration.png";

function VehicleServices() {
  const [state, setState] = useState("");

  function openYoutubeVideo() {
    // URL of the YouTube video
    var youtubeVideoUrl =
      "https://play.google.com/store/apps/details?id=com.pavansgroup.rtoexam&pli=1u";

    window.open(youtubeVideoUrl, "_blank");
  }

  return (
    <div>
      <div className="container-fluid">
        <div className="col-sm-12">
          <div className="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>Vehicles Related Services</h3>

            <div className="col-sm-6">
              <a href="create/registration">
                <div className={`well ${!state && "disabled-card"}`}>
                  <img src={DrivingLicense} alt="Avatar" className="avatar" />

                  <h4>Vehicle Registration</h4>
                  <p>One click for all the vehicle related citizen services</p>
                </div>
              </a>
            </div>

            <div className="col-sm-6">
              <div className="well">
                <img src={OtherServices} alt="Avatar" className="avatar" />

                <h4>Practice test</h4>
                <p> Practice to get better knowledge</p>
                <button className="btn btn-primary" onClick={openYoutubeVideo}>
                  Take Test
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleServices;
