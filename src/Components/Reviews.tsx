import React from "react";
import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";
import "../Styles/Reviews.css";

interface List {
  id: number;
  coverPhoto: string;
  name: string;
  title: string;
}

const reviews: List[] = [
  {
    id: 1,
    coverPhoto: cover1,
    name: "Mohh Jumah",
    title: "Senior Developer",
  },
  {
    id: 2,
    coverPhoto: cover2,
    name: "John Mark",
    title: "Data Analyst",
  },
];

const Reviews: React.FC = () => {
  return (
    <section className="reviews">
      <div className="rev-title">
        <h2>Reviews</h2>
      </div>

      <div className="students-reviews">
        <div className="header">
          <h3>
            What Our <br /> <span style={{ color: "#09B451" }}>Students</span>{" "}
            Say <br /> About Us
          </h3>
          <div className="controls">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>

        <div className="content">
          {reviews.map((item) => (
            <div className="review">
              <div className="cover-icon">
                <img src={item.coverPhoto} />
              </div>
              <div className="job-title">
                <p>{item.name}</p>
                <p>{item.title}</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Consectetur ac blandit nam massa massa elementum mollis
                  lectus. Sit ultricies nisl amet non, quis enim velit tempus.
                  Interdum duis imperdiet venenatis{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
