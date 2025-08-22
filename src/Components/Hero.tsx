import React from "react";
import hero from "../assets/hero.jpg";
import avatar from "../assets/picture.jpg";

export const Hero: React.FC = () => {
  const avatars: string[] = [avatar, avatar, avatar, avatar, avatar];

  return (
    <div className="hero" style={{ margin: "16px 32px" }}>
      <div>
        <p className="hero-description">
          Quality <span>Education</span> By Any Means Necessary.
        </p>
        <button className="get-started">Get Started</button>
      </div>

      <div className="hero-cover">
        <img
          src={hero}
          alt="hero"
          className="img"
          style={{
            width: "431px",
            height: "508px",
            borderTopLeftRadius: "40px",
            borderTopRightRadius: "40px",
            borderBottomRightRadius: "100px",
            borderBottomLeftRadius: "40px",
          }}
        />

        <div className="overlay1">
          <p>
            Learn from best <span>instructors</span> around the globe
          </p>
          <div className="avatars">
            {avatars.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`avatar-${index}`}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            ))}
          </div>
        </div>

        <div className="overlay2">
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
    </div>
  );
};
