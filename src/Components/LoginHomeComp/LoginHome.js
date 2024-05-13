import { Navigate } from "react-router-dom";
import LoginUserHome from "./LoginUserHome";
import MySchedule from "../MyScheduleComp/MySchedule";

function LoginHome() {
  const userType = localStorage.getItem("userType");
  if (userType === "User") {
    return <LoginUserHome />;
  } else if (userType === "Coach") {
    return <MySchedule />;
  } else {
    return <Navigate to="/" />;
  }
}
export default LoginHome;
