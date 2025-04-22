import React from "react";

const TeamCard = ({ team }) => {
  return (
    <li className="team-card">
      <img src="./img/img.png" alt="img" />
      <p>{team.name}</p>
    </li>
  );
};

export default TeamCard;
