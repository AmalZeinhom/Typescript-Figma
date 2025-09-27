import React from "react";
import Portrait from "../assets/portrait.jpg";
import styles from "../Styles/CTA.module.css";

const CTA: React.FC = () => {
  return (
    <>
      <section className={styles.cta}>
        <div className={styles.layer}></div>
        <div className={styles.container}>
          <div className={styles.ctaLeft}>
            <img src={Portrait} alt="Instructor" />
          </div>
          <div className={styles.ctaRight}>
            <h2>
              You Don’t Have To See The Whole Staircase <br /> Just Take The
              First Step
            </h2>
            <p>
              Amet In A Suspendisse Convallis Eget, Amet In A Suspendisse
              Convallis EgetAmet In A
            </p>
            <div className={styles.buttons}>
              <a href="#" className={styles.btnGreen}>
                Get Started
              </a>
              <a href="#" className={styles.btnOutline}>
                Place a call
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
