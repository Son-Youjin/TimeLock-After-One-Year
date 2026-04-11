import { useParams } from "react-router-dom";
import LockedLetter from "../../components/letter/LockedLetter";
import OpenedLetter from "../../components/letter/OpenedLetter";
import { useEffect, useState } from "react";
import UnlockTransition from "../../components/letter/UnlockTransition";
import useLetterItem from "../../hooks/useLetterItem";

export default function LetterPage() {
  const { id } = useParams<{ id: string }>();
  const { data } = useLetterItem(id || "");
  const [transition, setTransition] = useState(false);

  const now = Date.now();
  const isLocked = data ? data.openAt > now : true;

  useEffect(() => {
    if (!data || isLocked) return;

    const viewed = localStorage.getItem(`opened-${data.id}`);
    if (!viewed) {
      setTransition(true);
      const timer = setTimeout(() => {
        setTransition(false);
        localStorage.setItem(`opened-${data.id}`, "true");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [data, isLocked]);

  if (!data) return null;

  if (isLocked) {
    return <LockedLetter letter={data} />;
  }

  const viewed = localStorage.getItem(`opened-${data.id}`);

  if (!viewed && transition) {
    return <UnlockTransition />;
  }

  return <OpenedLetter letter={data} />;
}
