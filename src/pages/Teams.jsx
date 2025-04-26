import React, { useCallback, useEffect, useState } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, addTeam } from "../redux/features/teams/teamsSlice";
import { fetchUser } from "../redux/features/user/userSlice";
import TeamCard from "../components/TeamCard";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import AddTeam from "../components/AddTeam";

const Teams = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.teams.teams);
  const user = useSelector((state) => state.user.user);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const teamLimit = {
    free: 1,
    essential: 3,
    premium: Infinity,
  };

  const userPlan = user?.user_metadata?.plan || "free";
  const teamsCount = data?.length || 0;
  const canAddTeam = teamsCount < teamLimit[userPlan];

  useEffect(() => {
    dispatch(getTeams());
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (data && user) {
      setLoading(false);
    }
  }, [data, user]);

  const handleAddTeam = () => {
    if (name.trim() === "") return;
    dispatch(addTeam({ name: name, coach_id: user?.id }));
    setName("");
    closeModal();
  };

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
              <AddTeam openModal={openModal} disabled={!canAddTeam} />
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
                    <button onClick={closeModal} className="close-button">
                      <X />
                    </button>
                  </div>
                  <div className="bottom">
                    <input
                      type="text"
                      placeholder="Nom de l'équipe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className="modal-buttons">
                      <button
                        onClick={handleAddTeam}
                        className="confirm-button"
                      >
                        Ajouter
                      </button>
                      <button onClick={closeModal} className="cancel-button">
                        Annuler
                      </button>
                    </div>
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

export default Teams;
