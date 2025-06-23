import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";

export const RequireRole = ({ roles, children }) => {
  const { user } = useAuth();
  if (!roles.includes(user.role)) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};
export const RequireRoleRedirect = ({ roles, redirectTo, children }) => {
  const { user } = useAuth();
  if (!roles.includes(user.role)) {
    return <Navigate to={redirectTo} />;
  }
  return children;
};