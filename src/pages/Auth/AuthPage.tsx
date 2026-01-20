import Auth from "../../components/auth/Auth";
import type { AuthProvider } from "../../types/auth";

interface AuthPageProps {
  onLogin: (provider: AuthProvider) => void;
}

export default function AuthPage({ onLogin }: AuthPageProps) {
  return <Auth onLogin={onLogin} />;
}
