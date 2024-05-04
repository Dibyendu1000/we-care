import React from "react";
//import coach from "./coach.png";
//import user from "./user.png";
import coach from "../../Assets/coach.png";
import user from "../../Assets/user.png";
import "./Cards.css";
import { useNavigate } from "react-router-dom";

function Cards({ type }) {
  const navigate = useNavigate();
  const goToLogin = (e) => {
    e.preventDefault();
    if (type === "Coach") navigate("/login/coach");
    else navigate("/login/user");
  };
  const goToRegister = (e) => {
    e.preventDefault();
    if (type === "Coach") navigate("/register/coach");
  };

  return (
    <div className="card-main">
      <img className="logo" src={type === "User" ? user : coach} />
      <button className="login" onClick={goToLogin}>
        Login as a {type}
      </button>
      <br />
      <button className="join" onClick={goToRegister}>
        Join as a {type}
      </button>
    </div>
  );
}

export default Cards;
