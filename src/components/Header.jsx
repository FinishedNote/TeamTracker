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
            <nav className={isOpen ? "active" : ""}>
                <ul className="links">
                    <li>
                        <NavLink to="/">Accueil</NavLink>
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
                <div className="auth-buttons">
                    <NavLink to="/login" className="login-btn">
                        Se connecter
                    </NavLink>
                    <NavLink to="/register" className="register-btn">
                        Commencer
                    </NavLink>
                </div>
                {/* <div className="profil">
          <div className="pp"></div>
        </div> */}
            </nav>
            <Menu className="menu" onClick={() => setIsOpen(!isOpen)} />
        </header>
    );
};

export default Header;
