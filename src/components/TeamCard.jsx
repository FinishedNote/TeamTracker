import React from "react";
import img from "../assets/img.png";
import { NavLink } from "react-router";

const TeamCard = ({ team }) => {
  return (
    <NavLink to={`/dashboard/teams/${team.id}`} className="team-card">
      <img src={img} alt="img" />
      <p>{team.name}</p>
    </NavLink>
  );
};

export default TeamCard;
