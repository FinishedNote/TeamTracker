import HeaderDashboard from "../components/HeaderDashboard";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getMembers } from "../redux/features/members/membersSlice";
import { getTeams } from "../redux/features/teams/teamsSlice";
import { useEffect } from "react";
import AddMember from "../components/addMember";
import SortRole from "../components/SortRole";

const Team = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const currentMembers = useSelector((state) => state.members.members);

  useEffect(() => {
    dispatch(getMembers(id));
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
            <ul className="members-list">
              {currentMembers.map((member) => (
                <li key={member.id}>{member.role}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
