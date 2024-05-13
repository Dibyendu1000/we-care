import "./App.css";
import RegisterCoach from "./Components/RegisterComp/RegisterCoach";
import Home from "./Components/HomeComp/Home";
import Login from "./Components/LoginComp/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterUser from "./Components/RegisterComp/RegisterUser";
import LoginUserHome from "./Components/LoginHomeComp/LoginUserHome";
import AccountCard from "./Components/AccountCardComp/AccountCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login/coach" element={<Login type={"Coach"} />} />
        <Route path="login/user" element={<Login type={"User"} />} />
        <Route path="register/coach" element={<RegisterCoach />} />
        <Route path="register/user" element={<RegisterUser />} />
        <Route path="user/home" element={<LoginUserHome />} />
        <Route path="user/viewprofile" element={<AccountCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
