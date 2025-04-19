import React from "react";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="logo">
        <img src="./img/logo.png" alt="logo TeamTrack" />
      </div>
      <h1>Oops... Vous êtes hors jeu ! Cette page n'existe pas.</h1>
      <NavLink to="/">Revenir à l'accueil</NavLink>
    </div>
  );
};

export default NotFound;
