import LoginMain from "../../components/main/LoginMain";
import PreviewMain from "../../components/main/PreviewMain";

interface HomePageProps {
  isLogin: boolean;
  authReady: boolean;
}

export default function HomePage({ isLogin, authReady }: HomePageProps) {
  if (!authReady) return null;

  return <>{isLogin ? <LoginMain /> : <PreviewMain isLogin={isLogin} />}</>;
}
