import maleLogo from "../../Assets/male.png";
import femaleLogo from "../../Assets/female.png";
import "./AccountCard.css";
import Navbar from "../NavBarComp/NavBar";
import Footer from "../FooterComp/Footer";
import { useNavigate } from "react-router-dom";

function AccountCard() {
  const accountDetails = {
    title: "Sample Name",
    details: {
      "Date of Birth": "1/1/1996",
      Mobile: "1234567890",
      Speciality: "Confidence Issues",
    },
    gender: "M",
  };
  const userType = "User";
  const navigate = useNavigate();
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
            <button
              className="go-back-btn"
              onClick={() => navigate("/user/home")}
            >
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
