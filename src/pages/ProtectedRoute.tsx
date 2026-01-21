import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isLogin: boolean;
  children: ReactNode;
}

export default function ProtectedRoute({
  isLogin,
  children,
}: ProtectedRouteProps) {
  if (!isLogin) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
}
