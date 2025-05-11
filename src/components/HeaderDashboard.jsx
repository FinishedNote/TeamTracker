import { Menu } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../redux/features/sidebar/sidebarSlice";

const HeaderDashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  return (
    <header className="header-dashboard">
      <div className="menu">
        <Menu onClick={() => dispatch(openSidebar())} />
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
