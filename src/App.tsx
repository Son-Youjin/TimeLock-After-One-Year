import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthPage from "./pages/auth/AuthPage";
import Layout from "./layout/Layout";
import WritePage from "./pages/write/WritePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/write" element={<WritePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
