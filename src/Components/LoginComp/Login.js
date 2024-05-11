import { useState } from "react";
import coach from "../../Assets/coach.png";
import user from "../../Assets/user.png";
import Footer from "../FooterComp/Footer";
import Navbar from "../NavBarComp/NavBar";
import "./Login.css";
import * as coachApi from "../../Services/coachApi";
import * as userApi from "../../Services/userApi";
import checkIfEmpty from "../../Services/validation";
import { useNavigate } from "react-router-dom";

function Login({ type }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emptyMessage = checkIfEmpty({ id, password });
    if (emptyMessage.length !== 0) {
      alert(emptyMessage);
    }

    if (type === "User") {
      const userDetails = await userApi.getUserById(id);
      if (userDetails && userDetails.password === password) {
        console.log(userDetails);
        navigate("/userhome");
      } else {
        console.log("Invalid");
      }
    } else {
      const coachDetails = await coachApi.getCoachById(id);
      if (coachDetails && coachDetails.password === password) {
        console.log(coachDetails);
      } else {
        console.log("Invalid");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-card">
        <div className="card-header">
          <img
            src={type === "User" ? user : coach}
            className="login-logo"
            alt="login-logo"
          />
          <h2>Login As {type === "User" ? "User" : "Life Coach"}</h2>
        </div>
        <div className="input-fields">
          <input
            type="text"
            className="login-id"
            placeholder={type === "User" ? "User Id" : "Coach Id"}
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <input
            type="text"
            className="login-password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={handleSubmit}>
          Login
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Login;
