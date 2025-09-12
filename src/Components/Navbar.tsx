import React, { useState } from "react";
import "../Styles/Navbar.css";
import { FaList } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <h1 className="header-logo">WiSchool</h1>
        <span className="header-toggle" onClick={toggleMenu}>
          <FaList/>
        </span>
        <div className={`header-nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Instuctors</a></li>
            <li><a href="#">Schedules</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className={`header-contactUs ${isOpen ? "open" : ""}`}>
          <button className="searchBtn">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="18.71px"
            height="18.71px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          </button>
          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;