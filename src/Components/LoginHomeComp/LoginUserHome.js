import { useEffect, useState } from "react";
import { getAllCoaches } from "../../Services/coachApi";
import CoachCard from "../AccountCardComp/CoachCard";
import Navbar from "../NavBarComp/NavBar";
import Footer from "../FooterComp/Footer";
import "./LoginUserHome.css";

function LoginUserHome() {
  const [availableCoaches, setAvailableCoaches] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchAllCoaches();
  }, []);

  const fetchAllCoaches = async () => {
    const res = await getAllCoaches();
    await setAvailableCoaches(res);
  };

  const isLike = (srchText, exactText) => {
    const tempSrchText = srchText.toLowerCase();
    const tempexactText = exactText.toLowerCase();
    console.log(tempSrchText, tempexactText);
    var matches = tempexactText.indexOf(tempSrchText) >= 0 ? true : false;
    return matches;
  };

  const searchCoaches = async () => {
    const res = await getAllCoaches();
    console.log(searchText);
    if (searchText.trim() !== "") {
      let matchedCoaches = [];
      for (let i = 0; i < res.length; i++) {
        if (isLike(searchText.trim(), res[i].speciality)) {
          matchedCoaches.push(res[i]);
        }
      }
      console.log(matchedCoaches);
      setAvailableCoaches(matchedCoaches);
    } else {
      console.log("empty", res);
      setAvailableCoaches(res);
    }
  };

  return (
    <>
      <Navbar />
      <div className="all-coaches-main-bk"></div>
      <div className="all-coaches-main">
        <div className="search-speciality-container">
          <input
            type="text"
            className="search-speciality"
            placeholder="Search for speciality"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              searchCoaches(e.target.value);
            }}
          />
        </div>

        <div className="all-coaches">
          {availableCoaches.map((coach) => (
            <CoachCard coachDetails={coach} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginUserHome;
