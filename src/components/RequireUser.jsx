import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const RequireUser = ({ children }) => {
  const user = useSelector((state) => state.user.user);

  if (!user || !user.user_metadata) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireUser;
