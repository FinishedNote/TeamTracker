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
            <span>From the field to victory, </span>
            follow every progress
          </h1>
          <div className="action-buttons">
            <button type="button" className="discover-btn">
              Discover
            </button>
            <NavLink to="/register" className="register-btn">
              <button type="button">Get started for free</button>
            </NavLink>
          </div>
        </div>
        <div className="r-part">
          <div className="img">
            <img src="./img/img.png" alt="image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
