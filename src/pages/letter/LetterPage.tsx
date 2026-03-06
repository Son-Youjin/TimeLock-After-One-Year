import { useParams } from "react-router-dom";
import LockedLetter from "../../components/letter/LockedLetter";
import OpenedLetter from "../../components/letter/OpenedLetter";
import { useEffect, useState } from "react";
import type { Letter } from "../../types/letter";
import { getLetter } from "../../api/letters";
import UnlockTransition from "../../components/letter/UnlockTransition";
import type { openStage } from "../../types/openStage";

export default function LetterPage() {
  const { id } = useParams<{ id: string }>();
  const [letter, setLetter] = useState<Letter | null>(null);
  const [stage, setStage] = useState<openStage>("locked");

  useEffect(() => {
    async function fetch() {
      if (!id) return;
      const data = await getLetter(id);
      setLetter(data);
    }
    fetch();
  }, [id]);

  useEffect(() => {
    if (!letter) return;

    const viewed = localStorage.getItem(`opened-${letter.id}`);

    if (viewed) {
      setStage("opened");
      return;
    }

    const now = Date.now();
    const untilOpen = letter.openAt - now;

    const openTimer = setTimeout(
      () => {
        setStage("transition");

        setTimeout(() => {
          setStage("opened");
          localStorage.setItem(`opened-${letter.id}`, "true");
        }, 1000);
      },

      Math.max(untilOpen, 0),
    );

    return () => clearTimeout(openTimer);
  }, [letter]);

  if (!letter) return null;

  if (stage === "locked") {
    return <LockedLetter letter={letter} />;
  }

  if (stage === "transition") {
    return <UnlockTransition />;
  }

  return <OpenedLetter letter={letter} />;
}
