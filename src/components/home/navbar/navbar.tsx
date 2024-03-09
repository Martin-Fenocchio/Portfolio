import "../../../assets/styles/navbar.scss";
import NavbarItems from "./item/navbar-items";
import LinkedIn from "../../../assets/icons/linkedIn-yellow.svg";
import Github from "../../../assets/icons/github-yellow.svg";

function Navbar() {
  return (
    <nav className="flex  items-center">
      <h2 className="M">M</h2>

      <div className="flex">
        <NavbarItems text="Experience" />
        <NavbarItems text="Projects" />
        <NavbarItems text="Blogs" />
        <NavbarItems text="Libraries" />
      </div>

      <h2 className="M hide">M</h2>

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
