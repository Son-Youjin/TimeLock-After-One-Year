import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import Layout from "./layout/Layout";
import WritePage from "./pages/write/WritePage";
import LetterPage from "./pages/letter/LetterPage";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOnLogin = () => {
    setIsLogin(true);
  };

  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route
          element={
            <Layout
              isLogin={isLogin}
              isOpen={isOpen}
              onLogin={handleOnLogin}
              onLogout={() => setIsLogin(false)}
            />
          }
        >
          <Route
            path="/"
            element={<HomePage isLogin={isLogin} onLogin={handleOnLogin} />}
          />
          <Route path="/write" element={<WritePage />} />
          <Route path="/letter/:id" element={<LetterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
