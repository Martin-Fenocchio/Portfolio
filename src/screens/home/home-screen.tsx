import AboutMeSection from "../../components/home/aboutMe/aboutMe-section";
import BlogsSection from "../../components/home/blogs/blogs-section";
import ExperienciesSection from "../../components/home/experiences/experiencies-section";
import LibrariesSection from "../../components/home/libraries/libraries-section";
import Navbar from "../../components/home/navbar/navbar";

function HomeScreen() {
  return (
    <div className="f-width h-full">
      <div className="line" />
      <Navbar />
      <AboutMeSection />
      <ExperienciesSection />
      <LibrariesSection />
      <BlogsSection />
    </div>
  );
}

export default HomeScreen;
