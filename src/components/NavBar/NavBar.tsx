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
        <ScrollTo title="FILMOGRAPHY" targetId="filmography" />
        <ScrollTo title="PUBLICATIONS" targetId="publications" />
        <ScrollTo title="AWARDS" targetId="awards" />
        <ScrollTo title="ABOUT ME" targetId="aboutme" />

        <ScrollTo title="CONTACT" targetId="contact" />
      </ul>
      <button id="burger-menu" onClick={handleMenu}>
        <Image src={MenuIcon} alt="" width={40} height={40} />
      </button>

      <ul className={`nav-burger ${showMenu ? "show" : ""}`}>
        <ScrollTo onClick={handleBurgerClick} title="HOME" targetId="home" />

        <ScrollTo
          onClick={handleBurgerClick}
          title="FILMOGRAPHY"
          targetId="filmography"
        />
        <ScrollTo
          onClick={handleBurgerClick}
          title="AWARDS"
          targetId="awards"
        />
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
