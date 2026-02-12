import { useParams } from "react-router-dom";
import LockedLetter from "../../components/letter/LockedLetter";
import OpenedLetter from "../../components/letter/OpenedLetter";
import { useEffect, useState } from "react";
import type { Letter } from "../../types/letter";
import TODAY_TIMESTAMP from "../../utils/todayTimestamp";
import { getLetter } from "../../api/letters";

export default function LetterPage() {
  const { id } = useParams<{ id: string }>();
  const [letter, setLetter] = useState<Letter | null>(null);

  useEffect(() => {
    async function fetch() {
      if (!id) return;
      const data = await getLetter(id);
      // const targetLetter = letters.find((letter) => letter.id === id) ?? null;
      setLetter(data);
    }
    fetch();
  }, [id]);

  if (!letter) return null;

  const isOpen = TODAY_TIMESTAMP >= letter.openAt.toDate().getTime();

  return isOpen ? (
    <OpenedLetter letter={letter} />
  ) : (
    <LockedLetter letter={letter} />
  );
}
