import "./Earnings.scss";
import Img from "../../assets/earnings.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Earnings = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="earnings">
      <div className="earnings__container wrapper">
        <div className="earnings__left" data-aos="fade-right">
          <img src={Img} alt="earnings" />
        </div>
        <div className="earnings__right">
          <h2 data-aos="fade-up">Track Your Earnings using CryptoCode!</h2>
          <p>
            CryptoCode aims to provide users with detailed insights into their
            cryptocurrency portfolio, tracking performance, calculating
            potential profits, and offering strategic financial management
            tools.
          </p>
          <a href="" className="btn">
            GET STARTED
          </a>
        </div>
      </div>
    </section>
  );
};

export default Earnings;
