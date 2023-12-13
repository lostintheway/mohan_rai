"use client";

import "./NavBar.css";
import "./BurgerMenu.css";
import MenuIcon from "../../assets/icons/menu.svg";
import { useEffect, useState } from "react";
import ScrollTo from "../ScrollTo";
import Image from "next/image";

const NavBar = () => {
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

  const handleBurgerClick = () => {
    setShowMenu(false);
  };

  return (
    <div className="nav-wrapper">
      <ul className="navbar">
        <ScrollTo title="HOME" targetId="home" />
        <ScrollTo title="WORKS" targetId="works" />
        <ScrollTo title="ABOUT ME" targetId="about ME" />

        <li>TRANSLATION</li>
        <li>OTHER WORK</li>
        <ScrollTo title="CONTACT" targetId="contact" />
      </ul>
      <button id="burger-menu" onClick={handleMenu}>
        <Image src={MenuIcon} alt="" width={40} height={40} />
      </button>

      <ul className={`nav-burger ${showMenu ? "show" : ""}`}>
        <ScrollTo onClick={handleBurgerClick} title="HOME" targetId="home" />

        <ScrollTo onClick={handleBurgerClick} title="WORKS" targetId="works" />
        <ScrollTo
          onClick={handleBurgerClick}
          title="ABOUT ME"
          targetId="aboutme"
        />

        <li>TRANSLATION</li>
        <li>OTHER WORK</li>
        <ScrollTo
          onClick={handleBurgerClick}
          title="CONTACT"
          targetId="contact"
        />
        {/* Burger menu items */}
      </ul>
    </div>
  );
};

export default NavBar;
