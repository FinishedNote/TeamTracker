import HeaderDashboard from "../components/HeaderDashboard";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { getMembers } from "../redux/features/members/membersSlice";
import { useEffect } from "react";
import AddMember from "../components/addMember";

const Team = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return (
    <div className="team">
      <HeaderDashboard />
      <div className="container">
        <Sidebar />
        <AddMember />
      </div>
    </div>
  );
};

export default Team;
