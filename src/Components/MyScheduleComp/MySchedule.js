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
    console.log(schedules, schedules.length);
  }, []);

  const loadSchedules = async () => {
    const res = await getAllBookingByCoachId(id);
    await setSchedules(res);
  };

  return (
    <div>
      <Navbar />
      {schedules && schedules.length > 0 ? (
        <div className="scheduleCard">
          {schedules.map((schedule) => (
            <ScheduleCard scheduleDetails={schedule} />
          ))}
        </div>
      ) : (
        <div className="emptySchedule">
          <h1 className="emptySchedule-title"> No planned schedules yet </h1>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default MySchedule;
