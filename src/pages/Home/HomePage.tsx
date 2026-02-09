import LoginMain from "../../components/main/LoginMain";
import PreviewMain from "../../components/main/PreviewMain";

interface HomePageProps {
  isLogin: boolean;
}

export default function HomePage({ isLogin }: HomePageProps) {
  return <>{isLogin ? <LoginMain /> : <PreviewMain />}</>;
}
