import React from "react";
import "./AppointmentCard.css";
function AppointmentCard({ appointmentDetails }) {
  return (
    <div className="appointment-card-main">
      <h2>
        Appointment Date : <br />
        {appointmentDetails.appointmentDate}
      </h2>
      <h4>Slot : {appointmentDetails.slot}</h4>
      <p>Booking id : {appointmentDetails.id}</p>
      <p>User ld : {appointmentDetails.userId}</p>
    </div>
  );
}

export default AppointmentCard;
