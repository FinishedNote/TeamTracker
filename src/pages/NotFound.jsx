import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="logo">
        <img src={logo} alt="logo TeamTrack" />
      </div>
      <h1>Oops... Vous êtes hors jeu ! Cette page n'existe pas.</h1>
      <NavLink to="/">Revenir à l'accueil</NavLink>
    </div>
  );
};

export default NotFound;
