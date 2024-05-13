import { useState } from "react";
import Footer from "../FooterComp/Footer";
import Navbar from "../NavBarComp/NavBar";
import userLogo from "../../Assets/user.png";
import { registerUser } from "../../Services/userApi";
import "./RegisterUser.css";
import { useNavigate } from "react-router-dom";
import checkIfEmpty from "../../Services/validation";

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
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted", user);
    const emptyMessage = checkIfEmpty(user);
    if (emptyMessage.length === 0) {
      await registerUser(user);
      navigate("/login/user");
    } else {
      alert(emptyMessage);
    }
  };
  return (
    <>
      <Navbar />
      <div className="register-user-container">
        <div className="register-main-user">
          <form className="register-form-user">
            <div className="form-header-user">
              <img src={userLogo} alt="userLogo" />
              <h3>User Profile</h3>
            </div>
            <div className="user-name-register" id="user-register-field">
              <lable htmlFor="name-user">Name</lable>
              <br />
              <input
                type="text"
                className="name-user"
                value={name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="user-password-register" id="user-register-field">
              <lable htmlFor="password-user">Password</lable>
              <br />
              <input
                type="text"
                className="password-user"
                name="password-user"
                value={password}
                onChange={handleChange}
              />
            </div>
            <div className="user-dob-register" id="user-register-field">
              <lable htmlFor="dob-user">Date of Birth</lable>
              <br />
              <input
                type="date"
                className="dob-user"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="user-gender-register" id="user-register-field">
              <lable htmlFor="gender">Gender</lable>
              <br />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                className="male"
                name="gender"
                value="M"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                className="female"
                name="gender"
                value="F"
                onChange={handleChange}
              />
            </div>
            <div className="user-mobile-register" id="user-register-field">
              <lable htmlFor="mobile-user">Mobile Number</lable>
              <br />
              <input
                type="text"
                className="mobile-user"
                name="mobileNumber"
                value={mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="user-email-register" id="user-register-field">
              <lable htmlFor="email">Email</lable>
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
              <lable htmlFor="pincode">Pincode</lable>
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
              <lable htmlFor="city">City</lable>
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
              <lable htmlFor="state">State</lable>
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
              <lable htmlFor="country">Country</lable>
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
              <button className="register-user" onClick={handleSubmit}>
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegisterUser;
