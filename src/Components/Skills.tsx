import React from "react";
import business from "../assets/business.jpg";
import prototyping from "../assets/prototyping.jpg";
import gamming from "../assets/gamming.jpg";
import "../Styles/Skills.css";
import { FaStar } from "react-icons/fa";

interface Skill {
  id: number;
  image: string;
  title: string;
  rating: number;
  duration: string;
  students: string;
  price: string;
}

const skills: Skill[] = [
  {
    id: 1,
    image: business,
    title: "All you need in Business Strategy",
    rating: 4.5,
    duration: "6 Weeks",
    students: "👥 1.5k Students",
    price: "30.5$",
  },
  {
    id: 2,
    image: prototyping,
    title: "The amazing hack in Figma prototyping",
    rating: 4.5,
    duration: "6 Weeks",
    students: "👥 1.5k Students",
    price: "30.5$",
  },
  {
    id: 3,
    image: gamming,
    title: "Introduction to basic game developement",
    rating: 4.5,
    duration: "6 Weeks",
    students: "👥 1.5k Students",
    price: "30.5$",
  },
];

const Skills: React.FC = () => {
  return (
    <section>
      <span className="skills_title">
        <h2>
          Learn a new skill in two hours
        </h2>
      </span>

      <div className="skills">
        <button className="nav-btn left"></button>
        {skills.map((item) => (
          <div className="skills-card">
            <img src={item.image} alt={item.title} />
            <div className="skills-info">
              <span className="skills-rating">
                <h3>{item.title}</h3>
                <FaStar className="star"/>
                 {item.rating}
              </span>
              <div className="skills-meta">
                <p>{item.duration}</p>
                <p>{item.students}</p>
              <p className="price">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
        <button className="nav-btn left"></button>
      </div>
    </section>
  );
};

export default Skills;
