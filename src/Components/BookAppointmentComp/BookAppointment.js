import React, { useState } from "react";
import "./BookAppointment.css";
import { registerBooking, updateBooking } from "../../Services/bookingApi";

function BookAppointment({ coachId, appointmentType, bookingId }) {
  console.log("bookingId", bookingId);
  const userId = localStorage.getItem("id");
  const initalValues = {
    appointmentDate: "",
    slot: "",
    userId: userId,
    coachId: coachId,
  };
  const [appointmentForm, setAppointmentForm] = useState(initalValues);
  const handleChange = (e) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value,
    });
    console.log(appointmentForm);
  };
  const handleAppointment = async () => {
    console.log(appointmentForm);
    await registerBooking(appointmentForm);
  };
  const handleReschedule = async () => {
    console.log(appointmentForm);
    await updateBooking(bookingId, appointmentForm);
  };
  return (
    <div className="book-appointment-form">
      <h2 className="book-appointment-header">
        {appointmentType === "new"
          ? "Proceed with your Appointment"
          : "Reschedule your Appointment"}
      </h2>
      <form className="book-appointment-body">
        <label htmlFor="appointment-date-field">Date of Appointment</label>
        <br />
        <input
          type="date"
          name="appointmentDate"
          className="appointment-date-field"
          onChange={handleChange}
        />
        <label className="slot">Preferred Slot</label>
        <div className="slot-options">
          <input
            type="radio"
            value="9 AM to 10 AM"
            className="9 AM to 10 AM"
            name="slot"
            onChange={handleChange}
          />
          <label htmlFor="9 AM to 10 AM">9 AM to 10 AM</label>
          <input
            type="radio"
            value="10 AM to 11 AM"
            className="10 AM to 11 AM"
            name="slot"
            onChange={handleChange}
          />
          <label htmlFor="10 AM to 11 AM">10 AM to 11 AM</label>
          <input
            type="radio"
            value="11 AM to 12 PM"
            className="11 AM to 12 PM"
            name="slot"
            onChange={handleChange}
          />
          <label htmlFor="11 AM to 10 PM">11 AM to 10 PM</label>
          <input
            type="radio"
            value="2 PM to 3 PM"
            className="2 PM to 3 PM"
            name="slot"
            onChange={handleChange}
          />
          <label htmlFor="2 PM to 3 PM">2 PM to 3 PM</label>
          <input
            type="radio"
            value="3 PM to 4 PM"
            className="3 PM to 4 PM"
            name="slot"
            onChange={handleChange}
          />
          <label htmlFor="3 PM to 4 PM">3 PM to 4 PM</label>
          <br />
          <input
            type="radio"
            value="4 PM to 5 PM"
            className="4 PM to 5 PM"
            name="slot"
            onChange={handleChange}
          />
          <label htmlFor="4 PM to 5 PM">4 PM to 5 PM</label>
        </div>
        <button
          className="confirm-appointment-btn"
          onClick={
            appointmentType === "new" ? handleAppointment : handleReschedule
          }
        >
          Confirm your Appointment
        </button>
      </form>
    </div>
  );
}

export default BookAppointment;
