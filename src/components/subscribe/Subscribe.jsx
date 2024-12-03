import "./Subscribe.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="subscribe">
      <div className="subscribe__container wrapper">
        <h2 data-aos="fade-up">Subscribe for more!</h2>
        <p data-aos="fade-up">
          Subscribing to CryptoCode brings unmatched convenience, security, and
          insights to your cryptocurrency transactions. Enjoy real-time
          tracking, exclusive features like reduced fees and priority support,
          and seamless wallet integration. Maximize your investments with
          tailored recommendations and advanced analytics. Navigate the crypto
          world confidently with tools designed for traders of all levels.
        </p>
        <form action="#" data-aos="fade-up">
          <input type="email" placeholder="Enter your email here." />
          <a href="" className="btn">
            SUBSCRIBE
          </a>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;
