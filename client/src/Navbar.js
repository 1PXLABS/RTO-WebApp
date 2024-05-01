import "./Common.css";
import { useState, useEffect } from "react";
import headerLogo from "./imgFiles/header-logo-modified.png";
import { Input, Form, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const storedTab = localStorage.getItem("activeTab");
    if (storedTab) {
      setActiveTab(storedTab);
    }
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    localStorage.setItem("activeTab", tabName);
  };

  return (
    <div>
      <ul style={{ zIndex: "1" }}>
        <li>
          <img src={headerLogo} style={{ width: "90px" }} />
        </li>
        <li>
          <Link
            className={activeTab === "home" ? "active" : ""}
            to="/home"
            onClick={() => handleTabClick("home")}
          >
            Home
          </Link>
        </li>
      
        <li>
          <Link
            className={activeTab === "contact" ? "active" : ""}
            to="/contact"
            onClick={() => handleTabClick("contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className={activeTab === "about" ? "active" : ""}
            to="/about"
            onClick={() => handleTabClick("about")}
          >
            About
          </Link>
        </li>
        
        <li>
          <button
             
             
            className="btn btn-primary"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
