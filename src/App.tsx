import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import Layout from "./layout/Layout";
import WritePage from "./pages/write/WritePage";
import LetterPage from "./pages/letter/LetterPage";
import { useState } from "react";
import type { AuthProvider } from "./types/auth";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (provider: AuthProvider) => {
    console.log("provider", provider);
    setIsLogin(true);
    navigate("/");
  };

  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage onLogin={handleLogin} />} />

        <Route
          element={
            <Layout
              isLogin={isLogin}
              isOpen={isOpen}
              onLogin={() => navigate("/auth")}
              onLogout={() => setIsLogin(false)}
            />
          }
        >
          <Route
            path="/"
            element={
              <HomePage isLogin={isLogin} onLogin={() => setIsLogin(true)} />
            }
          />
          <Route path="/write" element={<WritePage />} />
          <Route path="/letter/:id" element={<LetterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
