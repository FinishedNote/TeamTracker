import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <Header />
      <section className="hero-section">
        <div className="l-part">
          <h1>
            <span>{t("welcome1")}</span>
            {t("welcome2")}
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
