import type { Timestamp } from "firebase/firestore";
import type { MusicMeta } from "./musicMeta";

export interface Letter {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  openAt: Timestamp;

  song: MusicMeta;
}
