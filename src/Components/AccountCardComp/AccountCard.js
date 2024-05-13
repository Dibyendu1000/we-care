import maleLogo from "../../Assets/male.png";
import femaleLogo from "../../Assets/female.png";
import "./AccountCard.css";
import Navbar from "../NavBarComp/NavBar";
import Footer from "../FooterComp/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "../../Services/userApi";
import { getCoachById } from "../../Services/coachApi";

function AccountCard() {
  const dummyDetails = {
    title: "Sample Name",
    details: {
      "Date of Birth": "1/1/1996",
      Mobile: "1234567890",
      Speciality: "Confidence Issues",
    },
    gender: "M",
  };
  const [accountDetails, setAccountDetails] = useState(dummyDetails);
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  useEffect(() => {
    loadAccountDetails();
  }, []);

  const loadAccountDetails = async () => {
    if (userType === "User") {
      const res = await getUserById(id);
      await setAccountDetails({
        title: res.name,
        details: {
          "Date of Birth": res.dateOfBirth,
          Email: res.email,
          Mobile: res.mobileNumber,
          Address: res.city + ", " + res.state + ", " + res.country,
          Pincode: res.pincode,
        },
        gender: res.gender,
      });
    } else if (userType === "Coach") {
      const res = await getCoachById(id);
      await setAccountDetails({
        title: "Coach Id : " + id,
        details: {
          "Date of Birth": res.dateOfBirth,
          Mobile: res.mobileNumber,
          Speciality: res.speciality,
        },
        gender: res.gender,
      });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Navbar />
      <div className="account-card-back">
        <div className="account-card-main">
          <img
            src={accountDetails.gender === "F" ? femaleLogo : maleLogo}
            className="account-gender-logo"
            alt={accountDetails.gender === "F" ? "femaleLogo" : "maleLogo"}
          />
          <h2 className="account-card-header">{accountDetails.title}</h2>
          {Object.keys(accountDetails.details).map((key, index) => (
            <p key={index}>{key + ": " + accountDetails.details[key]}</p>
          ))}
          {userType === "User" ? (
            <button className="go-back-btn" onClick={() => navigate("/home")}>
              Go Back
            </button>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AccountCard;
