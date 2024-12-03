import "./navbar.scss";
import Logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useState,} from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <header className="navbar">
      <nav className="navbar__container wrapper">
        <a href="#" className="navbar__Logo" onClick={() => setShowNav(false)}>
          <img src={Logo} alt="logo" />
        </a>

        <ul className={showNav ? "show" : ""}>
          <li onClick={() => setShowNav(false)}><a href="#">Product</a></li>
          <li onClick={() => setShowNav(false)}><a href="#">Company</a></li>
          <li onClick={() => setShowNav(false)}><a href="#">Pricing</a></li>
          <li onClick={() => setShowNav(false)}><a href="#">Blog</a></li>
        </ul>

        <div className="navbar__btns">
            <a href="#">Login</a>
            <a href="#" className="btn">Register</a>
        </div>

        <div className="navbar__menu">
          {showNav ? (
            <IoMdClose onClick={() => setShowNav(false)} />
          ) : (
            <IoMenu onClick={() => setShowNav(true)} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
