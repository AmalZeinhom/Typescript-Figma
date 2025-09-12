import React from "react";
import JohnMark from "../assets/johnMark.jpg";
import Lara from "../assets/lara.jpg";
import Zeng from "../assets/zeng.jpg";
import "../Styles/Instructors.css"

const instructors = [
  {
    name: "John Mark",
    title: "Senior Developer",
    quote: "Education will be for you what you want it to be",
    img: JohnMark,
  },
  {
    name: "Lora Shrof",
    title: "Marketing Lead",
    quote: "Knowledge has to be improved, challenged, and increased constantly, or it vanishes",
    img: Lara,
  },
  {
    name: "Zeng Chin",
    title: "Data Analyst at Meta",
    quote: "To know what we know what we know, and to know that we do not know, that is true knowledge",
    img: Zeng,
  },
];

const Instructors: React.FC = () => {
  return (
    <section className="instructors" >
      <h2>Meet our instructors</h2>
      <div className="cards">
        {instructors.map((ins) => (
          <div className="card">
            <img src={ins.img} alt={ins.name} />
            <h3>{ins.name}</h3>
            <p className="ins-title">{ins.title}</p>
            <p className="quote">{ins.quote}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instructors;
