import "../../../assets/styles/burder-menu.scss";
import BurgerIcon from "../../../assets/icons/hamburger-menu.svg";
import { slide as Menu } from "react-burger-menu";
import { useState } from "react";
import Navbar from "../../home/navbar/navbar";

function BurgerMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div className="burger-menu-container">
      <Menu
        isOpen={menuIsOpen}
        onStateChange={(state) => setMenuIsOpen(state.isOpen)}
        customBurgerIcon={
          <img
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            src={BurgerIcon}
            className="burger-menu-icon"
            alt="burger-button"
          />
        }
        right
        width={"70vw"}
        styles={{
          bmMenuWrap: {
            top: "0",
            overflow: "hidden",
            backgroundColor: "transparent",
          },
        }}
      >
        <Navbar setMenuIsOpen={setMenuIsOpen} />
      </Menu>
    </div>
  );
}

export default BurgerMenu;
