import { Menu } from "lucide-react";
import React from "react";
import { useSidebar } from "../context/SidebarContext";

const HeaderDashboard = ({ url, name }) => {
  const { setIsOpen } = useSidebar();

  return (
    <header className="header-dashboard">
      <div className="menu">
        <Menu onClick={() => setIsOpen(true)} />
      </div>
      <div className="profil">
        <div className="pp">
          <img
            src={url ? url : `https://robohash.org/${name}`}
            alt="logo user"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
