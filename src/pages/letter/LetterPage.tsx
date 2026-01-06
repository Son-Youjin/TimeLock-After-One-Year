import LockedLetter from "../../components/letter/LockedLetter";
import OpenedLetter from "../../components/letter/OpenedLetter";

export default function LetterPage() {
  const now = Date.now();
  const openAt = now + 60 * 1000;

  //TODO: 시간 처리
  const isOpen = now >= openAt;

  return isOpen ? <OpenedLetter /> : <LockedLetter />;
}
