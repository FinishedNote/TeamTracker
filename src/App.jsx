import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Statistics from "./pages/Statistics";
import Messages from "./pages/Messages";
import Support from "./pages/Support";
import Settings from "./pages/Settings";

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
        <Route
          path="/dashboard/statistics"
          element={
            <RequireUser>
              <Statistics />
            </RequireUser>
          }
        />
        <Route
          path="/dashboard/messages"
          element={
            <RequireUser>
              <Messages />
            </RequireUser>
          }
        />
        <Route
          path="/dashboard/support"
          element={
            <RequireUser>
              <Support />
            </RequireUser>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <RequireUser>
              <Settings />
            </RequireUser>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
