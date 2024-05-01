// import { useNavigate } from "react-router-dom";
import "./Common.css";
import DrivingLicense from "./imgFiles/License Services/v-learners-license-services.png";
import DrivingSchool from "./imgFiles/License Services/v-driving-school-license.png";
import OtherServices from "./imgFiles/License Services/v-driving-license.png";


function openYoutubeVideo() {
  // URL of the YouTube video
  var youtubeVideoUrl = "https://youtu.be/nsXLdEUMs-I?si=s2bPa5nQSmUqYXou";

  window.open(youtubeVideoUrl, "_blank");
}



function LicenseServices() {
  //   const navigate = useNavigate();

  //   const backToLogIn = () => {
  //     navigate("/");
  //   };
  return (
    <div>
      <div className="container-fluid">
        <div className="col-sm-12">
          <div className="row" style={{ border: "3px solid #f1f1f1" }}>
            <h3>License Related Services</h3>

            <div className="col-sm-4">
              <a href="/license">
                <div className="well">
                  <img src={DrivingLicense} alt="Avatar" className="avatar" />
                  <h4>Drivers/ Learners License</h4>
                  <p>Apply for License</p>
                </div>
              </a>
            </div>

            <div className="col-sm-4">
              <div className="well">
                <img src={OtherServices} alt="Avatar" className="avatar" />

                <h4>Want some help ? </h4>
                <p>
                  Watch the video to know how to apply for a license
                </p>
                <button className="btn btn-primary" onClick={openYoutubeVideo}>Watch Video</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LicenseServices;
