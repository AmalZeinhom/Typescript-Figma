import React from "react";


const Navbar: React.FC = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">WiSchool</div>
        <div className="header-nav">
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Instuctors</li>
            <li>Schedules</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="header-contactUs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            color="#6A0000"
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

          <button className="login">Login</button>
          <button className="register">Register</button>
        </div>
      </header>

      
    </>
  );
};

export default Navbar;
