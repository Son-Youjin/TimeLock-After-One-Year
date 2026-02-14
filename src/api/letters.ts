import type { Letter } from "../types/letter";
import TODAY_TIMESTAMP from "../utils/todayTimestamp";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
  where,
} from "firebase/firestore";

export async function getNextComingLetter(uid: string) {
  const now = Timestamp.fromMillis(Date.now());

  const que = query(
    collection(db, "letters"),
    where("userId", "==", uid),
    where("openAt", ">=", now),
    orderBy("openAt", "asc"),
    limit(1),
  );

  const snapshot = await getDocs(que);

  if (snapshot.empty) return null;

  const docSnap = snapshot.docs[0];
  const data = docSnap.data();

  return { id: docSnap.id, ...data, openAt: data.openAt.toMillis() } as Letter;
}

export async function getLetter(id: string) {
  const docRef = doc(db, "letters", id);
  const snapshot = await getDoc(docRef);

  if (!snapshot.exists()) return null;

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Letter;
}

export async function getLettersByUser(userId: string) {
  const que = query(collection(db, "letters"), where("userId", "==", userId));

  const snapshot = await getDocs(que);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Letter[];
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
