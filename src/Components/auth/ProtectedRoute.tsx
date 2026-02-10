import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  return isAdmin ? <>{children}</> : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
