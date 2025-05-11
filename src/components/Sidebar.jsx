import {
  LayoutDashboard,
  Users,
  MessagesSquare,
  ChartArea,
  Bot,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import supabase from "../supabaseClient";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../redux/features/sidebar/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const links = [
    { to: "/dashboard", label: "Dashboard", icon: <LayoutDashboard /> },
    { to: "/dashboard/teams", label: "Équipes", icon: <Users /> },
    { to: "/dashboard/messages", label: "Messages", icon: <MessagesSquare /> },
    { to: "/dashboard/statistics", label: "Statistiques", icon: <ChartArea /> },
    { to: "/dashboard/support", label: "Support", icon: <Bot /> },
    { to: "/dashboard/settings", label: "Paramètres", icon: <Settings /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          className="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => dispatch(closeSidebar())}
        />
      )}
      {isOpen && (
        <motion.aside
          key="sidebar"
          className="sidebar"
          initial={{ x: -250 }}
          animate={{ x: 0 }}
          exit={{ x: -250 }}
          transition={{ duration: 0.3 }}
        >
          <div className="top">
            <div className="logo">
              <img src={logo} alt="logo TeamTracker" />
            </div>
          </div>
          <div className="bottom">
            <ul className="links">
              {links.map(({ to, label, icon }) => (
                <li key={to}>
                  <NavLink to={to}>
                    {icon} {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <li className="logout" onClick={handleSignOut}>
              <LogOut /> Se déconnecter
            </li>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
