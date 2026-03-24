import type { User } from "firebase/auth";
import LoginMain from "../../components/main/LoginMain";
import PreviewMain from "../../components/main/PreviewMain";
import NameModal from "../../components/auth/NameModal";

interface HomePageProps {
  isLogin: boolean;
  user: User | null;
}

export default function HomePage({ isLogin, user }: HomePageProps) {
  if (!isLogin) {
    return <PreviewMain />;
  }

  if (user && !user.displayName) {
    return <NameModal user={user} />;
  }

  return <LoginMain user={user} />;
}
