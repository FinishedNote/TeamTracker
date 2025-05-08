import { Menu } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { useSidebar } from "../context/SidebarContext";

const HeaderDashboard = () => {
  const { setIsOpen } = useSidebar();
  const user = useSelector((state) => state.user.user);

  return (
    <header className="header-dashboard">
      <div className="menu">
        <Menu onClick={() => setIsOpen(true)} />
      </div>
      <div className="profil">
        <div className="pp">
          <img
            src={
              user?.user_metadata?.avatar_url ||
              (user?.user_metadata?.name
                ? `https://robohash.org/${user.user_metadata.name}`
                : "https://robohash.org/default-avatar")
            }
            alt="user's logo"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderDashboard;
