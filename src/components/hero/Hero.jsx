import "./Hero.scss";
import Mob from "../../assets/Mob.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <section className="hero">
      <div className="hero__container wrapper">
        <div className="hero__left" data-aos="fade-right">
          <img src={Mob} alt="Mobile illustration for hero section" />
        </div>
        <div className="hero__right" data-aos="zoom-in-up">
          <h1>Make Your Crypto Transactions Easier.</h1>
          <p>
            CryptoCode stands out as the best because it combines unmatched
            security, lightning-fast transaction speeds, and a user-centric
            design that makes it accessible to everyone, from beginners to
            seasoned investors. Built on a cutting-edge blockchain architecture,
            it ensures unparalleled transparency and immutability, giving users
            confidence in every transaction. With minimal transaction fees and
            global scalability, our cryptocurrency empowers users to send and
            receive payments seamlessly, without the barriers of traditional
            financial systems. Join a financial revolution where freedom, trust,
            and efficiency come together to redefine how the world transacts.
          </p>
          <a href="#!" className="btn">
            TRY FOR FREE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
