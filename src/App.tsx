import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import AuthPage from "./pages/Auth/AuthPage";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />

        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
