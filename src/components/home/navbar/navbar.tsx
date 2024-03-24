import "../../../assets/styles/navbar.scss";
import NavbarItems from "./item/navbar-items";
import LinkedIn from "../../../assets/icons/linkedIn-yellow.svg";
import Github from "../../../assets/icons/github-yellow.svg";
import { Dispatch } from "react";

interface Props {
  setMenuIsOpen?: Dispatch<React.SetStateAction<boolean>>;
}

function Navbar(props: Props) {
  return (
    <nav className="nav-bar flex  items-center">
      <h2 className="M">M</h2>

      <div className="flex">
        <NavbarItems text="Projects" sectionID="#projects-section" />
        <NavbarItems text="Experience" sectionID="#experience-section" />
        <NavbarItems text="Blogs" sectionID="#blogs-section" />
        <NavbarItems text="Libraries" sectionID="#libraries-section" />
      </div>

      <h2 className="M hide">M</h2>
      <h2 className="x-button" onClick={() => props.setMenuIsOpen?.(false)}>
        X
      </h2>

      <div className="social-media">
        <a href="https://github.com/Novak-Fenocchio" target="BLANK">
          <img src={Github} alt="github" className="hover" />
        </a>
        <a
          href="https://www.linkedin.com/in/martín-fenocchio-b507a31b2/"
          target="BLANK"
        >
          <img src={LinkedIn} alt="linkedIn" className="hover" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
