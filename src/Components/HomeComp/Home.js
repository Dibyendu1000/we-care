import Cards from "../CardsComp/Cards";
import Footer from "../FooterComp/Footer";
import Navbar from "../NavBarComp/NavBar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home-main">
        <h1 className="Moto">We are at the heart of appropriate care</h1>
        <div className="cards">
          <div className="coach-card">
            <Cards type={"Coach"} />
          </div>
          <div className="user-card">
            <Cards type={"User"} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
