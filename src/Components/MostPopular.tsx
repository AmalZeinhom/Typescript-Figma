import React from "react";

import instructors from "../assets/instructors.jpg";
import frontEnd from "../assets/frontEnd.jpg";
import ux from "../assets/ux.jpg";
import photography from "../assets/photography.jpg";
import analysis from "../assets/analysis.jpg";
import hacking from "../assets/computer.jpg";
import "../Styles/MostPopular.css"
import Select from "react-select";
import { FaStar } from "react-icons/fa";


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

const options = [
  {value: "marketing", label: "Marketing"},
  {value: "front-end", label: "Front-End"},
  {value: "ux", label: "UX"},
  {value: "photography", label: "photography"},
  {value: "data analysis", label: "Data Analysis"},
  {value: "hacking", label: "Hacking"},
];

const MostPopular: React.FC = () => {
  return (
    <section>
      <div className="course-title">
        <h2>
          Most Popular Courses
        </h2>
        <div>
          <Select options={options} placeholder= "Sort By" className="sort-btn" classNamePrefix= "react-select" />
        </div>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <span className="rating"> 
              <h3>{course.title}</h3>
                <FaStar className="star"/> 
                {course.rating}
                </span>
              <div className="course-meta">
                <p>{course.duration}</p>
                <p>{course.students}</p>
              <p className="price">{course.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostPopular;
