import { useParams } from "react-router-dom";
import LockedLetter from "../../components/letter/LockedLetter";
import OpenedLetter from "../../components/letter/OpenedLetter";
import { useEffect, useState } from "react";
import type { Letter } from "../../types/letter";
import { getLetter } from "../../api/letters";
import { isOpenByDate } from "../../utils/isOpenByDate";

export default function LetterPage() {
  const { id } = useParams<{ id: string }>();
  const [letter, setLetter] = useState<Letter | null>(null);

  useEffect(() => {
    async function fetch() {
      if (!id) return;
      const data = await getLetter(id);
      setLetter(data);
    }
    fetch();
  }, [id]);

  if (!letter) return null;

  const isOpen = isOpenByDate(letter.openAt);

  return isOpen ? (
    <OpenedLetter letter={letter} />
  ) : (
    <LockedLetter letter={letter} />
  );
}
