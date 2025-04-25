import React, { useEffect } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, addTeam } from "../redux/features/teams/teamsSlice";
import { fetchUser } from "../redux/features/user/userSlice";
import TeamCard from "../components/TeamCard";
import { Plus } from "lucide-react";

const Teams = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.teams.teams);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getTeams());
    dispatch(fetchUser());
  }, []);

  const handleAddTeam = () => {
    dispatch(addTeam({ name: "", coach_id: user?.id }));
  };

  return (
    <div className="teams">
      <HeaderDashboard url={user?.user_metadata.avatar_url} />
      <Sidebar />
      <div className="container">
        <div className="text">
          <h2>Mes équipes</h2>
        </div>
        <div className="teams-container">
          <ul className="teams-cards">
            {data?.map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
            {user?.user_metadata?.role === "manager" && (
              <div className="team-card add-team" onClick={handleAddTeam}>
                <Plus />
                <p>Ajouter une équipe</p>
              </div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
// loading="lazy" <--- add this later
export default Teams;
