import { useParams } from "react-router-dom";
import LockedLetter from "../../components/letter/LockedLetter";
import OpenedLetter from "../../components/letter/OpenedLetter";
import { useEffect, useState } from "react";
import type { Letter } from "../../types/letter";
import { getLetter } from "../../api/letters";
import UnlockTransition from "../../components/letter/UnlockTransition";

export default function LetterPage() {
  const { id } = useParams<{ id: string }>();
  const [letter, setLetter] = useState<Letter | null>(null);
  const [transition, setTransition] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  useEffect(() => {
    async function fetch() {
      if (!id) return;
      const data = await getLetter(id);

      if (!data) return;

      setLetter(data);
      const now = Date.now();

      if (data.openAt > now) {
        setIsLocked(true);
        return;
      }

      setIsLocked(false);

      const viewed = localStorage.getItem(`opened-${data.id}`);

      if (!viewed) {
        setTransition(true);

        setTimeout(() => {
          setTransition(false);
          localStorage.setItem(`opened-${data.id}`, "true");
        }, 1000);
      }
    }

    fetch();
  }, [id]);

  if (!letter) return null;

  if (isLocked) {
    return <LockedLetter letter={letter} />;
  }

  const viewed = localStorage.getItem(`opened-${letter.id}`);

  if (!viewed && transition) {
    return <UnlockTransition />;
  }

  return <OpenedLetter letter={letter} />;
}
