import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { UserProvider } from "./context/UserContext";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
