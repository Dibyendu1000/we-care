import "./App.css";
import RegisterCoach from "./Components/RegisterComp/RegisterCoach";
import Home from "./Components/HomeComp/Home";
import Login from "./Components/LoginComp/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUser from "./Components/RegisterComp/RegisterUser";
import AccountCard from "./Components/AccountCardComp/AccountCard";
import LoginHome from "./Components/LoginHomeComp/LoginHome";
import MySchedule from "./Components/MyScheduleComp/MySchedule";
import MyAppointment from "./Components/MyAppointmentComp/MyAppointment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login/coach" element={<Login type={"Coach"} />} />
        <Route path="login/user" element={<Login type={"User"} />} />
        <Route path="register/coach" element={<RegisterCoach />} />
        <Route path="register/user" element={<RegisterUser />} />
        <Route path="home" element={<LoginHome />} />
        <Route path="profile" element={<AccountCard />} />
        <Route path="schedules" element={<MySchedule />} />
        <Route path="appointments" element={<MyAppointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
