import { useState } from "react";
import Footer from "../FooterComp/Footer";
import Navbar from "../NavBarComp/NavBar";
import userLogo from "../../Assets/user.png";
import { registerUser } from "../../Services/userApi";
import "./RegisterUser.css";

function RegisterUser() {
  const initalValues = {
    name: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    mobileNumber: "",
    email: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  };
  const [user, setUser] = useState(initalValues);
  const {
    name,
    password,
    dateOfBirth,
    mobileNumber,
    email,
    pincode,
    city,
    state,
    country,
  } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted", user);
    await registerUser(user);
  };
  return (
    <>
      <Navbar />
      <div className="register-main">
        <form className="register-form">
          <div className="form-header">
            <img src={userLogo} alt="userLogo" />
            <h3>User Profile</h3>
          </div>
          <div className="user-name-register" id="user-register-field">
            <lable for="name">Name</lable>
            <br />
            <input
              type="text"
              className="name"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="user-password-register" id="user-register-field">
            <lable for="password">Password</lable>
            <br />
            <input
              type="text"
              className="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="user-dob-register" id="user-register-field">
            <lable for="dob">Date of Birth</lable>
            <br />
            <input
              type="date"
              className="dob"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <div className="user-gender-register" id="user-register-field">
            <lable for="gender">Gender</lable>
            <br />
            <label for="male">Male</label>
            <input
              type="radio"
              className="male"
              name="gender"
              value="M"
              onChange={handleChange}
            />
            <label for="female">Female</label>
            <input
              type="radio"
              className="female"
              name="gender"
              value="F"
              onChange={handleChange}
            />
          </div>
          <div className="user-mobile-register" id="user-register-field">
            <lable for="mobile">Mobile Number</lable>
            <br />
            <input
              type="text"
              className="mobile"
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="user-email-register" id="user-register-field">
            <lable for="email">Email</lable>
            <br />
            <input
              type="text"
              className="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="user-pincode-register" id="user-register-field">
            <lable for="pincode">Pincode</lable>
            <br />
            <input
              type="text"
              className="pincode"
              name="pincode"
              value={pincode}
              onChange={handleChange}
            />
          </div>
          <div className="user-city-register" id="user-register-field">
            <lable for="city">City</lable>
            <br />
            <input
              type="text"
              className="city"
              name="city"
              value={city}
              onChange={handleChange}
            />
          </div>
          <div className="user-state-register" id="user-register-field">
            <lable for="state">State</lable>
            <br />
            <input
              type="text"
              className="state"
              name="state"
              value={state}
              onChange={handleChange}
            />
          </div>
          <div className="user-country-register" id="user-register-field">
            <lable for="country">Country</lable>
            <br />
            <input
              type="text"
              className="country"
              name="country"
              value={country}
              onChange={handleChange}
            />
          </div>
          <div className="user-button-register">
            <button className="register" onClick={handleSubmit}>
              Register
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default RegisterUser;
