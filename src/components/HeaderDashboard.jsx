import { Menu } from "lucide-react";
import React from "react";

const HeaderDashboard = () => {
  return (
    <header className="header-dashboard">
      <div className="menu">
        <Menu />
      </div>
      <div className="profil">
        <div className="pp"></div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
