import { useNavigate } from "react-router-dom";
import Auth from "../../components/auth/Auth";
import { useEffect } from "react";

export default function AuthPage({ isLogin }: { isLogin: boolean }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/", { replace: true });
    }
  }, [isLogin, navigate]);

  return <Auth />;
}
