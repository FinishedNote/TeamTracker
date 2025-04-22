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
    <div>
      <HeaderDashboard />
      <Sidebar />
      <ul className="teams-card">
        {data?.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </ul>
    </div>
  );
};

export default Teams;
