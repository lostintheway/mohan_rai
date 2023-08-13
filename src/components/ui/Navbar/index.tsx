import "./Navbar.css";
import "./BurgerMenu.css";
import MenuIcon from "../../../../public/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="nav-wrapper">
      <ul className="navbar">
        <li>HOME</li>
        <li>FICTION</li>
        <li>NONFICTION</li>
        <li>TRANSLATION</li>
        <li>OTHER WORK</li>
        <li>CONTACT</li>
      </ul>
      <button id="burger-menu" onClick={handleMenu}>
        <img src={MenuIcon} alt="" width={40} />
      </button>

      <ul className={`nav-burger ${showMenu ? "show" : ""}`}>
        <li>HOME</li>
        <li>FICTION</li>
        <li>NONFICTION</li>
        <li>TRANSLATION</li>
        <li>OTHER WORK</li>
        <li>CONTACT</li>
        {/* Burger menu items */}
      </ul>
    </div>
  );
};

export default Navbar;
