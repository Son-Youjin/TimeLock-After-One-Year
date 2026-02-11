import type { User } from "firebase/auth";
import Write from "../../components/write/Write";

export default function WritePage({ user }: { user: User | null }) {
  if (!user) return null;

  return (
    <>
      <Write user={user} />
    </>
  );
}
