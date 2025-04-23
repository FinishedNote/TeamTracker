import {
  LayoutDashboard,
  Users,
  MessagesSquare,
  ChartArea,
  Bot,
  Settings,
  LogOut,
} from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import supabase from "../supabaseClient";
import { useSidebar } from "../context/SidebarContext";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            className="sidebar"
            initial={{ x: -250 }}
            animate={{ x: 0 }}
            exit={{ x: -250 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="top">
              <div className="logo">
                <img src={logo} alt="logo TeamTracker" />
              </div>
            </div>
            <div className="bottom">
              <ul className="links">
                <li>
                  <NavLink to="/dashboard" end>
                    <LayoutDashboard /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/teams">
                    <Users /> Équipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/messages">
                    <MessagesSquare /> Messages
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/statistics">
                    <ChartArea /> Statistiques
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/support">
                    <Bot /> Support
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/settings">
                    <Settings /> Paramètres
                  </NavLink>
                </li>
              </ul>
              <li className="logout" onClick={handleSignOut}>
                <LogOut /> Se déconnecter
              </li>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
