import "./Companies.scss";
import { companyInfo } from "../../Data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Companies = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="companies">
      <div className="companies__container wrapper">
        {companyInfo.map(({ id, img }) => (
          <div key={id} className="company__item" data-aos="fade-up">
            <img src={img} alt={`Company ${id}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
