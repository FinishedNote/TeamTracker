import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./redux/features/user/userSlice";
import RequireUser from "./components/RequireUser";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import supabase from "./supabaseClient";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          const { user } = session;
          if (!user?.user_metadata?.role) {
            await supabase.auth.updateUser({
              data: { role: "player" },
            });
          }
        }
      }
    );

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    dispatch(fetchUser())
      .unwrap()
      .catch((err) => console.error("Erreur utilisateur :", err))
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) return <div>Chargement...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <RequireUser>
              <Dashboard />
            </RequireUser>
          }
        />
        <Route
          path="/dashboard/teams"
          element={
            <RequireUser>
              <Teams />
            </RequireUser>
          }
        />
        <Route path="/dashboard/teams/:id" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
