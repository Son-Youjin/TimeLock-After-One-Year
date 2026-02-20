import type { Letter } from "../types/letter";
import type { LetterStatus } from "../types/letterStatus";

export interface getLetterTimeProps {
  total: number;
  remain: number;
  progress: number;
  dDay: number;
  isOpened: boolean;
}

export function getLetterTime(letter: Letter): getLetterTimeProps {
  const now = Date.now();

  const total = letter.openAt - letter.createdAt;
  const remain = letter.openAt - now;

  const progress =
    total <= 0 ? 1 : Math.min(Math.max(1 - remain / total, 0), 1);

  const dDay = Math.floor(remain / (1000 * 60 * 60 * 24));

  return {
    total,
    remain,
    progress,
    dDay,
    isOpened: remain <= 0,
  };
}

export function getLetterStatus(letter: Letter): LetterStatus {
  const { progress, dDay, isOpened } = getLetterTime(letter);

  if (isOpened) return "OPENED";
  if (dDay === 1) return "ONE_DAY";
  if (progress >= 0.5) return "HALF";

  return "PENDING";
}
