import React from "react";
import "../Styles/Footer.css";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>WiSchool</h2>
          <p>
            We are not here to sell you products, we sell value through our
            expertise.
          </p>
          <div className="socials">
            <a href="#"> 
              <FaFacebook size={20} color="green"/>
            </a>
            <a href="#">
              <FaTwitter size={20} color="green"/>
              </a>
            <a href="#">
              <FaInstagram size={20} color="green"/>
            </a>
            <a href="#">
              <FaLinkedin size={20} color="green"/>
            </a>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Training</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Place A Call</a>
            </li>
            <li>
              <a href="#">Email: WiSchool@email.com</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Job Opening</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Research</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Uk Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <form>
          <input type="email" placeholder="Your Email address" />
          <button className="btn-green">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;