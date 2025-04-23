import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useUser } from "../context/UserContext";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = useUser();

  return (
    <header className="d-header">
      <div className="l-part">
        <img src={logo} alt="logo {site}" />
      </div>
      <nav className={isOpen ? "active" : ""}>
        <ul className="links">
          <motion.li
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <NavLink to="/dashboard">Dashboard</NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <NavLink to="/prices">Prix</NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <NavLink to="/about">À propos</NavLink>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            <NavLink to="/contact">Contact</NavLink>
          </motion.li>
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
            <div className="pp"></div>
          </div>
        )}
      </nav>
      <Menu className="menu" onClick={() => setIsOpen(!isOpen)} />
    </header>
  );
};

export default Header;
