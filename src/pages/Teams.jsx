import React, { useEffect, useState } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, addTeam } from "../redux/features/teams/teamsSlice";
import TeamCard from "../components/TeamCard";
import { Plus } from "lucide-react";
import supabase from "../supabaseClient";

const Teams = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.teams.teams);
  const [userData, setUserData] = useState()

  const getUserId = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()
  
    if (error) {
      console.error('Erreur lors de la récupération de l’utilisateur :', error)
      return null
    }

    return user
  }
  
  
  useEffect(() => {
    setUserData(getUserId())
    dispatch(getTeams());
  }, []);

  const addTeam = () => {
    dispatch(addTeam({name: "", coach_id: userData?.id}))  
  }

  return (
    <div className="teams">
      <HeaderDashboard />
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
        <div className="team-card add-team" onClick={addTeam}>
          <Plus />
          <p>Ajouter une équipe</p>
        </div>
        </ul>
          </div>
      </div>
    </div>
  );
};
// loading="lazy"
export default Teams;
