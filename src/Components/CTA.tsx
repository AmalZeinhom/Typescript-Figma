import React from "react";
import Portrait from "../assets/portrait.jpg";
import "../Styles/CTA.css"; 

const CTA: React.FC = () => {
  return (
    <>
      <section className="cta">
        
        <div className="cta-left">
          <img src={Portrait} alt="Instructor" />
          <div className="layer"></div>
        </div>
        <div className="cta-right">
          <h2>
            You Don’t Have To See The Whole Staircase <br /> Just Take The First
            Step
          </h2>
          <p>
            Amet In A Suspendisse Convallis Eget, Amet In A Suspendisse Convallis
            EgetAmet In A
          </p>
          <div className="buttons">
            <a href="#" className="btn-green">
              Get Started
            </a>
            <a href="#" className="btn-outline">
              Place a call
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;