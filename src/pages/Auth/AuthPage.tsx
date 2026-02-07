import { useNavigate } from "react-router-dom";
import Auth from "../../components/auth/Auth";
import { useEffect } from "react";
import Callback from "./Callback";

export default function AuthPage({
  isLogin,
  authReady,
}: {
  isLogin: boolean;
  authReady: boolean;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (authReady && isLogin) {
      navigate("/", { replace: true });
    }
  }, [authReady, isLogin, navigate]);

  if (!authReady) return <Callback />;

  return <Auth />;
}
