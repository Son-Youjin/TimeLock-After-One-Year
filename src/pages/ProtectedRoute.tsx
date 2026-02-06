import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Callback from "./auth/Callback";

interface ProtectedRouteProps {
  isLogin: boolean;
  children: ReactNode;
  authReady: boolean;
}

export default function ProtectedRoute({
  isLogin,
  children,
  authReady,
}: ProtectedRouteProps) {
  if (!authReady) {
    return <Callback />;
  }

  if (!isLogin) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
}
