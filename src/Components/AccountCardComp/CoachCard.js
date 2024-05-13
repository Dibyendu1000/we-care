import maleLogo from "../../Assets/male.png";
import femaleLogo from "../../Assets/female.png";
import "./CoachCard.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import BookAppointment from "../BookAppointmentComp/BookAppointment";

function CoachCard({ coachDetails }) {
  return (
    <div className="coach-card-main">
      <img
        src={coachDetails.gender === "F" ? femaleLogo : maleLogo}
        className="coach-gender-logo"
        alt={coachDetails.gender === "F" ? "femaleLogo" : "maleLogo"}
      />
      <h2 className="coach-card-header">{coachDetails.name}</h2>
      <h3>Coach Id: {coachDetails.id}</h3>
      <p>Mobile No: {coachDetails.mobileNumber}</p>
      <p>Speciality: {coachDetails.speciality}</p>
      <Popup
        trigger={
          <button className="book-appointment-btn">Book an Appointment</button>
        }
        modal
        nested
      >
        {() => (
          <BookAppointment
            coachId={coachDetails.id}
            appointmentType={"new"}
            bookingId={null}
          />
        )}
      </Popup>
    </div>
  );
}

export default CoachCard;
