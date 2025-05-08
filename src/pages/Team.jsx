import React from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import { useParams } from "react-router-dom";

const Team = () => {
  const { id } = useParams();

  return (
    <div>
      <HeaderDashboard />
      <p>team {id}</p>
    </div>
  );
};

export default Team;
