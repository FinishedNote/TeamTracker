import React from "react";
import img from "../assets/img.png";

const TeamCard = ({ team }) => {
  return (
    <li className="team-card">
      <img src={img} alt="img" />
      <p>{team.name}</p>
    </li>
  );
};

export default TeamCard;
