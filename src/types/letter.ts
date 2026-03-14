import type { MusicMeta } from "./musicMeta";

export interface Letter {
  userId: string;
  id: string;
  title: string;
  content: string;
  createdAt: number;
  openAt: number;
  isOpened: boolean;
  pushSent: boolean;

  song: MusicMeta;
}
