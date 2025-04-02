import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="d-header">
      <div className="l-part">
        <img src="./img/logo.png" alt="logo {site}" />
      </div>
      <div className={isOpen ? "r-part active" : "r-part"}>
        <ul className="links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/prices">Prices</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="auth-buttons">
          <NavLink to="/login" className="login-btn">
            Sign in
          </NavLink>
          <NavLink to="/register" className="register-btn">
            Get started
          </NavLink>
        </div>
        {/* <div className="profil">
          <div className="pp"></div>
        </div> */}
      </div>
      <Menu className="menu" onClick={() => setIsOpen(!isOpen)} />
    </header>
  );
};

export default Header;
