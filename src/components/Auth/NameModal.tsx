import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../api/firebase";
import type { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";

interface NameModalProps {
  user: User;
}

export default function NameModal({ user }: NameModalProps) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSave = async () => {
    if (!name.trim()) return;

    try {
      await updateProfile(user, {
        displayName: name,
      });

      await setDoc(doc(db, "users", user.uid), {
        name,
      });

      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <input
        placeholder="이름 입력"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleSave}>저장</button>
    </div>
  );
}
