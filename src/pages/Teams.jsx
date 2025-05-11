import { useEffect, useState } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, addTeam } from "../redux/features/teams/teamsSlice";
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
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const teamLimit = {
    free: 1,
    essential: 3,
    premium: Infinity,
  };

  const userPlan = user?.user_metadata?.plan || "free";
  const teamsCount = data?.length || 0;
  const canAddTeam = teamsCount < teamLimit[userPlan];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getTeams()).unwrap();
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement des données.");
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const handleAddTeam = async () => {
    if (name.trim() === "") return;
    try {
      await dispatch(addTeam({ name: name, coach_id: user?.id })).unwrap();
      setName("");
      setIsOpen(false);
    } catch (err) {
      console.error("Erreur lors de l'ajout d'une équipe:", err);
      setError("Impossible d'ajouter l'équipe.");
    }
  };

  if (loading) {
    return (
      <div className="teams">
        <HeaderDashboard />
        <Sidebar />
        <div className="container loading">
          <div className="text">
            <h2>Mes équipes</h2>
          </div>
          <Skeleton width={250} height={160} borderRadius={30} count={1} />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="teams">
        <HeaderDashboard />
        <Sidebar />
        <div className="container">
          <p style={{ color: "red" }}>{error}</p>
        </div>
      </div>
    );
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
            {data.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
            {user?.user_metadata?.role === "manager" && (
              <button
                className={`team-card add-team ${canAddTeam ? "disabled" : ""}`}
                onClick={() => setIsOpen(true)}
                disabled={!canAddTeam}
              >
                <Plus />
                <p>
                  {!canAddTeam
                    ? "Limite atteinte selon votre plan"
                    : "Ajouter une équipe"}
                </p>
              </button>
            )}
          </ul>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
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
