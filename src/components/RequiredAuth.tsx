import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequiredAuth() {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
