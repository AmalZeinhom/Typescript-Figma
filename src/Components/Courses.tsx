import React from "react";
import marketing from "../assets/marketing.png";
import design from "../assets/design.jpg";
import programming from "../assets/programming.jpg";
import technology from "../assets/technology.jpg";
import styles from "../Styles/cources.module.css";
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
      <div className={styles.title}>
        <h2>Choose favourite course from top categories</h2>
        <a href="#" className= {styles.seeAll}>
          See All
        </a>
      </div>

      <div className= {styles.swiperContainer}>
        <button className= {`${styles.navBtn} ${styles.left}`}>
          <FaChevronLeft />
        </button>

        {categories.map((category, index) => (
          <div className= {styles.categoryCard} key={index}>
            <div className= {styles.layer}></div>
            <img src={category.image} alt={category.alt} />
            <div className={styles.categoryTitle}>{category.title}</div>
          </div>
        ))}

        <button className={`${styles.navBtn} ${styles.right}`}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Courses;
