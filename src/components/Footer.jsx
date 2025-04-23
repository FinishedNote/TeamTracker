import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="logo {site}" />
        </div>
      </div>
      <div className="bottom">
        <p>© 2025 TeamTracker. Tous droits réservés.</p>
        <div className="legacy">
          <p>CGV</p>
          <p>Lorem ipsum</p>
          <p>Politique de confidentialité</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
