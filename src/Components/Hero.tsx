import React from "react";
import hero from "../assets/hero.jpg";
import avatar from "../assets/picture.jpg";
import "../Styles/Hero.css";

export const Hero: React.FC = () => {
  const avatars: string[] = [avatar, avatar, avatar, avatar, avatar];

  return (
    <section className="hero">
      <div>
        <h2 className="hero-description">
          Quality <span>Education</span> By Any Means Necessary.
        </h2>
        <button className="get-started">Get Started</button>
      </div>

      <div className="hero-cover">
        <img src={hero} alt="hero" className="img" />

        <div className="card-instructors">
          <p>
            Learn from best <span>instructors</span> around the globe
          </p>
          <div className="avatars">
            {avatars.map((img, index) => (
              <img key={index} src={img} alt={`avatar-${index}`} />
            ))}
          </div>
        </div>

        <div className="card-students">
          <span className="user">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              color="#09B451"
              width="12px"
              height="12px"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </span>
          <p className="rating">15K</p>
          <p className="quote">Amazing students around the globe</p>
        </div>

        <div className="frame"></div>
      </div>
    </section>
  );
};
