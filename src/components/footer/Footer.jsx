import "./Footer.scss";
import Logo from "../../assets/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container wrapper" data-aos="fade-up">
        <div className="footer__col">
          <img src={Logo} alt="logo" />
          <p>
            {" "}
            We aim to empower individuals by making cryptocurrency transactions
            seamless, secure, and accessible. Our platform is built to provide
            innovative solutions, unmatched transparency, and user-focused
            features, enabling you to navigate the digital economy with
            confidence. Join us and be part of the financial revolution
            transforming the world.
          </p>
        </div>
        <div className="footer__col">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#!">About Us</a>
            </li>
            <li>
              <a href="#!">Careers</a>
            </li>
            <li>
              <a href="#!">Blog</a>
            </li>
            <li>
              <a href="#!">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Product</h3>
          <ul>
            <li>
              <a href="#!">Features</a>
            </li>
            <li>
              <a href="#!">Security</a>
            </li>
            <li>
              <a href="#!">Transactions</a>
            </li>
            <li>
              <a href="#!">API</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#!">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#!">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#!">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#!">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#!">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="#!">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
