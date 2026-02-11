import { db } from "./firebase";
import {
  addDoc,
  collection,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

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
