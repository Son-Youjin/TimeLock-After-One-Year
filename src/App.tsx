import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import Layout from "./layout/Layout";
import WritePage from "./pages/write/WritePage";
import LetterPage from "./pages/letter/LetterPage";
import { useEffect, useState } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";
import { handleRedirectResult, logout, subscribeAuth } from "./api/auth";
import { type User } from "firebase/auth";
import Callback from "./pages/auth/Callback";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleRedirectResult().then((data) => {
      if (data?.user) {
        console.log("로그인 성공", "google");
      }
    });

    const unsubscribe = subscribeAuth((user) => {
      setUser(user);
      setAuthReady(true);
    });

    return unsubscribe;
  }, []);

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
          <Route path="/callback" element={<Callback />} />

          <Route path="/write" element={<WritePage />} />

          <Route
            path="/letter/:id"
            element={
              <ProtectedRoute isLogin={isLogin} authReady={authReady}>
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
