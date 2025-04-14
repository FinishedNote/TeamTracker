import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="hero-section">
        <div className="l-part">
          <div className="title">
            <h1>Votre équipe, vos données, vos victoires</h1>
            <h2>Faites passer votre équipe au niveau supérieur</h2>
          </div>
          <ul>
            <li>
              Statistiques personnalisées
              <br />
              pour chaque joueur
            </li>
            <li>
              Suivi des matchs &<br />
              entrainements
            </li>
            <li>Feedbacks et bien plus...</li>
          </ul>
          <div className="actions-btn">
            <NavLink to="/register">Essayer maintenant</NavLink>
            <button type="button">
              <p>Voir les fonctionnalités</p>
            </button>
          </div>
        </div>
        <div className="r-part">
          <img src="./img/tempoDemo.png" alt="demo" />
        </div>
      </section>
      <section className="section-2">
        <div className="box">
          <div className="l-part">
            <div className="image">
              <img src="./img/football-team.png" alt="football players" />
            </div>
          </div>
          <div className="r-part">
            <h2>TeamTracker</h2>
            <p>Gérer vos équipes comme jamais auparavant</p>
            <button type="button">Découvrir</button>
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
