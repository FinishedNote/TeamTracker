import React, { useCallback, useEffect, useState } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, addTeam } from "../redux/features/teams/teamsSlice";
import { fetchUser } from "../redux/features/user/userSlice";
import TeamCard from "../components/TeamCard";
import { Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Teams = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.teams.teams);
  const user = useSelector((state) => state.user.user);
  const [isOpen, setIsOpen] = useState(false);
  const [teamData, setTeamData] = useState({ coach_id: user?.id });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getTeams());
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (data && user) {
      setLoading(false);
    }
  }, [data, user]);

  const handleAddTeam = useCallback(
    (e) => {
      e.preventDefault();
      setIsOpen(false);
      dispatch(addTeam(teamData));
      setTeamData({});
    },
    [dispatch, teamData]
  );

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
            {loading ? (
              <Skeleton width={300} height={200} />
            ) : (
              data?.map((team) => <TeamCard key={team.id} team={team} />)
            )}
            {user?.user_metadata?.role === "manager" && (
              <div
                className="team-card add-team"
                onClick={() => setIsOpen(true)}
              >
                <Plus />
                <p>Ajouter une équipe</p>
              </div>
            )}
          </ul>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="modal-content"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <div className="up">
                    <h2>Ajouter une équipe</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="close-button"
                    >
                      <X />
                    </button>
                  </div>
                  <div className="bottom">
                    <input
                      type="text"
                      placeholder="Nom de l'équipe"
                      onChange={(e) =>
                        setTeamData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                    <input
                      type="text"
                      placeholder="Truc"
                      onChange={(e) =>
                        setTeamData((prev) => ({
                          ...prev,
                          truc: e.target.value,
                        }))
                      }
                    />
                    <button onClick={handleAddTeam}>Ajouter</button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
// loading="lazy" <--- add this later
export default Teams;
