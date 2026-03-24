import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { logout, subscribeAuth } from "./api/auth";
import type { User } from "firebase/auth";

import Layout from "./layout/Layout";
import ProtectedRoute from "./pages/ProtectedRoute";
import AuthLoading from "./pages/auth/AuthLoading";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const AuthPage = lazy(() => import("./pages/auth/AuthPage"));
const WritePage = lazy(() => import("./pages/write/WritePage"));
const LetterPage = lazy(() => import("./pages/letter/LetterPage"));

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = subscribeAuth((user) => {
      setUser(user);
      setAuthReady(true);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (user && window.location.pathname === "/auth") {
      navigate("/");
    }
  }, [user, navigate]);

  const isLogin = user !== null;

  if (!authReady) {
    return <AuthLoading />;
  }

  const handleLogout = async () => {
    await logout();
    setUser(null);
    navigate("/auth");
  };

  return (
    <Suspense fallback={<AuthLoading />}>
      <Routes>
        <Route
          path="/auth"
          element={<AuthPage isLogin={isLogin} authReady={authReady} />}
        />

        <Route
          element={
            <Layout
              isLogin={isLogin}
              user={user}
              onLogin={() => navigate("/auth")}
              onLogout={handleLogout}
            />
          }
        >
          <Route
            path="/"
            element={<HomePage isLogin={isLogin} user={user} />}
          />

          <Route
            path="/write"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <WritePage user={user} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/letter/:id"
            element={
              <ProtectedRoute isLogin={isLogin}>
                <LetterPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
