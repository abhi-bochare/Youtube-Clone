import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const user = useSelector((s) => s.auth.user);
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
}
