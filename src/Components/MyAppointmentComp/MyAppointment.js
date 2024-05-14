import React, { useEffect, useState } from "react";
import Navbar from "../NavBarComp/NavBar";
import Footer from "../FooterComp/Footer";
import { getAllBookingByUserId } from "../../Services/bookingApi";
import AppointmentCard from "./AppointmentCard";
import "./MyAppointment.css";
import { useNavigate } from "react-router-dom";

function MyAppointment() {
  const id = localStorage.getItem("id");
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate("/home");

  useEffect(() => {
    loadAppointments();
    console.log(appointments);
  }, []);

  const loadAppointments = async () => {
    const res = await getAllBookingByUserId(id);
    await setAppointments(res);
  };

  return (
    <div>
      <Navbar />
      {appointments && appointments.length > 0 ? (
        <div className="myAppointments">
          <div className="appointmentCard">
            {appointments.map((appointment) => (
              <AppointmentCard appointmentDetails={appointment} />
            ))}
          </div>
        </div>
      ) : (
        <div className="emptyAppointment">
          <h1 className="emptyAppointment-title">
            No planned appointments yet
          </h1>
        </div>
      )}
      <div className="my-appointment-btns">
        <button
          className="go-back-btn-appointment"
          onClick={() => navigate("/home")}
        >
          Go Back
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default MyAppointment;
