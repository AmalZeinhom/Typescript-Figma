import React from "react";

import instructors from "../assets/instructors.jpg";
import frontEnd from "../assets/frontEnd.jpg";
import ux from "../assets/ux.jpg";
import photography from "../assets/photography.jpg";
import analysis from "../assets/analysis.jpg";
import hacking from "../assets/computer.jpg";

interface Course {
  id: number;
  image: string;
  title: string;
  rating: number;
  duration: string;
  students: string;
  price: string;
}

const courses: Course[] = [
  {
    id: 1,
    image: instructors,
    title: "Learn Marketing From Top Instructors.",
    rating: 4.5,
    duration: "6 weeks",
    students: "👥 1.5k Students",
    price: "30.5$",
  },
  {
    id: 2,
    image: frontEnd,
    title: "Front-End Development Is Not Hard As You Think",
    rating: 4.5,
    duration: "6 weeks",
    students: "👥 1.5k Students",
    price: "30.5$",
  },
  {
    id: 3,
    image: ux,
    title: "Everything You Need To Know In UX",
    rating: 4.5,
    duration: "6 weeks",
    students: "👥 1.5k Students",
    price: "30.5$",
  },
  {
    id: 4,
    image: photography,
    title: "Learn Photography With Ease",
    rating: 4.5,
    duration: "6 weeks",
    students: "👥 1.5k Students",
    price: "30.5$",
  },
  {
    id: 5,
    image: analysis,
    title: "Be A Pro In Data Analysis",
    rating: 4.5,
    duration: "6 weeks",
    students: "👥 1.5k Students",
    price: "30.5$",
  },
  {
    id: 6,
    image: hacking,
    title: "Ethical Hacking Is Not Hard As You Think",
    rating: 4.5,
    duration: "6 weeks",
    students: "👥 1.5k Students",
    price: "30.5$",
  },
];

const MostPopular: React.FC = () => {
  return (
    <div>
      <div className="title">
        <p style={{ fontSize: "32px", fontWeight: 600 }}>
          Most Popular Courses
        </p>
        <button className="sort-btn">Sort By</button>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <div className="rating">⭐ {course.rating}</div>
              <div className="course-meta">
                <span>{course.duration}</span>
                <span>{course.students}</span>
              </div>
              <div className="price">{course.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
