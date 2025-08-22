import React from "react";
import business from "../assets/business.jpg";
import prototyping from "../assets/prototyping.jpg";
import gamming from "../assets/gamming.jpg";

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
  }
]

const Skills : React.FC = () => {
  return (
  <div>
    <div className="title">
        <p style={{ fontSize: "32px", fontWeight: 600 }}>
          Learn a new skill in two hours
        </p>
      </div>

      <div className="courses-container">
        {skills.map((item) => (
          <div className="course-card">
            <img src={item.image} alt={item.title} />
            <div className="course-info">
              <h3>{item.title}</h3>
              <div className="rating">⭐ {item.rating}</div>
              <div className="course-meta">
                <span>{item.duration}</span>
                <span>{item.students}</span>
              </div>
              <div className="price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
  </div>
);
};

export default Skills;
