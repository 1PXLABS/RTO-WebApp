import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./App.css";
import SubmissionSuccessPage from "./learning/succesmessgae";
import Login from "./login/Login";
import Registration from "./Signup/Registration";
import Dashboard from "./home/Dashboard";
import Navbar from "./Navbar";
import Contact from "./Contact";
import About from "./About";
import License from "./Lincense";
import DrivingSchool from "./driving/DrivingSchool";
import Appointment from "./mcq/Appointment";
import LearnerLicense from "./learning/LearnerLicense";
import ApplyOfLicense from "./ApplyForLicense";
import VehicleRegisterForm from "./vehicle/VehicleRegisterForm";
import InputPage from "./generatelciiense";
import VehicleFormSuccessPage from "./vehicle/congrudtion";
function NavbarWithLocation() {
  const location = useLocation();
  const isNavbarVisible = !["/", "/registration"].includes(location.pathname);

  return isNavbarVisible && <Navbar />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarWithLocation />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Dashboard />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/message/success"
            element={<SubmissionSuccessPage />}
          />
          <Route
            exact
            path="/message/vehsuccess"
            element={<VehicleFormSuccessPage />}
          />
          <Route exact path="/generate/license" element={<InputPage />} />
          <Route exact path="/" element={<Registration />} />
          <Route exact path="/license" element={<License />} />
          <Route exact path="/driving/school" element={<DrivingSchool />} />
          <Route exact path="/license/test" element={<Appointment />} />
          <Route
            exact
            path="create/learner/license"
            element={<LearnerLicense />}
          />
          <Route exact path="create/license" element={<ApplyOfLicense />} />
          <Route
            exact
            path="create/registration"
            element={<VehicleRegisterForm />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



