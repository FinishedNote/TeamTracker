import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { ChartNoAxesColumn, Gem, PiggyBank } from "lucide-react";
import demo from "../assets/tempoDemo.png";
import footballTeam from "../assets/football-team.png";

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
          <img src={demo} alt="demo" />
        </div>
      </section>
      <section className="section-2">
        <div className="box">
          <div className="l-part">
            <div className="image">
              <img src={footballTeam} alt="football players" />
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
        <div className="box">
          <div className="theme">
            <Gem />
          </div>
          <h3>Qualité</h3>
          <p>
            Nous mettons à votre disposition un large éventail de
            fonctionnalités haut de gamme.
          </p>
        </div>
        <div className="box">
          <div className="theme">
            <ChartNoAxesColumn />
          </div>
          <h3>Simplicité</h3>
          <p>Navigation intuitive pour une utilisation immédiate.</p>
        </div>
        <div className="box">
          <div className="theme">
            <PiggyBank />
          </div>
          <h3>Bon rapport qualité-prix</h3>
          <p>Bénéficiez d'un service performant à un prix imbattable.</p>
        </div>
      </section>
      <section className="prices-section"></section>
      <section className="rates-section"></section>
      <Footer />
    </div>
  );
};

export default Home;
