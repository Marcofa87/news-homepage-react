import { useState } from "react";

import "./navbar.css";
import openIcon from "@/images/icon-menu.svg";
import closeIcon from "@/images/icon-menu-close.svg";

function NavBar() {
  const [isOpen, setIsOPen] = useState(false);

  const toggleMenu = () => {
    setIsOPen(!isOpen);
  };
  return (
    <div className="navbar">
      <img
        src={isOpen ? closeIcon : openIcon}
        alt="menu icon"
        onClick={toggleMenu}
        className="hamburger-icon"
      />
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li>Home</li>
        <li>New</li>
        <li>Popular</li>
        <li>Trending</li>
        <li>Categories</li>
      </ul>
    </div>
  );
}

export default NavBar;
