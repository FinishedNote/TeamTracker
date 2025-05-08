import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user.user);

  return (
    <header className="d-header">
      <div className="l-part">
        <img src={logo} alt="logo {site}" />
      </div>
      <nav className={isOpen ? "active" : ""}>
        <ul className="links">
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/prices">Prix</NavLink>
          </li>
          <li>
            <NavLink to="/about">À propos</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        {!user ? (
          <div className="auth-buttons">
            <NavLink to="/login" className="login-btn">
              Se connecter
            </NavLink>
            <NavLink to="/register" className="register-btn">
              Commencer
            </NavLink>
          </div>
        ) : (
          <div className="profil">
            <div className="pp">
              <img
                src={
                  user?.user_metadata?.avatar_url ||
                  (user?.user_metadata?.name
                    ? `https://robohash.org/${user.user_metadata.name}`
                    : "https://robohash.org/default-avatar")
                }
                alt="user's logo"
              />
            </div>
          </div>
        )}
      </nav>
      <Menu className="menu" onClick={() => setIsOpen(!isOpen)} />
    </header>
  );
};

export default Header;
