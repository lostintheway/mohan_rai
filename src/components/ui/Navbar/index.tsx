import "./Navbar.css";
import "./BurgerMenu.css";
import MenuIcon from "../../../../public/menu.svg";
import { useEffect, useState } from "react";
import ScrollTo from "../../ScrollTo";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 780) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="nav-wrapper">
      <ul className="navbar">
        {/* <li>HOME</li> */}

        <ScrollTo title="FICTION" targetId="fiction" />
        <ScrollTo title="NONFICTION" targetId="nonfiction" />

        <li>TRANSLATION</li>
        <li>OTHER WORK</li>
        <ScrollTo title="CONTACT" targetId="contact" />
      </ul>
      <button id="burger-menu" onClick={handleMenu}>
        <img src={MenuIcon} alt="" width={40} />
      </button>

      <ul className={`nav-burger ${showMenu ? "show" : ""}`}>
        <ScrollTo title="HOME" targetId="home" />

        <ScrollTo title="FICTION" targetId="fiction" />
        <ScrollTo title="NONFICTION" targetId="nonfiction" />

        <li>TRANSLATION</li>
        <li>OTHER WORK</li>
        <ScrollTo title="CONTACT" targetId="contact" />
        {/* Burger menu items */}
      </ul>
    </div>
  );
};

export default Navbar;
