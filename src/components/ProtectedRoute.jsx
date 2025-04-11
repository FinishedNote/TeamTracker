import { Navigate } from "react-router";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useUser();

    if (loading) return <p>Chargement...</p>;
    if (!user) return <Navigate to="/login" replace />;

    return children;
};

export default ProtectedRoute;
