  import React from "react";
  import { Navigate } from "react-router-dom";

  interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredRole?: "admin" | "staff" | "guest";
  }

  const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
    // TODO: lấy state thực tế từ context/store
    const state = { isAuthenticated: true, user: { role: "admin" } };
    const { isAuthenticated, user } = state;

    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (requiredRole && user?.role !== requiredRole) return <Navigate to="/unauthorized" replace />;

    return <>{children}</>;
  };

  export default ProtectedRoute;
