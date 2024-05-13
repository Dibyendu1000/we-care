import React from "react";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("userType");
    navigate("/");
  };
  const handleAppointment = () => {
    if (userType === "Coach") {
      navigate("/schedules");
    }
  };
  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <div>
      <ul className="navbar-class">
        <li className="company-name-header">
          <h2> WeCare </h2>
        </li>
        {userType === "User" || userType === "Coach" ? (
          <li className="logout-btn" onClick={() => handleLogout()}>
            <h3> Logout </h3>
          </li>
        ) : null}
        <li className="Contact">
          <h3> Call us : 080 2233447 </h3>
        </li>
        {userType === "User" || userType === "Coach" ? (
          <li className="my-appointments" onClick={() => handleAppointment()}>
            <h3> {userType == "User" ? "My Appointments" : "My Schedules"} </h3>
          </li>
        ) : null}
        {userType === "User" || userType === "Coach" ? (
          <li className="view-profile" onClick={() => handleProfile()}>
            <h3> View Profile </h3>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Navbar;
