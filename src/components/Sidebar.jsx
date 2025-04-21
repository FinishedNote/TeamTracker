import {
  LayoutDashboard,
  Users,
  MessagesSquare,
  ChartArea,
  Bot,
  Settings,
  LogOut,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import supabase from "../supabaseClient";
import { useSidebar } from "../context/SidebarContext";

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
                <img src="./img/logo.png" alt="logo TeamTracker" />
              </div>
            </div>
            <div className="bottom">
              <ul className="links">
                <li>
                  <NavLink to="/dashboard">
                    <LayoutDashboard /> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/teams">
                    <Users /> Équipes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/messages">
                    <MessagesSquare /> Messages
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/statistics">
                    <ChartArea /> Statistiques
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/support">
                    <Bot /> Support
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/settings">
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
