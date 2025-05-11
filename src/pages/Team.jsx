import HeaderDashboard from "../components/HeaderDashboard";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Team = () => {
  const { id } = useParams();

  return (
    <div>
      <HeaderDashboard />
      <Sidebar />
      <p>team {id}</p>
    </div>
  );
};

export default Team;
