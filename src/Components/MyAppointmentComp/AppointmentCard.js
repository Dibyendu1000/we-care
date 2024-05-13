import React from "react";
import "./AppointmentCard.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { deleteBooking } from "../../Services/bookingApi";
import BookAppointment from "../BookAppointmentComp/BookAppointment";
function AppointmentCard({ appointmentDetails }) {
  const cancelAppointment = async () => {
    await deleteBooking(appointmentDetails.id);
    window.location.reload();
  };

  return (
    <div className="appointment-card-main">
      <h2>
        Appointment Date : <br />
        {appointmentDetails.appointmentDate}
      </h2>
      <h4>Slot : {appointmentDetails.slot}</h4>
      <p>Booking id : {appointmentDetails.id}</p>
      <p>User ld : {appointmentDetails.userId}</p>
      <p>Coach ld : {appointmentDetails.coachId}</p>
      <Popup
        trigger={
          <button className="reschedule-appointment-btn">
            Reschedule Appointment
          </button>
        }
        modal
        nested
      >
        {() => (
          <BookAppointment
            coachId={appointmentDetails.coachId}
            appointmentType={"old"}
            bookingId={appointmentDetails.id}
          />
        )}
      </Popup>
      <br />
      <Popup
        trigger={
          <button className="cancel-appointment-btn">Cancel Appointment</button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="cancel-appointment-popup">
            <p> Are you sure you need to cancel the appointment? </p>
            <button className="yes-cancel-btn" onClick={cancelAppointment}>
              Yes
            </button>
            <button className="no-color-btn" onClick={close}>
              No
            </button>
          </div>
        )}
      </Popup>
    </div>
  );
}

export default AppointmentCard;
