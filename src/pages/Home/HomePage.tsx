import LoginMain from "../../components/main/LoginMain";
import PreviewMain from "../../components/main/PreviewMain";

interface HomePageProps {
  isLogin: boolean;
  onLogin: () => void;
}

export default function HomePage({ isLogin, onLogin }: HomePageProps) {
  return <>{isLogin ? <LoginMain /> : <PreviewMain onLogin={onLogin} />}</>;
}
