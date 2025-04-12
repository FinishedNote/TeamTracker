import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="hero-section">
        <div className="l-part">
          <h1>
            <span>Du terrain à la victoire, </span>
            suivez chaque progrès
          </h1>
          <div className="action-buttons">
            <button type="button" className="discover-btn">
              Découvrir
            </button>
            <NavLink to="/register" className="register-btn">
              <button type="button">Commencez gratuitement</button>
            </NavLink>
          </div>
        </div>
        <div className="r-part">
          <div className="img">
            <img src="./img/img2.png" alt="image" />
          </div>
        </div>
      </section>
      <section className="qualities-section">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </section>
      <section className="prices-section"></section>
    </div>
  );
};

export default Home;
