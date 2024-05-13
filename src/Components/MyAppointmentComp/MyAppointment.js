import React, { useEffect, useState } from "react";
import Navbar from "../NavBarComp/NavBar";
import Footer from "../FooterComp/Footer";
import { getAllBookingByUserId } from "../../Services/bookingApi";
import AppointmentCard from "./AppointmentCard";
import "./MyAppointment.css";

function MyAppointment() {
  const id = localStorage.getItem("id");
  const [appointments, setAppointments] = useState([]);

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
      <div className="appointmentCard">
        {appointments.map((appointment) => (
          <AppointmentCard appointmentDetails={appointment} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MyAppointment;
