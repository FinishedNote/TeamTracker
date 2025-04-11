import { LayoutDashboard } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="top">
        <div className="logo">
          <img src="./img/logo.png" alt="logo TeamTracker" />
        </div>
      </div>
      <div className="bottom">
        <ul className="links">
          <li>
            <LayoutDashboard />
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Équipes</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Messages</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Statistiques</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Support</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Paramètres</NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
