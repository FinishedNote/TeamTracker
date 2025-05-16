import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";

const Settings = () => {
  const handleChangeMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
  };

  return (
    <div className="settings">
      <HeaderDashboard />
      <div className="container">
        <Sidebar />
        <input type="checkbox" name="darkmode" onChange={handleChangeMode} />
      </div>
    </div>
  );
};

export default Settings;
