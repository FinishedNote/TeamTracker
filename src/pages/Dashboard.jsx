import React, { useEffect, useState } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";
// import { fetchTeams } from "../redux/features/teams/teamsSlice";
import ky from "ky";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  // const [data, setData] = useState("");
  // const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // const fetchUsers = async () => {
    //   try {
    //     const data = await ky
    //       .get(
    //         "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v4/matches",
    //         {
    //           headers: {
    //             "X-Auth-Token": "18842a6dab5549ecad34d50503c851f9",
    //           },
    //         }
    //       )
    //       .json();

    //     setData(data);
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // };

    // fetchUsers();
    // TODO: config un proxy

    // dispatch(fetchTeams());
  }, []);

  return (
    <div>
      <HeaderDashboard />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
