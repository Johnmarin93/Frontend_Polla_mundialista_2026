import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <div className="soccer-loader">...</div>;
  }

  if (!user) {
    return <Navigate to="/" />;
  }

  if (adminOnly && user?.rol_id !== 1) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default ProtectedRoute;
