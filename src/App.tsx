import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { type User } from "firebase/auth";

import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import Layout from "./layout/Layout";
import WritePage from "./pages/write/WritePage";
import LetterPage from "./pages/letter/LetterPage";
import ProtectedRoute from "./pages/ProtectedRoute";

import { logout, subscribeAuth } from "./api/auth";

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

  const isLogin = !!user;

  if (!authReady) {
    return null;
  }

  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage isLogin={isLogin} />} />

        <Route
          element={
            <Layout
              isLogin={isLogin}
              onLogin={() => navigate("/auth")}
              onLogout={logout}
            />
          }
        >
          <Route path="/" element={<HomePage isLogin={isLogin} />} />

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
    </>
  );
}

export default App;
