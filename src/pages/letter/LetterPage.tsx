import { useParams } from "react-router-dom";
import LockedLetter from "../../components/letter/LockedLetter";
import OpenedLetter from "../../components/letter/OpenedLetter";
import { useEffect, useState } from "react";
import type { Letter } from "../../types/letter";
import { getLetters } from "../../mock/api/letters";
import TODAY_TIMESTAMP from "../../utils/todayTimestamp";

export default function LetterPage() {
  const { id } = useParams<{ id: string }>();
  const [letter, setLetter] = useState<Letter | null>(null);

  useEffect(() => {
    async function fetch() {
      const letters = await getLetters();
      const targetLetter = letters.find((letter) => letter.id === id) ?? null;
      setLetter(targetLetter);
    }
    fetch();
  }, [id]);

  if (!letter) return null;

  const isOpen = TODAY_TIMESTAMP >= letter.openAt;

  return isOpen ? (
    <OpenedLetter letter={letter} />
  ) : (
    <LockedLetter letter={letter} />
  );
}
