import React from "react";


import Portrait from '../assets/portrait.jpg';

const CTA: React.FC = () => {
  return (
    <section className="cta">
      <div className="cta-left">

         <img src= {Portrait} alt="Instructor" style={{objectFit: "contain"}}/>
        <div className="layer" style={{position: "absolute"}}></div>

      </div>
      <div className="cta-right">
        <h2>
          You Don’t Have To See The Whole Staircase <br /> Just Take The First Step
        </h2>
        <p>
          Amet In A Suspendisse Convallis Eget, Amet In A Suspendisse Convallis EgetAmet In A
        </p>
        <div className="buttons">
          <button className="btn-green">Get Started</button>
          <button className="btn-outline">Place a call</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
