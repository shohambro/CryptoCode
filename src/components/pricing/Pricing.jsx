import "./Pricing.scss";
import { pricingInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Pricing = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="pricing">
      <h2 data-aos="fade-up">Best Cryptocurrency at the moment -</h2>
      <div className="pricing__container wrapper">
        {pricingInfo.map(({ image, name, price }, index) => (
          <div className="pricing__card" key={index} data-aos="fade-up">
            <img src={image} alt={name} className="pricing__image" />
            <h3 className="pricing__name">{name}</h3>
            <p className="pricing__price">{`$${price}`}</p>
            <a href="#" className="btn">
              Buy Now!
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
