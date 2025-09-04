 import React from "react";
import marketing from "../assets/marketing.png";
import design from "../assets/design.jpg";
import programming from "../assets/programming.jpg";
import technology from "../assets/technology.jpg";

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
    <div>
      <div className="title">
        <p style={{ fontSize: "32px", fontWeight: "700" }}>
          Choose favourite course from top categories
        </p>
        <p style={{ fontSize: "24px", fontWeight: "400" }}>See All</p>
      </div>

      <div className="swiper-container">
        <button className="nav-btn left"></button>

        <div className="categories">
          {categories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="layer"></div>
              <img src={category.image} alt={category.alt} />
              <div className="category-title">{category.title}</div>
            </div>
          ))}
        </div>

        <button className="nav-btn right"></button>
      </div>
    </div>
  );
};

export default Courses;
