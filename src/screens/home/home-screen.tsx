import AboutMeSection from "../../components/home/aboutMe/aboutMe-section";
import Navbar from "../../components/home/navbar/navbar";

function HomeScreen() {
  return (
    <div className="f-width h-full">
      <div className="line" />
      <Navbar />
      <AboutMeSection />
    </div>
  );
}

export default HomeScreen;
