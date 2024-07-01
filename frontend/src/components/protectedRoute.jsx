import { Navigate } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";
import { useUser } from "../hooks";

export const ProtectedRoute = ({ children }) => {
  const { user } = useUser();
  console.log(user)
  if (!user.id) {
    sessionStorage.setItem('intendedDestination', window.location.pathname);
    return <Navigate to="/auth/login" />;
  }
  return children;
};