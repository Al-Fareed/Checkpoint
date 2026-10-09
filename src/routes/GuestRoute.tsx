import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import type { RootState } from "../store/memory";

export default function GuestRoute() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.authMemorySlice.isAuthenticated,
  );

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
