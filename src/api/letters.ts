import type { Letter } from "../types/letter";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

export async function getLetter(id: string) {
  const docRef = doc(db, "letters", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Letter;
}

export async function createLetter({
  userId,
  title,
  musicTitle,
  musicArtist,
  content,
  openAt,
  videoId,
}: {
  userId: string;
  title: string;
  musicTitle: string;
  musicArtist: string;
  content: string;
  openAt: Timestamp;
  videoId: string;
}) {
  return addDoc(collection(db, "letters"), {
    userId,
    title,
    musicTitle,
    musicArtist,
    content,
    openAt,
    videoId,
    isOpened: false,
    createdAt: serverTimestamp(),
  });
}
