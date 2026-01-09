import { db } from "../db";

export function getLetters() {
  return Promise.resolve(db.letters);
}

export function getLetterById(id: string) {
  const letter = db.letters.find((letter) => letter.id === id);
  return Promise.resolve(letter);
}
