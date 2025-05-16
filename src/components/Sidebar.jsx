import { NavLink, useLocation } from "react-router";
import { motion } from "framer-motion";
import supabase from "../supabaseClient";
import {
  Bot,
  ChartArea,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";
import logoImg from "../assets/logo.png";

const links = [
  { to: "/dashboard", label: "Bureau", icon: <LayoutDashboard /> },
  { to: "/dashboard/teams", label: "Équipes", icon: <Users /> },
  { to: "/dashboard/statistics", label: "Statistiques", icon: <ChartArea /> },
  { to: "/dashboard/messages", label: "Messages", icon: <MessageSquare /> },
  { to: "/dashboard/support", label: "Support", icon: <Bot /> },
  { to: "/dashboard/settings", label: "Paramètres", icon: <Settings /> },
];

const Sidebar = () => {
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav id="sidebar">
      <ul>
        <li>
          <span className="logo">
            <img src={logoImg} alt="" />
          </span>
        </li>

        {links.map(({ to, label, icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === "/dashboard"}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {icon}
              <span>{label}</span>
              {location.pathname === to && (
                <motion.div
                  layoutId="activeIndicator"
                  className="active-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="bottom">
        <li>
          <button onClick={handleLogout} className="logout-button">
            <LogOut />
            <span>Se déconnecter</span>
          </button>
        </li>
      </div>
    </nav>
  );
};

export default Sidebar;
