import { useState } from "react";
import Footer from "../FooterComp/Footer";
import Navbar from "../NavBarComp/NavBar";
import "./RegisterCoach.css";
import coach from "../../Assets/coach.png";
import { registerCoach } from "../../Services/coachApi";

const initalValues = {
  name: "",
  password: "",
  dateOfBirth: "",
  gender: "",
  mobileNumber: "",
  speciality: "",
};

function RegisterCoach() {
  const [user, setUser] = useState(initalValues);
  const { name, password, dateOfBirth, mobileNumber, speciality } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted", user);
    await registerCoach(user);
  };

  return (
    <>
      <Navbar />
      <div className="register-main">
        <form className="register-form">
          <div className="form-header">
            <img src={coach} alt="coachLogo" />
            <h3>Life Coach Profile</h3>
          </div>
          <div className="coach-name-register" id="coach-register-field">
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
          <div className="coach-password-register" id="coach-register-field">
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
          <div className="coach-dob-register" id="coach-register-field">
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
          <div className="coach-gender-register" id="coach-register-field">
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
          <div className="coach-mobile-register" id="coach-register-field">
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
          <div className="coach-speciality-register" id="coach-register-field">
            <lable for="speciality">Speciality</lable>
            <br />
            <input
              type="text"
              className="speciality"
              name="speciality"
              value={speciality}
              onChange={handleChange}
            />
          </div>
          <div className="coach-button-register">
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
export default RegisterCoach;
