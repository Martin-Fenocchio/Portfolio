import Arrow from "../../../assets/icons/arrow-down.svg";
import Github from "../../../assets/icons/github.svg";
import Linkedin from "../../../assets/icons/linkedin.svg";
import Email from "../../../assets/icons/email.svg";
import SocialMediaItem from "./social-media/social-media-item";
import "../../../assets/styles/about-me.scss";

function AboutMeSection() {
  return (
    <div className="about-me-section  h-full gradient">
      <div className="h-[90%] about_me_section flex flex-column items-center  ">
        <div className="width-container">
          <h1 className="text-white">
            Hola, <span>soy Martín.</span>
          </h1>
          <h2 className="text-white">Flutter & React dev</h2>
          <p className="text-white">
            <span className="green">
              {" "}
              <strong>+3 años</strong>
            </span>{" "}
            de experiencia. Desarrollador de apps y páginas Web.{" "}
            <span className="green">Especializado</span> en{" "}
            <span className="green">
              <strong>Flutter</strong> y <strong>React JS</strong>
            </span>
            . Creador de{" "}
            <span className="yellow">
              librerías <strong>open source</strong>
            </span>{" "}
            y <span className="yellow">apasionado</span> de la tecnología.
          </p>

          <div className="grid-media flex gap-3 mt-7">
            <SocialMediaItem
              text="GitHub"
              icon={Github}
              url="https://github.com/Novak-Fenocchio"
            />
            <SocialMediaItem
              text="LinkedIn"
              icon={Linkedin}
              url="https://www.linkedin.com/in/martín-fenocchio-b507a31b2/"
            />
            <SocialMediaItem
              text="fenomartin6@gmail.com"
              icon={Email}
              url="mailto:fenomartin6@gmail.com"
            />
          </div>

          <a
            href="#experience-section"
            className="experience flex items-center animate-bounce hover"
          >
            Experiencia <img src={Arrow} alt="icon" className="w-10" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
