// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ children, requiredRole }) => {
  // const { user, loading } = useAuth();
  
  // if (loading) return <div>Loading...</div>;

  // if (!user) return <Navigate to="/login" replace />;

  // if (requiredRole && user.role !== requiredRole) {
  //   return <Navigate to="/" replace />;
  // }

  return children;
};

export default PrivateRoute;
