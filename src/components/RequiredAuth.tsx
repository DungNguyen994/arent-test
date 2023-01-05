import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequiredAuth() {
  const isLoggedIn = true;
  const location = useLocation();
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
