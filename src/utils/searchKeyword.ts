import type { MusicMeta } from "../types/musicMeta";

const API_KEY = import.meta.env.VITE_MY_API_KEY;

export async function searchKeyword(keyword: string) {
  const baseUrl = "https://ws.audioscrobbler.com/2.0/";
  const trackUrl = `${baseUrl}?method=track.search&track=${keyword}&limit=30&api_key=${API_KEY}&format=json`;

  try {
    const response = await fetch(trackUrl);
    const data = await response.json();

    if (!data.results || !data.results.trackmatches) {
      console.log(data);
      return [];
    }

    const tracks = data.results.trackmatches.track.map((track: MusicMeta) => ({
      name: track.name,
      artist: track.artist,
    }));

    return tracks;
  } catch (error) {
    console.error(error);
    return [];
  }
}
