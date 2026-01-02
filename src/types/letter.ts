import type { MusicMeta } from "./musicMeta";

export interface Letter {
  id: string;
  email: string;

  title: string;
  content: string;

  music?: MusicMeta;

  createAt: Date;
  openAt: Date;

  isOpened: boolean;
}
