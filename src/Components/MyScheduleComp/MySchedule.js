import React, { useEffect, useState } from "react";
import Navbar from "../NavBarComp/NavBar";
import Footer from "../FooterComp/Footer";
import { getAllBookingByCoachId } from "../../Services/bookingApi";
import ScheduleCard from "./ScheduleCard";
import "./MySchedule.css";

function MySchedule() {
  const id = localStorage.getItem("id");
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    loadSchedules();
    console.log(schedules);
  }, []);

  const loadSchedules = async () => {
    const res = await getAllBookingByCoachId(id);
    await setSchedules(res);
  };

  return (
    <div>
      <Navbar />
      <div className="scheduleCard">
        {schedules.map((schedule) => (
          <ScheduleCard scheduleDetails={schedule} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MySchedule;
