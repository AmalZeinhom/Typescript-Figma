import React from "react";
import cover1 from "../assets/cover1.jpg";
import cover2 from "../assets/cover2.jpg";

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
    <div style={{ margin: "16px 64px" }}>
      <div className="rev-title">
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px",
            fontSize: "32px",
            fontWeight: "600",
          }}
        >
          Reviews
        </h3>
      </div>

      <div
        className="students-reviews"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: '50px'
        }}
      >
        <div className="header">
          <h1 style={{margin: "0 50px"}}>
            What Our <br /> <span style={{ color: "#09B451" }}>Students</span>{" "}
            Say <br /> About Us
          </h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {reviews.map((item) => (
            <div className="review">
              <div className="cover-icon">
                <img
                  src={item.coverPhoto}
                  style={{ width: "70px", height: "70px", borderRadius: "50%" }}
                />
              </div>
              <div className="job-title">
                <p style={{fontWeight: "600"}}>{item.name}</p>
                <p style={{color: '#09B451', fontWeight: "500"}}>{item.title}</p>
                <p style={{maxWidth: "384px" }}>
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
    </div>
  );
};

export default Reviews;
