import React from "react";
import marketing from "../assets/marketing.png";
import design from "../assets/design.jpg";
import programming from "../assets/programming.jpg";
import technology from "../assets/technology.jpg";
import "../Styles/Cources.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Type for a single category
interface Category {
  image: string;
  alt: string;
  title: string;
}

const categories: Category[] = [
  { image: marketing, alt: "Marketing", title: "Marketing" },
  { image: design, alt: "Design", title: "Design" },
  { image: programming, alt: "Programming", title: "Programming" },
  { image: technology, alt: "Technology", title: "Technology" },
];

const Courses: React.FC = () => {
  return (
    <section>
      <div className="title">
        <h2>Choose favourite course from top categories</h2>
        <a href="#" className="see_all">
          See All
        </a>
      </div>

      <div className="swiper-container">
        <button className="nav-btn left">
          <FaChevronLeft />
        </button>

        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <div className="layer"></div>
            <img src={category.image} alt={category.alt} />
            <div className="category-title">{category.title}</div>
          </div>
        ))}

        <button className="nav-btn right">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Courses;
