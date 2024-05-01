import React from "react";
import coach from "./coach.png";
import user from "./user.png";
import "./Cards.css";

function Cards({ type }) {
  return (
    <div className="card-main">
      <img className="logo" src={type == "User" ? user : coach} />
      <button className="login">Login as a {type}</button>
      <br />
      <button className="join">Join as a {type}</button>
    </div>
  );
}

export default Cards;
