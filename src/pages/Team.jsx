import HeaderDashboard from "../components/HeaderDashboard";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { getMembers } from "../redux/features/members/membersSlice";
import { getTeams } from "../redux/features/teams/teamsSlice";
import { useEffect } from "react";
import AddMember from "../components/addMember";
import SortRole from "../components/SortRole";

const Team = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembers());
    dispatch(getTeams());
  }, [dispatch]);

  return (
    <div className="team">
      <HeaderDashboard />
      <div className="container">
        <Sidebar />
        <div className="box">
          <div className="sub-1">
            <AddMember id={id} />
          </div>
          <div className="members-container">
            <div className="text">
              <h2>{id}</h2>
            </div>
            <SortRole />
            <ul className="members-list"></ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
