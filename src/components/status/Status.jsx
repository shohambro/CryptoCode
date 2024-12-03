import "./Status.scss";
import StatusImg from "../../assets/status.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Status = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <section className="status">
      <div className="status__container wrapper">
        <div className="status__left" data-aos="fade-right">
          <h2>Safe and convenient deposits.</h2>
          <p>
            CryptoCode is dedicated to providing a secure and convenient way for
            users to deposit funds into their accounts. Our platform ensures
            that users can easily transfer funds to their accounts without the
            need for complex processes or manual interactions.
          </p>
        </div>
        <div className="status__right">
          <img src={StatusImg} alt="status" />
          <a href="" className="btn">
            KNOW MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Status;
