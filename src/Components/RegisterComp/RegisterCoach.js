import { useState } from "react";
import Footer from "../FooterComp/Footer";
import Navbar from "../NavBarComp/NavBar";
import "./RegisterCoach.css";
import coachLogo from "../../Assets/coach.png";
import { registerCoach } from "../../Services/coachApi";
import { useNavigate } from "react-router-dom";
import checkIfEmpty from "../../Services/validation";

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
      await registerCoach(user);
      navigate("/login/coach");
    } else {
      alert(emptyMessage);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-main-coach">
        <form className="register-form-coach">
          <div className="form-header-coach">
            <img src={coachLogo} alt="coachLogo" />
            <h3>Life Coach Profile</h3>
          </div>
          <div className="coach-name-register" id="coach-register-field">
            <lable for="name-coach">Name</lable>
            <br />
            <input
              type="text"
              className="name-coach"
              value={name}
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="coach-password-register" id="coach-register-field">
            <lable for="password-coach">Password</lable>
            <br />
            <input
              type="text"
              className="password-coach"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <div className="coach-dob-register" id="coach-register-field">
            <lable for="dob-coach">Date of Birth</lable>
            <br />
            <input
              type="date"
              className="dob-coach"
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
            <lable for="mobile-coach">Mobile Number</lable>
            <br />
            <input
              type="text"
              className="mobile-coach"
              name="mobileNumber"
              value={mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="coach-speciality-register" id="coach-register-field">
            <lable for="speciality-coach">Speciality</lable>
            <br />
            <input
              type="text"
              className="speciality-coach"
              name="speciality"
              value={speciality}
              onChange={handleChange}
            />
          </div>
          <div className="coach-button-register">
            <button className="register-coach" onClick={handleSubmit}>
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
