import React, { useEffect } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserTeams } from "../redux/features/teams/teamsSlice";
import TeamCard from "../components/TeamCard";

const Teams = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.teams.teams);

  useEffect(() => {
    dispatch(fetchUserTeams());
  }, []);

  return (
    <div className="teams">
      <HeaderDashboard />
      <Sidebar />
      <div className="container">
        <div className="text">
          <h2>Mes équipes</h2>
        </div>
        <ul className="teams-card">
          {data?.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </ul>
      </div>
    </div>
  );
};
// loading="lazy"
export default Teams;
