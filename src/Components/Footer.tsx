import React from "react";
import styles from "../Styles/Footer.module.css";
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className= {styles.footer}>
      <div className= {styles.container}>
        <div className= {styles.footerTop}>
        <div className= {styles.footerBrand}>
          <h2>WiSchool</h2>
          <p>
            We are not here to sell you products, we sell value through our
            expertise.
          </p>
          <div className= {styles.socials}>
            <a href="#"> 
              <FaFacebook/>
            </a>
            <a href="#">
              <FaTwitter/>
              </a>
            <a href="#">
              <FaInstagram/>
            </a>
            <a href="#">
              <FaLinkedin/>
            </a>
          </div>
        </div>
        <div className= {styles.footerLinks}>
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
      <div className= {styles.footerBottom}>
        <form>
          <input type="email" placeholder="Your Email address" />
          <button className= {styles.btnGreen}>Subscribe</button>
        </form>
      </div>
      </div>
    </footer>
  );
};

export default Footer;