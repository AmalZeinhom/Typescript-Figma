import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>WiSchool</h3>
          <p>We are not here to sell you products, we sell value through our expertise.</p>
          <div className="socials">
            <a href="#">🌐</a>
            <a href="#">📘</a>
            <a href="#">💬</a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Home</h4>
            <p>Services</p>
            <p>Training</p>
            <p>About Us</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Place A Call</p>
            <p>Email: WiSchool@email.com</p>
          </div>
          <div>
            <h4>Job Opening</h4>
            <p>News</p>
            <p>Research</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <input type="email" placeholder="Your Email address" />
        <button className="btn-green">Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
