import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import NotFound from "./pages/NotFound";

const App = () => {
  useEffect(() => {
    const remember = localStorage.getItem("rememberMe");
    if (!remember) {
      window.addEventListener("beforeunload", () => {
        supabase.auth.signOut();
      });
    }
  }, []);

  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/dashboard/teams"
            element={
              <ProtectedRoute>
                <Teams />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
