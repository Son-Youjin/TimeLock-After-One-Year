import type { User } from "firebase/auth";
import LoginMain from "../../components/main/LoginMain";
import PreviewMain from "../../components/main/PreviewMain";

interface HomePageProps {
  isLogin: boolean;
  user: User | null;
}

export default function HomePage({ isLogin, user }: HomePageProps) {
  return <>{isLogin ? <LoginMain user={user} /> : <PreviewMain />}</>;
}
