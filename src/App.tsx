import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import Layout from "./layout/Layout";
import WritePage from "./pages/write/WritePage";
import LetterPage from "./pages/letter/LetterPage";
import { useEffect, useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import { logout, subscribeAuth } from "./api/auth";
import { getRedirectResult, type User } from "firebase/auth";
import { auth } from "./api/firebase";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result?.user) {
        setUser(result.user);
        setAuthReady(true);
        navigate("/", { replace: true });
      }
    });

    return subscribeAuth((user) => {
      setUser(user);
      setAuthReady(true);
      console.log("login : google");
    });
  }, [navigate]);

  if (!authReady) return null;

  const isLogin = !!user;

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

          <Route path="/write" element={<WritePage />} />

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
