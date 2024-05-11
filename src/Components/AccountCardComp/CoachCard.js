import maleLogo from "../../Assets/male.png";
import femaleLogo from "../../Assets/female.png";
import "./CoachCard.css";

function CoachCard({ coachDetails }) {
  return (
    <div className="coach-card-main">
      <img
        src={coachDetails.gender == "F" ? femaleLogo : maleLogo}
        className="coach-gender-logo"
        alt={coachDetails.gender == "F" ? "femaleLogo" : "maleLogo"}
      />
      <h2 className="coach-card-header">{coachDetails.name}</h2>
      <h3>Coach Id: {coachDetails.id}</h3>
      <p>Mobile No: {coachDetails.mobileNumber}</p>
      <p>Speciality: {coachDetails.speciality}</p>
      <button className="book-appointment-btn">Book an Appointment</button>
    </div>
  );
}

export default CoachCard;
