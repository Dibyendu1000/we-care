import React from "react";
import "./ScheduleCard.css";
function ScheduleCard({ scheduleDetails }) {
  return (
    <div className="schedule-card-main">
      <h2>
        Appointment Date : <br />
        {scheduleDetails.appointmentDate}
      </h2>
      <h4>Slot : {scheduleDetails.slot}</h4>
      <p>Booking id : {scheduleDetails.id}</p>
      <p>User ld : {scheduleDetails.userId}</p>
    </div>
  );
}

export default ScheduleCard;
